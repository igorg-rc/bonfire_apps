import React, { useState, useEffect } from 'react'

import classes from './Industries.module.css'
// import { industries } from './IndustriesData'

export default function Industries() {

  const [ industries, setIndustries ] = useState([]);

  useEffect(() => {
    const fetchIndustries = async () => {
      const industries = await fetch('/api/industries').then(data => data.json());
      setIndustries(industries);
    }
    fetchIndustries();
  }, [])
  
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
