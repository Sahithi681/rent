import React from 'react'
import './AboutSection.css'

function AboutSection() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Us" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About Us</p>
          <h1 className="skills-section--heading">
          <p className="hero--section-description">
            Driving towards a sustainable future.
          </p>
          </h1>
          <p className="hero--section-description">
          "Explore our travel solutions! From short-term 
          rentals to long-term leases, we offer a seamless 
          experience tailored to your requirements. 
          Join us and discover the ease and flexibility 
          of renting with us!"
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection