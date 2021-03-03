import React from "react"
import { Carousel, Button } from 'react-bootstrap'
import { Link } from 'react-scroll'

import classes from './Services_slider.module.css';

export default function Services_slider () {
  return (
    <>
      <Carousel>
        <Carousel.Item className={ classes.Item_1 }>
          <div className={classes.Overlay.concat(" ", "d-flex flex-column h-100 align-items-center justify-content-center text-white")}>
            <div className="my-3">
              <h2 className="display-4">Web development</h2>
              <h4 className="my-2">Сollection and analysis of requirements, technical task development, interface design.</h4>
              <h4>Creating a complete product that fully satisfies to all of customer requirements.</h4>
            </div>
            
            <Button variant="outline-primary" size="lg">
            <Link
              href="#web_development"
              to="web_development"
              className="text-white"
              style={{ textDecoration: 'none' }}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              LEARN MORE...
            </Link>
            </Button>
          </div>
        </Carousel.Item>

        <Carousel.Item className={ classes.Item_2 }>
          <div className={classes.Overlay.concat(" ", "d-flex flex-column h-100 align-items-center justify-content-center text-white")}>
            <div className="my-3">
              <h2 className="display-4 mb-2">IT consulting</h2>
              <h4>Identifing the problems of existing company's information system.</h4>
              <h4>Definition the best methods to improve the efficiency of IT solutions.</h4>
            </div>

            <Button variant="outline-primary" size="lg">
              <Link
                href="#it_consulting"
                to="it_consulting"
                className="text-white"
                style={{ textDecoration: 'none' }}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                LEARN MORE...
              </Link>
            </Button>
            
          </div>
        </Carousel.Item>

        <Carousel.Item className={ classes.Item_3 }>
          <div className={classes.Overlay.concat(" ", "d-flex flex-column h-100 align-items-center justify-content-center text-white")}>
            <div className="my-3">
              <h2 className="display-4">IT support</h2>
              <h4>Improving the reliability of customer IT infrastructure.</h4>
              <h4>Implementation of new solutions in the company's processes.</h4>
            </div>

            <Button variant="outline-primary" size="lg">
              <Link
                href="#it_support"
                to="it_support"
                className="text-white"
                style={{ textDecoration: 'none' }}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                LEARN MORE...
              </Link>
            </Button>

          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
