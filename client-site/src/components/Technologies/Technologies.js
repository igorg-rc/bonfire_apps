import React, { Component, useState, useEffect } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import M from 'materialize-css/dist/js/materialize.min.js'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import classes from './Technologies.module.css'

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
    setInstance(M.Tabs.init(document.querySelector('.tabs'), {}))

  }, []);
  
    return (
      <div className="block">
        <div id="technologies" className="grey darken-4 white-text block">
          <div className="container">
          <ScrollAnimation animateIn="fadeIn">
            <h1 className="block-title">Technologies</h1>
            <section id="technologies-content">
              <div className="row">
                <ul className="tabs grey darken-4 teal-text">
                  <li className="tab col s3"><a href="#Frontend">Frontend</a></li>
                  <li className="tab col s3"><a href="#Backend">Backend</a></li>
                  <li className="tab col s3"><a href="#API">API</a></li>
                  <li className="tab col s3"><a href="#Tools">Tools</a></li>
                </ul>

               
              </div>

              <div>
                <Tabs>
                  <TabList >
                    { categories.map(cat => 
                      <Tab style={{ display: 'inline', marginRight: '10px' }} className=""><a className={classes.TabLink} href={`#${cat.title}`}>{ cat.title }</a></Tab>  
                    )}
                  </TabList>

                  
                  { categories.map(cat => {
                    return  <TabPanel>
                              {cat.technologies.map(technology => (
                                <ul style={{ display: 'flex', flexDirection: 'row' }}>
                                  <li style={{ display: 'inline' }}>
                                    <div className="col s6 l3 valign-wrapper tech-block">
                                      <img className="tech-img" src={technology.imgUrl} alt={technology.title} />
                                      <h5 className="tech-title center-align">{technology.title}</h5>
                                    </div>
                                  </li>
                                </ul>
                              ))}
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