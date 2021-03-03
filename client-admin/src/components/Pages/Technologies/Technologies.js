import React, { useEffect } from 'react'
import { technologies } from './TechnologiesData'
import { Modal, Button } from 'react-materialize'

import Layout from '../../Layout/Layout'

import './Technologies.css'

export default function Technologies() {

	const frontendList = technologies.frontend.map(technology => {
		return	<tr>
							<td className="td-img"><div className="valign-wrapper"><img className="tech-icon" src={technology.imgUrl} alt={technology.title}></img></div></td>
							<td className="td-title"><span>{technology.title}</span></td>
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
												onClick={ () => {console.log('Clicked!')} }>
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
									header={`Delete "${technology.title}" item. Are you sure?`} className="center-align"
									trigger={<a className="indigo-text modal-trigger right" href="#modal-delete-tech"><i className="material-icons actions valign-wrapper">delete</i></a>}>
								</Modal>

								<Modal
									header={`Update "${technology.title}" item`} 
									className="center-align"
									trigger={<a className="indigo-text modal-trigger right" href="#modal-delete-tech"><i className="material-icons actions valign-wrapper">create</i></a>}
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
														<textarea id="icon_prefix2" className="materialize-textarea" value={technology.title}></textarea>
													</div>
												</div>
												<div className="col s3">
													<div className="file-field input-field">
														<div className="btn teal right waves-effect waves-light">
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
							</td>
						</tr>
	});

	const backendList = technologies.backend.map(technology => {
		return	<tr>
							<td className="td-img"><div className="valign-wrapper"><img className="tech-icon" src={technology.imgUrl} alt={technology.title}></img></div></td>
							<td className="td-title"><span>{technology.title}</span></td>
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
												onClick={ () => {console.log('Clicked!')} }>
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
									header={`Delete "${technology.title}" item. Are you sure?`} className="center-align"
									trigger={<a className="indigo-text modal-trigger right" href="#modal-delete-tech"><i className="material-icons actions valign-wrapper">delete</i></a>}>
								</Modal>

								<Modal
									header={`Update "${technology.title}" item`} 
									className="center-align"
									trigger={<a className="indigo-text modal-trigger right" href="#modal-delete-tech"><i className="material-icons actions valign-wrapper">create</i></a>}
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
														<textarea id="icon_prefix2" className="materialize-textarea" value={technology.title}></textarea>
													</div>
												</div>
												<div className="col s3">
													<div className="file-field input-field">
														<div className="btn teal right waves-effect waves-light">
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
							</td>
						</tr>
	});

	const toolsList = technologies.tools.map(technology => {
		return	<tr>
							<td className="td-img"><div className="valign-wrapper"><img className="tech-icon" src={technology.imgUrl} alt={technology.title}></img></div></td>
							<td className="td-title"><span>{technology.title}</span></td>
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
												onClick={ () => {console.log('Clicked!')} }>
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
									header={`Delete "${technology.title}" item. Are you sure?`} className="center-align"
									trigger={<a className="indigo-text modal-trigger right" href="#modal-delete-tech"><i className="material-icons actions valign-wrapper">delete</i></a>}>
								</Modal>

								<Modal
									header={`Update "${technology.title}" item`} 
									className="center-align"
									trigger={<a className="indigo-text modal-trigger right" href="#modal-delete-tech"><i className="material-icons actions valign-wrapper">create</i></a>}
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
														<textarea id="icon_prefix2" className="materialize-textarea" value={technology.title}></textarea>
													</div>
												</div>
												<div className="col s3">
													<div className="file-field input-field">
														<div className="btn teal right waves-effect waves-light">
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
							</td>
						</tr>
	});

	const apiList = technologies.api.map(technology => {
		return	<tr>
							<td className="td-img"><div className="valign-wrapper"><img className="tech-icon" src={technology.imgUrl} alt={technology.title}></img></div></td>
							<td className="td-title"><span>{technology.title}</span></td>
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
												onClick={ () => {console.log('Clicked!')} }>
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
									header={`Delete "${technology.title}" item. Are you sure?`} className="center-align"
									trigger={<a className="indigo-text modal-trigger right" href="#modal-delete-tech"><i className="material-icons actions valign-wrapper">delete</i></a>}>
								</Modal>

								<Modal
									header={`Update "${technology.title}" item`} 
									className="center-align"
									trigger={<a className="indigo-text modal-trigger right" href="#modal-delete-tech"><i className="material-icons actions valign-wrapper">create</i></a>}
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
														<textarea id="icon_prefix2" className="materialize-textarea" value={technology.title}></textarea>
													</div>
												</div>
												<div className="col s3">
													<div className="file-field input-field">
														<div className="btn teal right waves-effect waves-light">
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
							</td>
						</tr>
	});

	return (
					<>
						<Layout />
						<div id="technologies" style={{ paddingTop: '75px'}}>
							<div className="row">
								<div className="col s12 grey lighten-4">
									<div className="content">
										<div id="frontend" className="tech-category">
											<div className="row indigo darken-1" style={{ marginBottom: '10px !important' }}>
												<div className="valign-wrapper">
													<div className="col s6">
														<span className="category-title white-text left">{ Object.keys(technologies)[0].charAt(0).toUpperCase() + Object.keys(technologies)[0].slice(1) }</span>
													</div>
													<div className="col s6">
														<div className="right" style={{ marginRight: '-0.4vw' }}>
															<Modal
																header={`Update "Frontend" category`} 
																className="center-align"
																trigger={<a className="white-text"><span className="title-icons"><i className="material-icons">create</i></span></a>}
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
																					<textarea id="icon_prefix2" className="materialize-textarea" value="Frontend"></textarea>
																				</div>
																			</div>
																			<div className="col s3">
																				<div className="file-field input-field">
																					<div className="btn teal right waves-effect waves-light">
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
																		<Button 
																			flat 
																			modal="close" 
																			node="button" 
																			waves="light" 
																			className="teal white-text" 
																			onClick={ () => {console.log('Clicked!')} }>
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
															{frontendList}
														</tbody>
													</table>

													<div className="center-align add-technology-btn row">
														<div className="col">
														<Modal
																header={`Add new technology`} className="center-align"
																trigger={<a href="#" className="btn indigo darken-1 waves-effect waves-light"><i className="material-icons left">add_circle_outline</i>Add technology</a>}
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

										<div id="backend" className="tech-category">
											<div className="row indigo darken-1">
												<div className="valign-wrapper">
													<div className="col s6">
														<span className="category-title white-text left">{ Object.keys(technologies)[1].charAt(0).toUpperCase() + Object.keys(technologies)[1].slice(1) }</span>
													</div>
													<div className="col s6">
														<div className="right" style={{ marginRight: '-0.4vw' }}>
														<Modal
																header={`Update "Backend" category`} 
																className="center-align"
																trigger={<a className="white-text"><span className="title-icons"><i className="material-icons">create</i></span></a>}
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
																					<textarea id="icon_prefix2" className="materialize-textarea" value="Frontend"></textarea>
																				</div>
																			</div>
																			<div className="col s3">
																				<div className="file-field input-field">
																					<div className="btn teal right waves-effect waves-light">
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
																		<Button 
																			flat 
																			modal="close" 
																			node="button" 
																			waves="light" 
																			className="teal white-text" 
																			onClick={ () => {console.log('Clicked!')} }>
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
																header={`Delete "Backend" category. Are you sure?`} className="center-align"
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
															{backendList}
														</tbody>
													</table>

													<div className="center-align add-technology-btn row">
														<div className="col">
														<Modal
																header={`Add new technology`} className="center-align"
																trigger={<a href="#" className="btn indigo darken-1 waves-effect waves-light"><i className="material-icons left">add_circle_outline</i>Add technology</a>}
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


										<div id="tools" className="tech-category">
											<div className="row indigo darken-1">
												<div className="valign-wrapper">
													<div className="col s6">
														<span className="category-title white-text left">{ Object.keys(technologies)[2].charAt(0).toUpperCase() + Object.keys(technologies)[2].slice(1) }</span>
													</div>
													<div className="col s6">
														<div className="right" style={{ marginRight: '-0.4vw' }}>
															<Modal
																	header={`Update "Tools" category`} 
																	className="center-align"
																	trigger={<a className="white-text"><span className="title-icons"><i className="material-icons">create</i></span></a>}
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
																						<textarea id="icon_prefix2" className="materialize-textarea" value="Frontend"></textarea>
																					</div>
																				</div>
																				<div className="col s3">
																					<div className="file-field input-field">
																						<div className="btn teal right waves-effect waves-light">
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
																			<Button 
																				flat 
																				modal="close" 
																				node="button" 
																				waves="light" 
																				className="teal white-text" 
																				onClick={ () => {console.log('Clicked!')} }>
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
																	header={`Delete "Tools" category. Are you sure?`} className="center-align"
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
															{toolsList}
														</tbody>
													</table>

													<div className="center-align add-technology-btn row">
														<div className="col">
														<Modal
																header={`Add new technology`} className="center-align"
																trigger={<a href="#" className="btn indigo darken-1 waves-effect waves-light"><i className="material-icons left">add_circle_outline</i>Add technology</a>}
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


										<div id="api" className="tech-category">
											<div className="row indigo darken-1">
												<div className="valign-wrapper">
													<div className="col s6">
														<span className="category-title white-text left">{ Object.keys(technologies)[3].toUpperCase() }</span>
													</div>
													<div className="col s6">
														<div className="right" style={{ marginRight: '-0.4vw' }}>
															<Modal
																	header={`Update "API" category`} 
																	className="center-align"
																	trigger={<a className="white-text"><span className="title-icons"><i className="material-icons">create</i></span></a>}
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
																						<textarea id="icon_prefix2" className="materialize-textarea" value="Frontend"></textarea>
																					</div>
																				</div>
																				<div className="col s3">
																					<div className="file-field input-field">
																						<div className="btn teal right waves-effect waves-light">
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
																			
																			<Button 
																				flat 
																				modal="close" 
																				node="button" 
																				waves="light" 
																				className="teal white-text" 
																				onClick={ () => {console.log('Clicked!')} }>
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
																	header={`Delete "API" category. Are you sure?`} className="center-align"
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
															{apiList}
														</tbody>
													</table>

													<div className="center-align add-technology-btn row">
														<div className="col">
															<Modal
																header={`Add new technology`} className="center-align"
																trigger={<a href="#" className="btn indigo darken-1 waves-effect waves-light"><i className="material-icons left">add_circle_outline</i>Add technology</a>}
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
								</div>
								<div style={{ textAlign: 'left' }}>
									<Modal
										header={`Add new category`} className="center-align"
										trigger={<a href="#" className="btn teal waves-effect waves-light"><i className="material-icons left">add_circle_outline</i>Add category</a>}
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
													<div className="col s12" style={{ textAlign: 'right' }}>
														<div className="input-field" >
															<textarea id="icon_prefix2" className="materialize-textarea validate" required="" aria-required="true"></textarea>
															<label className="left"><span style={{ textAlign: 'left' }}>Title</span></label>
														</div>
													</div>

												</div>
											</form>
										</div>
									</Modal>
								</div>
							</div>
						</div>
					</>
	)
}
