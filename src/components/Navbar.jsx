import React, { useEffect, useState } from 'react'

import "../assets/css/bootstrap.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "../assets/css/color-switcher-design.css";
import "../assets/css/color-themes/default-color.css";
import "../assets/images/favicon.png";
import "../assets/images/favicon.png";

import phone from "../assets/images/icons/phone.png";
import logo_01 from "../assets/images/logo.png";
import logo_02 from "../assets/images/logo-2.png";
import mob_logo from "../assets/images/mobile-logo.png";
import MobileSidecart from './MobileSidecart';

const Navbar = () => {

	const [toggleSidebar,setToggleSidebar] = useState(false);
    const [mobileSidebar,setMobileSidebar] = useState(false);
	const [ongoingdrop,setOngoingdrop] = useState(false);

	const handleToggleOngoingDropdown = ()=>{
		if(ongoingdrop)
		{
			setOngoingdrop(false);
		}
		else
		{
			setOngoingdrop(true);
		}
	}

    const handleToggleSidebar = ()=>{
        if(toggleSidebar==true)
        {
            setToggleSidebar(false);
        }
        else
        {
            setToggleSidebar(true);
        }
    }
    
        const [backgroundColor, setBackgroundColor] = useState('none');
      
        useEffect(() => {
          const handleScroll = () => {
            // Calculate the scroll percentage
            const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      
            // Change the background color based on the scroll percentage
            // You can adjust the conditions and colors according to your preference
            if (scrollPercentage < 2) {
              setBackgroundColor('none');
            } else {
              setBackgroundColor('white');
            }
          };
      
          // Add a scroll event listener to the window
          window.addEventListener('scroll', handleScroll);
      
          // Remove the event listener when the component unmounts
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, [])

        const handleToggleMobSidebar=()=>{
          if(mobileSidebar){
            setMobileSidebar(false)
          }
          else
          {
            setMobileSidebar(true)
          }
        }


		
  return (
    <header className="main-header" style={{position:"fixed", backgroundColor:`${backgroundColor==="none"?"rgba(255, 0, 0, 0)":"black"}`}}>
		      {mobileSidebar?<MobileSidecart handleToggleMobSidebar={handleToggleMobSidebar}/>:""}
		{/* <!-- Header Top --> */}
		<div className="header-top" style={{display:`${backgroundColor==="none"?"block":"none"}`}}>
			<div className="auto-container">
				<div className="inner-container">
					<div className="d-flex justify-content-between align-items-center flex-wrap" style={{gap:"10px"}}>
						
						<div className="header-top_text">We are a modern and creative collective</div>

						<div className="right-box d-flex align-items-center flex-wrap">
							{/* <!-- Info List --> */}
							<ul className="header-top_list">
								<li>
									<span className="icon"><img src={phone} alt="" /></span>
									<a href="#"> +9999999999</a>
								</li>
							</ul>
							{/* <!-- Social Box --> */}
							<div className="header_socials">
								<span>Follow Us :</span>
								<a href="#"><i className="fa-brands fa-facebook-f"></i></a>
								<a href="#"><i className="fa-brands fa-twitter"></i></a>
								<a href="#"><i className="fa-brands fa-youtube"></i></a>
								<a href="#"><i className="fa-brands fa-instagram"></i></a>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</div>

		{/* <!-- Header Upper --> */}
		<div className="header-upper">
			<div className="auto-container">
				<div className="inner-container">
					<div className="d-flex justify-content-between align-items-center flex-wrap">
						
						<div className="logo-box">
							<div className="logo" style={{display:`${backgroundColor==="none"?"block":"none"}`}}><a href="#"><img src={logo_01} alt="" title=""/></a></div>
							<div className="logo-2" style={{display:`${backgroundColor==="none"?"none":"block"}`}}><a href="#"><img src={logo_01} alt="" title=""/></a></div>
						</div>
						
						<div className="nav-outer">
							{/* <!-- Main Menu --> */}
							<nav className="main-menu navbar-expand-md">
								<div className="navbar-header">
									{/* <!-- Toggle Button --> */}
									<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
									</button>
								</div>
								
								<div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
									<ul className="navigation clearfix">
										<li><a href="#">HOME</a></li>
										<li><a href="#">ABOUT US</a></li>
										<li className="dropdown"><a href="#">SERVICES</a>
											<ul>
												<li><a href="#">Commercial Real Estate</a></li><br />
												<li><a href="#">Commercial Development</a></li><br />
												<li><a href="#">Business Sales</a></li><br />
												<li><a href="#">Residential Real Estate</a></li><br />
												<li><a href="#">Lending Partners</a></li><br />
											</ul>
										</li>
										<li className="dropdown"><a href="#">PROJECTS</a>
											<ul>
												<li onClick={handleToggleOngoingDropdown} className='dropdown'><a href="#">On Going Projects</a>
												{ongoingdrop && <><li><a href="#">Industrial</a></li>
												<li><a href="#">Residential / Farm House</a></li>
												<li><a href="#">Interior Works</a></li>
												<li><a href="#">Other Projects</a></li></>}
												</li><br />
												<li><a href="#">Industrial</a></li><br />
												<li><a href="#">Residential / Farm House</a></li><br />
												<li><a href="#">Interior Works</a></li><br />
												<li><a href="#">Other Projects</a></li>
											</ul>
										</li>
										<li><a href="#">REACH US</a></li>
									</ul>
								</div>
							</nav>
						</div>
						
						{/* <!-- Main Menu End--> */}
						<div className="outer-box d-flex align-items-center flex-wrap">
							
							{/* <!-- Search Btn --> */}
							<div className="search-box-btn search-box-outer"><span className="icon fa fa-search"></span></div>

							{/* <!-- Nav Btn --> */}
							{/* <div className="nav-btn navSidebar-button">
								<span className="hamburger">
									<span className="top-bun"></span>
									<span className="meat"></span>
									<span className="bottom-bun"></span>
								</span>
							</div> */}

							{/* <!-- Button Box --> */}
							<div className="header_button-box">
								<a href="#" className="theme-btn btn-style-one">
									<span className="btn-wrap">
										<span className="text-one">Get In Touch</span>
										<span className="text-two">Get In Touch</span>
									</span>
								</a>
							</div>

							{/* <!-- Mobile Navigation Toggler --> */}
							<div className="mobile-nav-toggler" onClick={handleToggleMobSidebar}><span className="icon flaticon-menu"></span></div>
						</div>

					</div>
				</div>
			</div>
		</div>
		{/* <!--End Header Upper--> */}
	
	</header>
  )
}

export default Navbar