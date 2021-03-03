import React from "react"
import mainLogo from "../../img/logo/index1_square.png"
import { Link } from 'react-scroll'
import classes from './Styled.module.css';

export default function Styled () {
  return (
    <div id="helloscreen" className={classes.Background}>
      <div className={classes.HelloBox.concat(' ', "white-text")}>
        <div className="container">  
          <img src={mainLogo} alt="logo" className={classes.LogoImage} />
          <h1>Bonfire<span className="teal-text">Apps</span></h1>
          <h5>Flaming passion in creating the future</h5>
          <h5>Fast, intelligent, attractive apps for you</h5>
          <Link 
            href="#technologies"
            to="technologies"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          ><i className="medium material-icons orange-text text-darken-1">arrow_downward</i>
          </Link>
          </div>
        </div>
    </div>
  );
}



