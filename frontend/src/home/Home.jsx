import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import FreeBook from '../components/FreeBook'

function Home() {
  return (
    <>
    <div>
      <Navbar />
      <Banner />
      <FreeBook />
      <Footer />
    </div>
    </>
  )
}

export default Home
