import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'

function About() {
  return (
    <section id='about'>
      <h5>Get To</h5>
      <h2>Know Me</h2>

      <div className="container about_container">
        <div className="about_me">
        <div className="about_me-image">
          <img src={ME} alt="me" />
        </div>
        </div>
        <div className="about_content">
          

        </div>
      </div>
    </section>
  )
}

export default About