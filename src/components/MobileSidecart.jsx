import React from 'react'

import img111 from "../assets/images/logo.png";

const MobileSidecart = ({handleToggleMobSidebar}) => {
  return (
    <div style={{ height:"100%",backgroundColor:"black", zIndex:"9999", position:"fixed", width:"100%",overflow:"scroll"}} className='mob-sidebar-anim'>
      <nav className='mob-sidebar-content'>
        <div className='side-flex'>
        <div className="nav-logo"><a href="#home"><img src={img111} alt=""/></a></div>
        <div style={{padding:"20px 20px 0 0"}} onClick={()=>handleToggleMobSidebar()}><i className="fas fa-times"/></div>
        </div>
        <div  className='font-white'>
        <hr />
        <p>HOME</p>
        <hr />
        <p>ABOUT US</p>
        <hr />
        <p>SERVICES</p>
        <hr />
        <p>PROJECTS</p>
        <hr />
        <p>REACH US</p>
        <hr />
        </div>
        <div className="contact-info text-align-left" style={{paddingLeft:"7%"}}>
          <p className='font-white'>Contact Info</p>
          <ul>
            <li>Text will be coming</li>
            <li>soon...</li>
            <li><a href="#home" className='grey-clr'>+91 9999999999</a></li>
            <li><a href="#home" className='grey-clr'>ContactToOwner@example.com</a></li>
          </ul>
        </div>
        <div className="social-links">
          <ul className='social-ul'>
            <li><a href="#home"><span className="fab fa-twitter" /></a></li>
            <li><a href="#home"><span className="fab fa-facebook-square" /></a></li>
            <li><a href="#home"><span className="fab fa-pinterest-p" /></a></li>
            <li><a href="#home"><span className="fab fa-instagram" /></a></li>
            <li><a href="#home"><span className="fab fa-youtube" /></a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default MobileSidecart