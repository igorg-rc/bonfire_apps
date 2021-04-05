import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import './Industries.css'
import { Modal, Button } from 'react-materialize'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'

import { getIndustries, addIndustry, updateIndustry, deleteIndustry } from '../../../actions/industries'

import Layout from '../../Layout/Layout';


export default function Industries() {
	const history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getIndustries());
	}, [dispatch]);
	
	const industries = useSelector((state) => state.industries);
	const industry = useSelector((state) => state.industry);

	const [ filename, setFilename ] = useState("Select file");
	const [ file, setFile ] = useState();
	const [ title, setTitle ] = useState("");
	const [ uploadedItem, setUploadedItem ] = useState({});

	const [ formdata, setFormdata ] = useState({ title: "", file: "" });

	const onFileChangeHandler = e => {
		setFile(e.target.files[0]);
		setFilename(e.target.files[0].name);
	}

	const onTitleChangeHandler = e => {
		setTitle(e.target.value);
	}

	const cleanForm = () => {
		setTitle("");
		setFile({});
		setFilename("");
	}

	const addIndustryHandler = async (e) => {
		e.preventDefault();
		console.log(formdata);
		const formData = new FormData();
		formData.append('image', file);
		formData.append('title', title);

		cleanForm();
		
		try {
			const url = "/api/industries";
			const res = await axios.post(url, formData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})

			setUploadedItem({ filename, filepath, title });
			const { filename, filepath, title } = res.data;

		cleanForm();

		} catch (error) {
			console.log(error);
		}
		history.push("/");
		history.push("/industries");
	}
	
	
	const [currentId, setCurrentId ] = useState("");

	const EditIndustryHandler = async (e, id) => {
		e.preventDefault();
		
		const formdata = new FormData();
			formdata.append('title', title);
			formdata.append('image', file);

		try {
			const url = `/api/industries/${currentId}`;
			
			const res = await axios.patch(url, formdata, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})
			setUploadedItem({ title, filename, filepath });
			const { title, filename, filepath } = res.data;

		} catch (error) {
			console.log(error);
		}
		window.location.reload();
		history.push('/');
		history.push('/industries');
		
	}


	const industriesList = industries.map(industry => {
		return 	<div className="col s12 m6 l4" key={ industry._id }>
							<div className="card">
								<div className="card-image">
									<img src={industry.imgUrl} alt={title} />
								</div>
							</div>

							<div className="card">
								<div className="card-content indigo darken-1">
									<div className="row">
										<div className="col s8">
											<span className="card-title white-text left-align">{industry.title}</span>
										</div>
										<div className="col s4 flex">
											<Modal
												header={`Update "${industry.title}" item`} className="center-align"
												trigger={<a  href="#">
																	<i onClick={() => setCurrentId(industry._id)} className="material-icons white-text right card-icons">create</i>
																</a>}
												actions={[
													<form autoComplete="off" onSubmit={EditIndustryHandler} encType="multipart/form-data">
														
														<div className="center-align">
															<Button 
																flat 
																modal="close" 
																node="button" 
																waves="light"
																type="submit"
																onClick={()=>console.log(currentId)}
																className="teal white-text modal-actions" 
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
															>
																<i className="material-icons left">close</i>Cancel
															</Button>
														</div>
													</form>
												]}>
												<div className="center-align">
													<form action="#">
														<div className="row">
															<div className="col s9">
																<div className="input-field">
																	<textarea 
																		name="title"
																		required 
																		className="materialize-textarea area" 
																		defaultValue={industry.title}
																		onChange={onTitleChangeHandler}
																	>
																	</textarea>
																</div>
															</div>
															<div className="col s3">
																<div className="file-field input-field left">
																	<div className="btn right waves-effect waves-light">
																		<span><i className="material-icons left">publish</i>Select file</span>
																		<input required name="image" type="file" onChange={onFileChangeHandler} />
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

											<Modal
												actions={[
													<div className="center-align">
														<Button flat modal="close" node="button" waves="light" className="teal white-text" onClick={ () => dispatch(deleteIndustry(industry._id)) }><i className="material-icons left card-icons">delete</i>Delete</Button>
														<Button flat modal="close" node="button" waves="light" className="indigo darken-1 white-text center-align"><i className="material-icons left card-icons">close</i>Cancel</Button>
													</div>
												]}
												header={`Delete "${industry.title}" item. Are you sure?`} className="center-align"
												trigger={<a href="#"><i className="material-icons indigo-text white-text right card-icons">delete</i></a>}>
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
			<div  id="industries" style={{ paddingTop: '75px', paddingLeft: '0' }} className="">
				<div className="row">
					<div className="col s12 indigo darken-1">
						<div><span className="category-title left white-text">Industries</span></div>
						</div>
					<div className="col s12">
						
						<div className="content">
							<div className="row">
								{industriesList}
							</div>
							<div className="row">
								<div className="col">
									

									<Modal
										header={`Add new industry`} className="center-align"
										trigger={<button href="#" className="btn teal waves-effect waves-light"><i className="material-icons left">add_circle_outline</i>Add industry</button>}
										actions={[
											<form autoComplete="off" onSubmit={addIndustryHandler} encType="multipart/form-data">
												<div className="center-align">
												<Button 
													flat 
													modal="close" 
													node="button" 
													waves="light"
													className="teal white-text modal-actions" 
													onClick={ () => {console.log('Clicked!')} }>
													<div className="btn-inner">
														<div className="valign-wrapper">
															<i type="submit" className="material-icons left">add</i>Add
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
												</div>
											</form>
										]}>

										<div className="center-align">
												<div className="row">
													<div className="col s9" style={{ textAlign: 'right' }}>
														<div className="input-field" >
															<input 
																id="title" 
																type="text" 
																name="title"
																required 
																onChange={onTitleChangeHandler}
																value={title}
																aria-required="true"
																style={{ background: 'transparent	' }}
															/>
															<label htmlFor="title">Title</label>
														</div>
													</div>

													<div className="col s3">
														<div className="file-field input-field">
															<div className="btn left waves-effect waves-light">
																<span><i className="material-icons left">publish</i>Select file</span>

																<input 
																	type="file" 
																	name="image" 
																	onChange={onFileChangeHandler} 
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
			</div>
			</>
		)
}