import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './Industries.css'
import { industries } from './IndustriesData'
import {Modal, Button, Icon, TextInput, Textarea, Row, Col} from 'react-materialize'
import { useSelector } from 'react-redux'
import FileBase from 'react-file-base64'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'

import { getIndustries, addIndustry } from '../../../actions/industries'

import Layout from '../../Layout/Layout';


export default function Industries() {
	const history = useHistory();

	const industries = useSelector((state) => state.industries);

	const [ filename, setFilename ] = useState("Select file");
	const [ file, setFile ] = useState();
	const [ title, setTitle ] = useState("");
	const [ uploadedItem, setUploadedItem ] = useState({});

	const onFileChangeHandler = e => {
		setFile(e.target.files[0]);
		setFilename(e.target.files[0].name);
	}

	const onTitleChangeHandler = e => {
		setTitle(e.target.value);
	}

	const cleanForm = () => {
		setTitle("");
		setFile();
		setFilename("");
	}

	const onSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('image', file);
		formData.append('title', title);

		// fetch("http://localhost:9000/api/industries", {
		// 	method: "POST",
		// 	body: formData
		// })
		// .then(result => {
		// 	console.log(formData)
		// })
		// .catch(error => {
		// 	console.log(error)
		// })

		cleanForm();
		
		try {
			const url = "http://localhost:9000/api/industries";
			const res = await axios.post(url, formData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})

			const { filename, filepath, title } = res.data;
			setUploadedItem({ filename, filepath, title });
		} catch (error) {
			console.log(error);
		}

	}


	const [ industryData, setIndustryData ] = useState({title: '', imgUrl: ''});


	console.log(industries);

	const dispatch = useDispatch();

  useEffect(() => {
		dispatch(getIndustries());
	}, [dispatch]);

	const addIndustryHandler = (event) => {
		event.preventDefault();

		dispatch(addIndustry(industryData));
	}


	const industriesList = industries.map(industry => {
		return 	<div className="col s12 m6 l4">
							<div className="card">
								<div className="card-image">
									<img src={`http://localhost:9000/${industry.imgUrl}`} alt={industry.title} />
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
												trigger={<a href="#"><i className="material-icons indigo-text white-text right card-icons">create</i></a>}
												actions={[
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
														
													</div>
												]}>
												<div className="center-align">
													<form action="#">
														<div className="row">
															<div className="col s9">
																<div className="input-field">
																	<textarea id="icon_prefix2" required className="materialize-textarea area" value={industry.title}></textarea>
																</div>
															</div>
															<div className="col s3">
																<div className="file-field input-field left">
																	<div className="btn right waves-effect waves-light">
																		<span><i className="material-icons left">publish</i>Select file</span>
																		<input required type="file" onChange={onFileChangeHandler} />
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
														<Button flat modal="close" node="button" waves="light" className="teal white-text" onClick={ () => {console.log('Clicked!')} }><i className="material-icons left card-icons">delete</i>Delete</Button>
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
											<form autoComplete="off" onSubmit={onSubmit} encType="multipart/form-data">
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
															<textarea 
																id="icon_prefix2" 
																name="title"
																className="materialize-textarea validate" 
																required="" 
																aria-required="true"
																value={title}
																onChange={onTitleChangeHandler}
																></textarea>
															<label className="left"><span style={{ textAlign: 'left' }}>Title</span></label>
														</div>
													</div>

													<div className="col s3">
														<div className="file-field input-field">
															<div className="btn left waves-effect waves-light">
																<span><i className="material-icons left">publish</i>Select file</span>

																<input type="file" name="image" onChange={onFileChangeHandler} />

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