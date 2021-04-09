import React, { Component, useState, useEffect } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import M from 'materialize-css/dist/js/materialize.min.js'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import classes from './Technologies.module.css'
import './Technologies.css'

export default function Technologies() {
  const [ instance, setInstance ] = useState();
  const [ categories, setCategories ] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch('/api/technologies/categories');
        const data = await res.json();
        setCategories(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    
    getCategories();

  }, []);
  
    return (
      <div className="block">
        <div id="technologies" className="grey darken-4 white-text block">
          <div className="container">
          <ScrollAnimation animateIn="fadeIn">
            <h1 className="block-title">Technologies</h1>
            <section id="technologies-content">
              <div id="industries-content">
                <Tabs>
                  <div className="row">
                      <TabList className="tab-list">
                          { categories.map(cat => 
                            <Tab key={cat._id} className="col l3 s12 tech-tab">
                              <a className={classes.TabLink} href={`technologies#${cat.title}`}>{ cat.title }</a>
                            </Tab>  
                          )}
                      </TabList>
                  </div>

                  
                  { categories.map(cat => {
                    return  <TabPanel> 
                              <div className="row" >
                                {cat.technologies.map(technology => (
                                  <ul className="tech-list">
                                    <li className="tech-list-item">
                                      <div className="col ofset-s3 s6 l3 valign-wrapper" style={{ paddingBottom: '30px' }}>
                                        <img className="tech-img" src={technology.imgUrl} alt={technology.title} />
                                        <h5 className="tech-title center-align">{technology.title}</h5>
                                      </div>
                                    </li>
                                  </ul>
                                ))}
                              </div> 
                            </TabPanel>
                    })
                  }
                </Tabs>
              </div>
            </section>
          </ScrollAnimation>
          </div>
        </div>
    </div>
    );
  }