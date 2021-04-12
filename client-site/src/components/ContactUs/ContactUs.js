import React, { useState } from 'react'
import { Container } from 'react-materialize'
import ScrollAnimation from 'react-animate-on-scroll'

export default function ContactUs() {
  const [ message, setMessage ] = useState({});

  const changeHandler = event => {
    setMessage({ ...message, [event.target.name]: event.target.value })
  };

  const clearFields = (event) => {
    setMessage({ senderName: '', senderEmail: '', messageBody: '' });
  }
  
  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(JSON.stringify(message));
    clearFields();
    console.log(message);
    try {
      const data = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
      })
      console.log('Message was sent', data);

      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="teal white-text block">
      <div id="contactUs" className="row">
      <Container>
        <ScrollAnimation animateIn="fadeIn">
          <h1 className="block-title">Contact us</h1>
          <div id="contact-form">
          <form>
            <div className="input-field s12 teal-text text-lighten-4">
              <input 
                id="name" 
                type="text"
                name="senderName" 
                className="teal-text text-lighten-4" 
                autoComplete="off"
                onChange={changeHandler}  
              />
              <label for="senderName" className="teal-text text-lighten-4">Name</label>
            </div>

            <div className="input-field s12 teal-text text-lighten-4">
              <input 
                id="email" 
                type="text" 
                name="senderEmail"
                className="teal-text text-lighten-4" 
                onChange={changeHandler}  
              />
              <label for="senderEmail" className="teal-text text-lighten-4">Email</label>
            </div>

            <div className="input-field text-lighten-4">
              <textarea 
                id="message_body" 
                name="messageBody"
                className="teal-text text-lighten-4 materialize-textarea"
                onChange={changeHandler}
              >
              </textarea>
              <label for="messageBody" className="teal-text text-lighten-4">Message</label>
            </div>
            <button type="submit" onClick={onSubmit} className="btn button teal teal-text text-lighten-4 left"><span>Send</span><i className="material-icons right">send</i></button>
          </form>
          </div>
        </ScrollAnimation>
      </Container>
      </div>
    </div>
    
  )
}
