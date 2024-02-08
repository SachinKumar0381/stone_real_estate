import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import About from '../components/About'
import Marketingbanner from '../components/Marketingbanner'
import Team from '../components/Team'
// import Service from '../components/Service'
import Projects from '../components/Projects'
// import Blogs from '../components/Blogs'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <About/>
        <Marketingbanner/>
        <Team/>
        {/* <Service/> */}
        <Projects/>
        {/* <Blogs/> */}
        <Footer/>
    </div>
  )
}

export default Homepage