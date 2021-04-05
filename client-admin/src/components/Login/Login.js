import React, { useState, useEffect } from 'react'
import axios from "axios"
import './Login.css'
import logo from '../../img/layout/index1_square_white_96.png'

export default function Login ({ history }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/login",
        { username, password },
        config
      );

      localStorage.setItem("authToken", data.token);

      history.push("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
    
  return (
    <div id="page">
      <div id="login" style={{ paddingTop: '75px', paddingLeft: '' }}>
        <div className="" style={{ height: '100vh' }}>

          <div className="row">
            <div className="col s6 offset-s3 form-wrapper indigo darken-1 white-text">
              <div className="row">
                <div className="col s12 logo-handler">
                  <img src={logo} alt="logo" className="form_logo-img" />
                  <h3>BonfireApps</h3>
                  <h6>Admin panel</h6>
                </div>
              </div>

              <form onSubmit={loginHandler}>
              {error && <span className="error-message">{error}</span>}
                <div className="row">
                  <div className="input-field col s10 offset-s1">
                    <i className="material-icons prefix">account_circle</i>
                    <input 
                      id="username" 
                      type="text" 
                      name="username"
                      required 
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      tabIndex={1}
                    />
                    <label htmlFor="username">Login</label>
                  </div>
                </div>


                <div className="row">
                  <div className="input-field col s10 offset-s1">
                    <i className="material-icons prefix">vpn_key</i>
                    <input 
                      id="password" 
                      type="password" 
                      name="password" 
                      required
                      autoComplete="true"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      tabIndex={2}
                      />
                    <label htmlFor="password">Password</label>
                  </div>
                </div>

              
                <div className="form-links">
                  <div className="row">
                    <div className="col s6 left">
                      
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s10 offset-s1">
                    <button type="submit" className="waves-effect waves-light btn"><i className="material-icons left">login</i>Sign in</button>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
