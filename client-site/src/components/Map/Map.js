import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll' 

export default function Map() {
  return (
      <div className="teal">
        <ScrollAnimation animateIn='fadeIn'>
          <div id="map">
          <h1 className="block-title teal-text text-lighten-5">Where are we from</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5263929.141591379!2d27.566887786042674!3d49.6947690877247!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc60cd2a22a54d%3A0x2b82afc3e2120d51!2sMayakovs&#39;koho%20Ave%2C%2011a%2C%20Zaporizhzhia%2C%20Zaporiz&#39;ka%20oblast%2C%2069000!5e0!3m2!1sen!2sua!4v1612962350652!5m2!1sen!2sua" 
              width="600" 
              height="450" 
              frameborder="0" 
              allowfullscreen="" 
              aria-hidden="false" 
              tabindex="0">
            </iframe>
          </div>
        </ScrollAnimation>
      </div>
  )
}