import React from 'react'

import { industries } from '../Industries/IndustriesData'
import classes from './IT_support.module.css'
import './IT_support.css'
  
export default function IT_support() {
  const industriesList = industries.map(industry => {
    return  <div class="zoom-effect-container">
              <div class="image-card">
                <img src={industry.imgUrl}/>
              </div>
              <div className="overlay">
                <h4 className="overlay-text">{industry.title}</h4>
              </div>
              <div>
                <h4 className="layer-text">{industry.title}</h4>
              </div>
            </div>
  });

  return (
        <>
          <div className="container">
              <div className="wrapper">
                { industriesList }
            </div>
          </div>

        </>
        
  )
}