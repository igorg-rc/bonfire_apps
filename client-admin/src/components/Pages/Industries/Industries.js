import React from 'react'

import './Industries.css'
import { industries } from './IndustriesData'
import {Modal, Button, Icon, TextInput, Textarea, Row, Col} from 'react-materialize'
import Layout from '../../Layout/Layout';

export default function Industries() {

	const industriesList = industries.map(industry => {
		return 	<div className="col s12 m6 l4">
							<div className="card">
								<div className="card-image">
									<img src={industry.imgUrl} alt={industry.title} />
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
																	<textarea id="icon_prefix2" className="materialize-textarea area" value={industry.title}></textarea>
																</div>
															</div>
															<div className="col s3">
																<div className="file-field input-field left">
																	<div className="btn right waves-effect waves-light">
																		<span><i className="material-icons left">publish</i>Select file</span>
																		<input type="file" />
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
			<div  id="technologies" style={{ paddingTop: '75px', paddingLeft: '0' }} className="">
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
										trigger={<a href="#" className="btn teal waves-effect waves-light"><i className="material-icons left">add_circle_outline</i>Add industry</a>}
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
												
											</div>
										]}>
										<div className="center-align">
											<form action="#">
												<div className="row">
													<div className="col s9" style={{ textAlign: 'right' }}>
														<div className="input-field" >
															<textarea id="icon_prefix2" className="materialize-textarea validate" required="" aria-required="true"></textarea>
															<label className="left"><span style={{ textAlign: 'left' }}>Title</span></label>
														</div>
													</div>

													<div className="col s3">
														<div className="file-field input-field">
															<div className="btn left waves-effect waves-light">
																<span><i className="material-icons left">publish</i>Select file</span>
																<input type="file" />
															</div>
															<div className="file-path-wrapper">
																<input className="file-path" type="text" />
															</div>
														</div>
													</div>
												</div>
											</form>
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