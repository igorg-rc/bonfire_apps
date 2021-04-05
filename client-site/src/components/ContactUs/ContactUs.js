import React from 'react'
import { Container, Col, Row, Form, TextInput, Textarea } from 'react-materialize'
import ScrollAnimation from 'react-animate-on-scroll'
import classes from './ContactUs.module.css'
import img from '../../img/dbs.png'

export default function ContactUs() {
  return (
    <div className="teal white-text block">
      <div id="contactUs" className="row">
      <Container>
        <ScrollAnimation animateIn="fadeIn">
          <h1 className="block-title">Contact us</h1>
          <div id="contact-form">
          <form>
            <div className="input-field s12 teal-text text-lighten-4">
              <input type="text" id="name" className="teal-text text-lighten-4" />
              <label for="name" className="teal-text text-lighten-4">Name</label>
            </div>
            <div className="input-field s12 teal-text text-lighten-4">
              <input type="text" id="email" className="teal-text text-lighten-4" />
              <label for="email" className="teal-text text-lighten-4">Email</label>
            </div>
            <div className="input-field text-lighten-4">
              <textarea id="message" className="teal-text text-lighten-4 materialize-textarea"></textarea>
              <label for="message" className="teal-text text-lighten-4">Message</label>
            </div>
            <a className="btn button teal teal-text text-lighten-4 left"><span>Send</span><i className="material-icons right">send</i></a>
          </form>
          </div>
        </ScrollAnimation>
      </Container>
      </div>
    </div>
    
  )
}
