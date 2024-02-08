import React from 'react'

import "../assets/css/bootstrap.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "../assets/css/color-switcher-design.css";
import "../assets/css/color-themes/default-color.css";

import logo_icon from "../assets/images/icons/logo-icon.png";
import welcome_01 from "../assets/images/main-slider/img_02.webp";
import service_01 from "../assets/images/icons/service-1.svg";
import service_02 from "../assets/images/icons/service-2.svg";
import service_03 from "../assets/images/icons/service-3.svg";
import ImageSlider from './ImageSlider';

import img_01 from "../assets/images/main-slider/img_01.webp";
import img_02 from "../assets/images/main-slider/img_02.webp";
import img_03 from "../assets/images/main-slider/img_03.webp";
import img_04 from "../assets/images/main-slider/img_04.webp";
// import service_04 from "../assets/images/icons/service-4.svg";

const About = () => {
	const images = [img_01,img_02,img_03,img_04];
  return (
    <section className="welcome-one">
		<div className="welcome-one_circle"></div>
		<div className="auto-container">
			{/* <!-- Sec Title --> */}
			<div className="sec-title centered">
				<div className="sec-title_icon">
					<img src={logo_icon} alt="" />
				</div>
				<div className="sec-title_title">Welcome to Stone Real Estate</div>
				<h2 className="sec-title_heading"> Text will be coming soon...</h2>
			</div>
			<div className="row clearfix">
				{/* <!-- Column --> */}
				<div className="column col-lg-6 col-md-12 col-sm-12">
					<h6 className="welcome-one_subtitle">Who We Are</h6>
					<p>Text will be coming soon...</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quos dolore dolorem fugit. Nesciunt consectetur beatae numquam exercitationem libero earum excepturi quod! Repudiandae provident dolor nobis culpa tempora ipsa incidunt.</p>
					<p>Text will be coming soon...</p>
					<div className="middle-box">
						
							{/* <div className="column col-lg-6 col-md-12 col-sm-12"> */}
								<div className="welcome-one_image">
									{/* <img src={welcome_01} alt="" style={{width:"100%"}} /> */}
									<ImageSlider images={images} lazyLoad={true}/>
								</div>
							{/* </div> */}
						</div>
					<div className="welcome-one_options d-flex align-items-center flex-wrap">
						<div className="welcome-one_button">
							<a href="about.html" className="theme-btn btn-style-two">
								<span className="btn-wrap">
									<span className="text-one">more about us</span>
									<span className="text-two">more about us</span>
								</span>
							</a>
						</div>
						<div className="welcome-one_phone">
							<span className="fa fa-phone"></span>
							<a href="#">+9999999999</a>
						</div>
					</div>
				</div>
				{/* <!-- Column --> */}
				<div className="column col-lg-6 col-md-12 col-sm-12">
					<h6 className="welcome-one_subtitle">What We Do</h6>

					<div className="blocks_outer">

						{/* <!-- Welcome Block One --> */}
						<div className="welcome-block_one">
							<div className="welcome-block_one-inner wow fadeInUp">
								<div className="welcome-block_one-number">01</div>
								<div className="welcome-block_one-icon">
									<img src={service_01} alt="" />
								</div>
								<h3 className="welcome-block_one-heading"><a href="service-detail.html">Commercial Real Estate</a></h3>
								<div className="welcome-block_one-text">Our experienced brokerage team are experts in their field. One of our Signature Services is helping Corporate and Franchised Restaurant Brands grow successfully.</div>
							</div>
						</div>

						{/* <!-- Welcome Block One --> */}
						<div className="welcome-block_one">
							<div className="welcome-block_one-inner wow fadeInUp">
								<div className="welcome-block_one-number">02</div>
								<div className="welcome-block_one-icon">
									<img src={service_02} alt="" />
								</div>
								<h3 className="welcome-block_one-heading"><a href="service-detail.html">Residential Real Estate</a></h3>
								<div className="welcome-block_one-text">Our Realtors take the time to understand what your goals are because locating and securing the ideal property for you is paramount.</div>
							</div>
						</div>

						{/* <!-- Welcome Block One --> */}
						<div className="welcome-block_one">
							<div className="welcome-block_one-inner wow fadeInUp">
								<div className="welcome-block_one-number">03</div>
								<div className="welcome-block_one-icon">
									<img src={service_01} alt="" />
								</div>
								<h3 className="welcome-block_one-heading"><a href="service-detail.html">Commercial Development</a></h3>
								<div className="welcome-block_one-text">We offer end-to-end services specializing in acquiring land, designing, financing, building, and managing diverse business-focused properties to drive economic growth.</div>
							</div>
						</div>

						{/* <!-- Welcome Block One --> */}
						<div className="welcome-block_one">
							<div className="welcome-block_one-inner wow fadeInUp">
								<div className="welcome-block_one-number">04</div>
								<div className="welcome-block_one-icon">
									<img src={service_03} alt="" />
								</div>
								<h3 className="welcome-block_one-heading"><a href="service-detail.html">Business Sales</a></h3>
								<div className="welcome-block_one-text">Stone Business Sales Team facilitates the buying and selling of businesses, offering valuation, marketing, negotiation, and transaction guidance to ensure a smooth and profitable deal for all parties involved.</div>
							</div>
						</div>

						
						{/* <!-- Welcome Block One --> */}
						<div className="welcome-block_one">
							<div className="welcome-block_one-inner wow fadeInUp">
								<div className="welcome-block_one-number">05</div>
								<div className="welcome-block_one-icon">
									<img src={service_03} alt="" />
								</div>
								<h3 className="welcome-block_one-heading"><a href="service-detail.html">Lending Partners</a></h3>
								<div className="welcome-block_one-text">Text will be coming soon...</div>
							</div>
						</div>

					</div>

				</div>
			</div>
		</div>
	</section>
  )
}

export default About