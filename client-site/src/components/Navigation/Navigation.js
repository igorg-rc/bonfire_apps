import React, { Component } from 'react'
import { Link } from 'react-scroll'
import M from 'materialize-css/dist/js/materialize.min.js'

import classes from './Navigation.module.css'

export default class Navigation extends Component {
  componentDidMount() {
    
  document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelector('.sidenav');
    let instance = M.Sidenav.init(elems, {
      edge: 'left', 
      menuWidth: 200,
      inDuration: 300,
      outDuration: 500,
      draggable: true
    });
  });
    

    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY < 30) {
      document.querySelector(".main-nav").style.backgroundColor = "transparent";
    } else {
      document.querySelector(".main-nav").style.backgroundColor = "#00796b";
      document.querySelector(".main-nav").style.transition = "0.5s";
    }
  };

  render() {
    return (
      <div className={classes.Holder}>
        <div id="navigation">
          <div className="navbar-fixed">
            <nav className="main-nav">
              <div class="nav-wrapper">
                <div className="container">
                  <Link 
                    href="#helloscreen"
                    to="helloscreen"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={750}
                    className="left"
                  >BonfireApps
                  </Link>
                  <a href="#" data-target="mobile-demo" class="sidenav-trigger right"><i class="material-icons">menu</i></a>
                  <ul class="right hide-on-med-and-down sidedrawer">
                    <li>
                      <Link 
                        href="#technologies"
                        to="technologies"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={750}
                      >Technologies
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="#industries"
                        to="industries"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={750}
                      >Industries
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="#contactUs"
                        to="contactUs"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={750}
                        className="links"
                      >Contact us
                      </Link>
                    </li>
                  </ul>
                </div> 
            </div>
          </nav>
        </div> 
          <ul class="sidenav grey darken-4" id="mobile-demo">
            <li>
              <span className="hover hover-3"></span>
              <Link 
                className="sidedrawer-link sidenav-close"
                href="#helloscreen"
                to="helloscreen"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >BonfireApps
              </Link>
            </li>
            <li>
              <span className="hover hover-3"></span>
              <Link 
                className="sidedrawer-link sidenav-close"
                href="#technologies"
                to="technologies"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >Technologies
              </Link>
            </li>
            <li>
            <span className="hover hover-3"></span>
              <Link 
                className="sidedrawer-link sidenav-close" 
                href="#industries"
                to="industries"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >Industries
              </Link>
            </li>
            <li>
              <Link 
                className="sidedrawer-link sidenav-close" 
                href="#contactUs"
                to="contactUs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={300}
              >Contact us
              </Link>
            </li>
          </ul> 
        </div>
      </div>
    )
  }
}

