import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, Button } from 'react-materialize'
import axios from 'axios'
import { Link, useHistory, useRouteMatch } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Layout from '../../Layout/Layout'
import { getCategories } from '../../../actions/categories'

import './Technologies.css'
import { updateCategory, deleteCategory } from '../../../api'

export default function Technologies() {
	const [ category, setCategory ] = useState({ title: "", technologies: [] });
	const [ technology, setTechnology ] = useState({ title: "", image: {} });
	const categories = useSelector(state => state.categories);

	const [ title, setTitle ] = useState("");
	const [ file, setFile ] = useState();
	const [ filename, setFilename ] = useState();

	const { handleSubmit, register } = useForm();
	const history = useHistory();
	const match = useRouteMatch();

	const [ currentCategoryId, setCurrentCategoryId ] = useState();
	const [ currentTechId, setCurrentTechId ] = useState({ catId: "", techId: "" });
	const [ uploadedItem, setUploadedItem ] = useState({}); 
	const [ id, setId ] = useState();

	const onCategoryAdd = handleSubmit((data, e) => {
		e.preventDefault();
		axios.post('/api/technologies/categories', data, {
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		setCategory({...category, title: data });
		history.push('/');
		history.push('/technologies');
	})
	
	const dispatch = useDispatch();

	// const submitHandler = async (e) => {
	// 	e.preventDefault();
	// 	dispatch(updateCategory(category));
	// }

	const onCategoryEdit = (e, data, id) => {
		e.preventDefault();
		console.log({...category})
		axios.patch(`/api/technologies/categories/${currentCategoryId}`, {...category}, {
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({...category})
		});
		window.location.reload();

	}

	const onFileChangeHandler = e => {
		setFile(e.target.files[0]);
		setFilename(e.target.files[0].name);
	}

	const onTitleChangeHandler = e => {
		setTitle(e.target.value);
	}

	const onTechAdd = async e => {
		e.preventDefault();
		const techData = new FormData();
		techData.append('title', title);
		techData.append('image', file);
		console.log(title, file, currentCategoryId);
		try {
			const res = await axios.post(`/api/technologies/categories/${currentCategoryId}`, techData, {
				headers: {
					'Accept': 'multipart/form-data',
					'Content-Type': 'multipart/form-data'
				},
				body: techData
			})
		} catch (error) {
			console.log(error);
		}
		window.location.reload();
	}

	const onTechEdit = async (e) => {
		e.preventDefault();
		const techData = new FormData();
		techData.append('title', title);
		techData.append('image', file);
		console.log(currentTechId.catId, currentTechId.techId);
		
		try {
			const res = await axios.patch(`/api/technologies/categories/${currentTechId.catId}/tech/${currentTechId.techId}`, techData, { 
				headers: { 'Content-Type': 'multipart/form-data' },
				body: techData
			})

			const { title } = res.data;
			setUploadedItem({ title });
			console.log(res);

		} catch (error) {
			console.log(error);
		}
		window.location.reload();
	}

	const onTechDelete = async (catId, techId) => {
		try {
			axios.delete(`/api/technologies/categories/${catId}/tech/${techId}`);
			console.log(`Technology ${techId} was successfuly deleted`);
		} catch (error) {
			console.log(error)			
		}
		window.location.reload();
	}

	useEffect(() => {
		dispatch(getCategories());
	}, []);

	const categoriesList = categories.map(category => {
		return <div className="tech-category" key={category._id}>
							<div className="row indigo darken-1" style={{ marginBottom: '10px !important' }}>
								<div className="valign-wrapper">
									<div className="col s6">
										<span className="category-title white-text left">{ `${category.title}` }</span>
									</div>
									<div className="col s6">
										<div className="right" style={{ marginRight: '-0.4vw' }}>
											<Modal
												header={`Update "${category.title}" category`} 
												className="center-align"
												trigger={<a className="white-text">
																	<span className="title-icons">
																		<i className="material-icons" onClick={() => setCurrentCategoryId(category._id)}>create</i>
																	</span>
																</a>}
												actions={[
													<div className="center-align">
														<form onSubmit={onCategoryEdit}>
															<Button 
																flat 
																modal="close" 
																node="button" 
																waves="light"
																className="teal white-text modal-actions" 
																type="submit"
																onClick={()=>console.log(category._id)}
															>
																<div className="btn-inner">
																	<div className="valign-wrapper">
																		<i className="material-icons left">done</i>Update
																	</div>
																</div>
															</Button>
															<Button 
																flat 
																modal="close" 
																node="button" 
																waves="light"
																className="indigo darken-1 white-text modal-actions" 
																onClick={ () => {console.log('Clicked!')} }>
																<i className="material-icons left">close</i>Cancel
															</Button>
														</form>
													</div>
												]}>
												<div className="center-align">
														<div className="row">
															<div className="col s12">
																<div className="input-field">
																	<textarea 
																		id={category._id} 
																		className="materialize-textarea" 
																		defaultValue={category.title}
																		onChange={(e) => setCategory({...category, title: e.target.value})}
																	>
																	</textarea>
																</div>
															</div>
														</div>
												</div>
											</Modal>

											<Modal
												actions={[
													<div className="center-align">
														<Button 
															flat 
															modal="close" 
															node="button" 
															waves="light" 
															className="teal white-text" 
															onClick={ () => dispatch(deleteCategory(category._id)) }>
															<i className="material-icons left card-icons">delete</i>Delete
														</Button>
														<Button 
															flat 
															modal="close" 
															node="button" 
															waves="light" 
															className="indigo darken-1 white-text center-align">
															<i className="material-icons left card-icons">close</i>Cancel
														</Button>
													</div>
												]}
												header={`Delete "Frontend" category. Are you sure?`} className="center-align"
												trigger={<a className="white-text"><span className="title-icons"><i className="material-icons">delete</i></span></a>}>
											</Modal>
										</div>
									</div>
								</div>
							</div>

		<div className="row">
			<div className="right" style={{ width: '95%'}}>
				<table className="">
					<thead>
						<tr>
							<th className="th-img">Image</th>
							<th className="th-title">Title</th>
							<th className="th-actions right">Actions</th>
						</tr>
					</thead>
	
					<tbody>
						{category.technologies.map(tech => (
										 	<tr key={tech._id}>
												<td className="td-img"><div className="valign-wrapper"><img className="tech-icon" src={tech.imgUrl} alt={tech.title}></img></div></td>
												<td className="td-title"><span>{tech.title}</span></td>
												<td className="td-actions">
													<Modal
														actions={[
															<div className="center-align">
																<Button 
																	flat 
																	modal="close" 
																	node="button" 
																	waves="light" 
																	className="teal white-text" 
																	onClick={ (catId, techId) => onTechDelete(tech.categoryId, tech._id) }>
																	<i className="material-icons left card-icons">delete</i>Delete
																</Button>
																<Button 
																	flat 
																	modal="close" 
																	node="button" 
																	waves="light" 
																	className="indigo darken-1 white-text center-align">
																	<i className="material-icons left card-icons">close</i>Cancel
																</Button>
																
															</div>
														]}
														header={`Delete "${tech.title}" item. Are you sure?`} className="center-align"
														trigger={<a className="indigo-text modal-trigger right" href="#modal-delete-tech">
																			<i className="material-icons actions valign-wrapper" onClick={() => console.log(tech._id, tech.categoryId)}>delete</i>
																		</a>}>
													</Modal>

													<Modal
														header={`Update "${tech.title}" item`} 
														className="center-align"
														trigger={<a className="indigo-text modal-trigger right" href="#modal-delete-tech">
																			<i className="material-icons actions valign-wrapper" onClick={() => setCurrentTechId({ catId: tech.categoryId, techId: tech._id })}>create</i>
																		</a>}
														actions={[
															<div className="center-align">
																<form onSubmit={onTechEdit} encType="multipart/form-data">
																	<Button 
																		flat 
																		modal="close" 
																		node="button" 
																		waves="light"
																		className="teal white-text modal-actions" 
																		onClick={() => console.log(tech.title)}>
																		<div className="btn-inner">
																			<div className="valign-wrapper">
																				<i className="material-icons left">done</i>Update
																			</div>
																		</div>
																	</Button>
																	<Button 
																		flat 
																		modal="close" 
																		node="button" 
																		waves="light"
																		className="indigo darken-1 white-text modal-actions" 
																		>
																		<i className="material-icons left">close</i>Cancel
																	</Button>
																</form>
															</div>
														]}>
														<div className="center-align">
															<form action="#">
																<div className="row">
																	<div className="col s9">
																		<div className="input-field">
																			<textarea 
																				id={`id-${tech._id}`} 
																				name="title"
																				className="materialize-textarea" 
																				defaultValue={tech.title}
																				onChange={onTitleChangeHandler}
																			>
																			</textarea>
																		</div>
																	</div>
																	<div className="col s3">
																		<div className="file-field input-field">
																			<div className="btn teal right waves-effect waves-light">
																				<span><i className="material-icons left">publish</i>Select file</span>
																				<input 
																					type="file" 
																					name="image"
																					onChange={onFileChangeHandler} 
																				/>
																			</div>
																			<div className="file-path-wrapper">
																				<input className="file-path validate" type="text" />
																			</div>
																		</div>
																	</div>
																</div>
															</form>
														</div>
													</Modal>
												</td>
											</tr>
						))}
					</tbody>
				</table>

				<div className="center-align add-technology-btn row">
					<div className="col">
					<Modal
							header={`Add new technology`} className="center-align"
							trigger={<div>
												<button
													onClick={() => setCurrentCategoryId(category._id)}
													style={{ marginLeft: '-0.5vw' }} 
													className="btn indigo darken-1 waves-effect waves-light">
														<i  className="material-icons left">add_circle_outline</i>Add technology
												</button>
											</div>}
							actions={[
								<div className="center-align">
									<form onSubmit={onTechAdd} encType="multipart/form-data">
										<Button 
											flat 
											modal="close" 
											node="button" 
											waves="light"
											type="submit"
											className="teal white-text modal-actions" 
											onClick={ () => {console.log('Clicked!')} }>
											<div className="btn-inner">
												<div className="valign-wrapper">
													<i className="material-icons left">add</i>Add
												</div>
											</div>
										</Button>
										<Button 
											flat 
											modal="close" 
											node="button" 
											waves="light"
											className="indigo darken-1 white-text modal-actions" 
											onClick={ () => {console.log('Clicked!')} }>
											<i className="material-icons left">close</i>Cancel
										</Button>
									</form>
								</div>
							]}>
							<div className="center-align">
									<div className="row">
										<div className="col s9" style={{ textAlign: 'right' }}>
											<div className="input-field" >
												<input 
													type="text" 
													required="" 
													aria-required="true"
													name="title"
													onChange={onTitleChangeHandler}
												/>
												
												<label className="left"><span style={{ textAlign: 'left' }}>Title</span></label>
											</div>
										</div>

										<div className="col s3">
											<div className="file-field input-field">
												<div className="btn left waves-effect waves-light">
													<span><i className="material-icons left">publish</i>Select file</span>
													<input 
														type="file" 
														onChange={onFileChangeHandler}
														name="image"
													/>
												</div>
												<div className="file-path-wrapper">
													<input className="file-path" type="text" />
												</div>
											</div>
										</div>
									</div>
							</div>
						</Modal>
					</div>
				</div>

			</div>
		</div>
	</div>
	});

	return ( 
					<>
						<Layout />
						<div id="technologies" style={{ paddingTop: '75px'}}>
							<div className="row">
								<div className="col s12 grey lighten-4">
									<div className="content">
										<div className="row">
											{ categoriesList }
										</div>
									</div>
								</div>
							</div>
							

							<div style={{ textAlign: 'left', marginTop:'-2.5vh', marginBottom: '5vh' }}>
									<Modal
										header={`Add new category`} className="center-align"
										trigger={<a href="#" className="btn teal waves-effect waves-light"><i className="material-icons left">add_circle_outline</i>Add category</a>}
										actions={[
											<div className="center-align">
												<form onSubmit={onCategoryAdd}>
												<Button 
													flat 
													modal="close" 
													type="submit"
													node="button" 
													waves="light"
													className="teal white-text modal-actions" 
													>
													<div className="btn-inner">
														<div className="valign-wrapper">
															<i className="material-icons left">add</i>Add
														</div>
													</div>
												</Button>
												<Button 
													flat 
													modal="close" 
													node="button" 
													waves="light"
													className="indigo darken-1 white-text modal-actions" 
													onClick={ () => {console.log('Clicked!')} }>
													<i className="material-icons left">close</i>Cancel
												</Button>
												</form>
											</div>
										]}>
										<div className="center-align">
												<div className="row">
													<div className="col s12" style={{ textAlign: 'right' }}>
														<div className="input-field" >
															<textarea 
																type="text"
																id="icon_prefix2" 
																name="title" 
																onChange={(e) => setCategory({ title: e.target.value })}
																className="materialize-textarea validate" 
																required="" 
																aria-required="true" 
																ref={register}>
															</textarea>		
															<label htmlFor="title" className="left"><span style={{ textAlign: 'left' }}>Title</span></label>
														</div>
													</div>

												</div>
										</div>
									</Modal>
								</div>
						</div>
					</>
	)
}
