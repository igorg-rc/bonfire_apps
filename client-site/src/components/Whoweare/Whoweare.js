import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

export default function Whoweare() {
  return (
    <div id="aboutUs" className="grey darken-4 teal-text text-lighten-2" style={{ padding: '30px 0' }}>
      <div  className="container">
      <ScrollAnimation animateIn='fadeIn'>
        <h1 className="center-align">Who We Are</h1>
      </ScrollAnimation>
        <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>
          <p className="lead white-text">We are web development and IT consultancy company 
          which provides the process of development, testing and deployment of digital solutions for business. Our goal 
          is to clearly see the clients goals and to plan, build and deploy in real life application for their needs.</p>
          <p className="lead white-text">We monitor the quality of our code. Each developed module goes through a 
          code-review of leading specialists of our company. All programmers of the company adhere to one uniform style of programming 
          that considerably facilitates support of our projects to any of our programmers.</p>
          <p className="lead white-text">We use the scrum methodology to manage development. The customer can see and control the development 
          process at each stage. We divide the project into iterations, and after each iteration, the customer receives a new ready-made module. </p>
        </ScrollAnimation>
      </div>
    </div>
  )
}
