import React from 'react'
import Navbar from '../components/Navbar'
import AboutMe from '../components/AboutMe'
import Footer from "../components/Footer.jsx";

const About = () => {
  return (
    <>
      <div>
        <Navbar/>
        <div className="min-h-screen">
          <AboutMe />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default About
