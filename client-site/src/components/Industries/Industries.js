import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll' 

import classes from './Industries.module.css'
import { industries } from './IndustriesData'

export default function Industries() {
  
  const industriesList = industries.map(industry => {
    return  <div className="col s12 m6 l4">
              <div className={classes.Holder}>
                <img src={industry.imgUrl} alt={industry.title} className={classes.Img} />
                <div>
                  <h5 className={classes.LayerText}>{industry.title}</h5>
                </div>
                <div className={classes.Overlay}>
                  <h5 className={classes.OverlayText}>{industry.title}</h5>
                </div>
              </div>
            </div>
  });

  return (
    <>
      <div id="industries" className="grey darken-4 block">
        <div className="container">
          <h1 className="white-text block-title">Industries</h1>
          <div className="row">
            {industriesList}
          </div>
        </div>
      </div>

    </>
  )
}


// return  <div className="col s12 l4">
// <div className={classes.Holder}>
//   <img src={industry.imgUrl} alt="Avatar" class={classes.Img} />
//   <div className={classes.Overlay}>
//     <div className={classes.OverlayText}>
//       <h5>{industry.title}</h5>
//     </div>
//   </div>
// </div> 
// </div>
