import React from 'react'

import "../assets/css/bootstrap.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "../assets/css/color-switcher-design.css";
import "../assets/css/color-themes/default-color.css";

import service_one_bg from "../assets/images/background/service-one_bg.jpg";
import service_05 from "../assets/images/icons/service-5.svg";
import service_06 from "../assets/images/icons/service-6.svg";
import service_07 from "../assets/images/icons/service-7.svg";
import service_08 from "../assets/images/icons/service-8.svg";
import video_01 from "../assets/images/resource/video.jpg";
import client_01 from "../assets/images/clients/1.png";
import client_02 from "../assets/images/clients/2.png";
import client_03 from "../assets/images/clients/3.png";
import client_04 from "../assets/images/clients/4.png";
import client_05 from "../assets/images/clients/5.png";
import prev_img from "../assets/images/icons/client-one_prev-arrow.png";
import next_img from "../assets/images/icons/client-one_next-arrow.png";

const Service = () => {
  return (
    <section class="services-one">
		<div class="services-one_image-layer" style={{backgroundImage:`url(${service_one_bg})`}}></div>
		<div class="auto-container">
			{/* <!-- Sec Title --> */}
			<div class="sec-title d-flex justify-content-between align-items-center flex-wrap">
				<div class="left-box">
					<div class="sec-title_title">Company Services</div>
					<h2 class="sec-title_heading">We specialize in these <br/> fields.</h2>
				</div>
				<div class="sec-title_text">Erat volutpat. Ut wisi enim nostrud exerci ullam conisl ut aliquip ex commo do consquatErat volutpat. xerci ullamcorper suscipit.</div>
			</div>
			<div class="inner-container">
				<div class="services-one_circle-color"></div>
				<div class="row clearfix">
					{/* <!-- Blocks Column --> */}
					<div class="services-one_blocks-column col-lg-8 col-md-12 col-sm-12">
						<div class="services-one_blocks-outer">
							<div class="row clearfix">

								{/* <!-- Service Block One --> */}
								<div class="service-block_one col-lg-6 col-md-6 col-sm-12">
									<div class="service-block_one-inner">
										<div class="service-block_one-upper">
											<div class="service-block_one-icon"><img src={service_05} alt="" /></div>
											<h5 class="service-block_one-heading"><a href="service-detail.html">Interior Design</a></h5>
										</div>
										<div class="service-block_one-text">Lorem ipsum dolor sit amet sed, adipis cing do eiu smod tempor Lorem ipsum a olor sit amet sed.</div>
									</div>
								</div>

								{/* <!-- Service Block One --> */}
								<div class="service-block_one col-lg-6 col-md-6 col-sm-12">
									<div class="service-block_one-inner">
										<div class="service-block_one-upper">
											<div class="service-block_one-icon"><img src={service_06} alt="" /></div>
											<h5 class="service-block_one-heading"><a href="service-detail.html">Art Development</a></h5>
										</div>
										<div class="service-block_one-text">Lorem ipsum dolor sit amet sed, adipis cing do eiu smod tempor Lorem ipsum a olor sit amet sed.</div>
									</div>
								</div>

								{/* <!-- Service Block One --> */}
								<div class="service-block_one col-lg-6 col-md-6 col-sm-12">
									<div class="service-block_one-inner">
										<div class="service-block_one-upper">
											<div class="service-block_one-icon"><img src={service_07} alt="" /></div>
											<h5 class="service-block_one-heading"><a href="service-detail.html">House Sketches</a></h5>
										</div>
										<div class="service-block_one-text">Lorem ipsum dolor sit amet sed, adipis cing do eiu smod tempor Lorem ipsum a olor sit amet sed.</div>
									</div>
								</div>

								{/* <!-- Service Block One --> */}
								<div class="service-block_one col-lg-6 col-md-6 col-sm-12">
									<div class="service-block_one-inner">
										<div class="service-block_one-upper">
											<div class="service-block_one-icon"><img src={service_08} alt="" /></div>
											<h5 class="service-block_one-heading"><a href="service-detail.html">Buildings Ideas</a></h5>
										</div>
										<div class="service-block_one-text">Lorem ipsum dolor sit amet sed, adipis cing do eiu smod tempor Lorem ipsum a olor sit amet sed.</div>
									</div>
								</div>

							</div>
						</div>
					</div>
					{/* <!-- Video Column --> */}
					<div class="services-one_video-column col-lg-4 col-md-8 col-sm-12">
						<div class="services-one_video-outer">
							<div class="service-block_one-video skewElem">
								<img src={video_01} alt="" />
								<a href="https://www.youtube.com/watch?v=YS3PwmOQ1Fc" class="lightbox-video services-one_play"><span class="fa fa-play"><i class="ripple"></i></span></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}

export default Service