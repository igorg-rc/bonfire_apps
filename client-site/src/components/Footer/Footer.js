import React from 'react'
import { Link } from 'react-scroll'

import classes from './Footer.module.css'
import { contactPoints } from './FooterData'

export default function Footer() {
  const messengers = contactPoints.messengers.map(messenger => {
    return  <li>
              <img src={messenger.imgUrl} className={classes.Img_messengers} />
              <Link 
                href={`${'#messenger.title'}`}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="links"
              >{messenger.title}
              </Link>
            </li>
  });

  return (
    <div className="grey darken-4">
      <footer className="grey darken-4">
          <div className="container">
            <div id="footer-content" class="row wrapper">
              <div id="copyright" className="col s12 m7 l4 white-text left footer-item">
                <h5 class="white-text left-align">Bonfire<span className="teal-text text-lighten-2">Apps</span></h5>
                <p class="grey-text text-lighten-4 left-align">Make your future today. Let the bonfire outflame.</p>
                <p className="left-align">&copy; 2021, BonfireApps. All rights reserved.</p>
              </div>
              <div className="wrapper_links">
                <div className="col s12 m2 offset-m1 l3 offset-l1 footer-item">
                  <h5 className="white-text left-align">Links</h5>
                  <div id="footer-links">
                    <ul>
                      <li>
                        <Link 
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
                        <Link 
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
                          href="#contactUs"
                          to="contactUs"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          className="links"
                        >Contact us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col s12 m2 l3 footer-item">
                  <h5 className="white-text left-align">Call us</h5>
                  <div id="messenger-links">
                    <ul>
                      {messengers}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </div>
  )
}
