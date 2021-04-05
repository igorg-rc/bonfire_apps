import React, { useState, useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { NavLink, useHistory } from 'react-router-dom'
import axios from 'axios'

import './Layout.css'
import logo from '../../img/layout/index1_square_white_96.png'

export default function Layout() {
  const history = useHistory();
  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("authToken");
  //   if (loggedInUser) {
  //     const foundUser = JSON.parse(loggedInUser);
  //     setUser(foundUser);
  //   }
  // }, []);
  const logout = () => {
    localStorage.removeItem("authToken");
    history.push('/login');
  };


    return (
      <>
        <div className="has-fixed-sidebar">

            <ul id="sidenav-left" className="sidenav sidenav-fixed indigo darken-1 white-text left-align">
              <li className="valign-wrapper">
                <img className="img-logo" src={logo} />
                <h4>Admin panel</h4>
              </li>
              <li><NavLink to="/technologies" activeclassname="active" className="waves-effect white-text">Technologies<i className="material-icons white-text">build</i></NavLink></li>
              <li><NavLink to="/industries" activeclassname="active" className="waves-effect white-text">Industries<i className="material-icons white-text">cases</i></NavLink></li>
              <li><NavLink to="/messages" activeclassname="active" className="waves-effect white-text">Messages<i className="material-icons white-text">email</i></NavLink></li>
              <div style={{ backgroundColor: '#5E69AF', height: '0.17vh', margin: '1vh 1vw' }}></div>
              <li><a onClick={() => logout()} activeclassname="active" className="waves-effect white-text">Logout<i className="material-icons white-text">logout</i></a></li>
            </ul>
        </div>
      </>
    )
}






