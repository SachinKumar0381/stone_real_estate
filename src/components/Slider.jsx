import React from 'react'

import "../assets/css/bootstrap.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "../assets/css/color-switcher-design.css";
import "../assets/css/color-themes/default-color.css";

// import circle from "../assets/images/main-slider/circle.png";
import img_01 from "../assets/images/main-slider/img_01.webp";
import img_02 from "../assets/images/main-slider/img_02.webp";
import img_03 from "../assets/images/main-slider/img_03.webp";
import img_04 from "../assets/images/main-slider/img_04.webp";
import prev_arw from "../assets/images/main-slider/slider-prev_arrow.png";
import next_arw from "../assets/images/main-slider/slider-next_arrow.png";
import main_slid_01 from "../assets/images/main-slider/1.jpg";
import Autotyped from './Autotyped';
import ImageSlider from './ImageSlider';


const Slider = () => {
	const images = [img_01,img_02,img_03,img_04];
  return (
    <section className="slider-one">
		<div className="main-slider swiper-container">
			<div className="swiper-wrapper">

				{/* <!-- Slide --> */}
				<div className="slider-div">
					<div className="sliderrr" style={{backgroundImage:`url(${main_slid_01})`}}></div>
					<div className="auto-container" style={{backgroundColor:"transparent"}}>
						<div className="upper-box d-flex justify-content-between align-items-center flex-wrap">
							<h1 className="slider-one_heading"> <Autotyped strings={["Build. Invest. <br/>Innovate. Succeed","Build. Invest. <br/>Innovate. Succeed","Build. Invest. <br/>Innovate. Succeed"]} typeSpeed={150} backSpeed={150} classname={"autotypedd"}/></h1>
							{/* <div className="slider-one_circle"><img src={circle} alt="" /></div> */}
						</div>
						<div className="lower-box">
							<div className="row clearfix">
								<div className="column col-lg-3 col-md-12 col-sm-12">
									<div className="slider-one_text"><Autotyped strings={["Truly unique designs that are specially curated to perfection","Truly unique designs that are specially curated to perfection","Truly unique designs that are specially curated to perfection"]} typeSpeed={80} backSpeed={80} classname={"autotypeddd"}/></div>
									<div className="slider-one_button">
										<a className="theme-btn discover-btn" href="#">Commercial Real Estate Projects</a><br /><br />
										<a className="theme-btn discover-btn" href="#">Residential Real Estate Projects</a><br /><br />
										<a className="theme-btn discover-btn" href="#">Commercial Development Projects</a><br /><br />
										<a className="theme-btn discover-btn" href="#">Business Sales Projects</a><br /><br />
										<a className="theme-btn discover-btn" href="#">Lending Partners Projects</a>
									</div>
								</div>
								<div className="column col-lg-9 col-md-12 col-sm-12" style={{maxHeight:"500px"}}>
									<ImageSlider images={images}/>
									</div>
							</div>
						</div>
					</div>
				</div>

			</div>
			<div className="slider-one-arrow">
				{/* <!-- If we need navigation buttons --> */}
				{/* <div className="main-slider-prev"><img src={prev_arw} alt="" /></div> */}
				{/* <div className="main-slider-next"><img src={next_arw} alt="" /></div> */}

				{/* <!-- If we need pagination --> */}
				{/* <div className="main-slider_pagination"></div> */}

			</div>
		</div>
	</section>
  )
}

export default Slider