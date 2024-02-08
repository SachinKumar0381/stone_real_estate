import React from 'react'

import "../assets/css/bootstrap.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "../assets/css/color-switcher-design.css";
import "../assets/css/color-themes/default-color.css";

import logo_icon from "../assets/images/icons/logo-icon.png";
import gallery_01 from "../assets/images/gallery/1.jpg";
import gallery_02 from "../assets/images/gallery/2.jpg";
import gallery_03 from "../assets/images/gallery/3.jpg";
import gallery_04 from "../assets/images/gallery/4.jpg";
import gallery_05 from "../assets/images/gallery/5.jpg";

const Projects = () => {
  return (
    <section className="project-one">
		<div className="auto-container">
			{/* <!-- Sec Title --> */}
			<div className="sec-title centered">
				<div className="sec-title_icon">
					<img src={logo_icon} alt="" />
				</div>
				<div className="sec-title_title">Projects Preview</div>
				<h2 className="sec-title_heading">Latest Projects</h2>
			</div>
			<div className="row clearfix">

				{/* <!-- Project Block One --> */}
				<div className="project-block_one col-lg-6 col-md-12 col-sm-12">
					<div className="project-block_one-inner wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
						<div className="project-block_one-image">
							<a href="#"><img src={gallery_01} alt="" /></a>
						</div>
						<div className="project-block_one-content">
							<div className="project-block_one-designation">Text will be coming soon...</div>
							<h3 className="project-block_one-heading"><a href="#">Project One</a></h3>
						</div>
					</div>
				</div>

				{/* <!-- Project Block One --> */}
				<div className="project-block_one col-lg-6 col-md-12 col-sm-12">
					<div className="project-block_one-inner wow fadeInRight" data-wow-delay="300ms" data-wow-duration="1500ms">
						<div className="project-block_one-image">
							<a href="#"><img src={gallery_02} alt="" /></a>
						</div>
						<div className="project-block_one-content">
							<div className="project-block_one-designation">Text will be coming soon...</div>
							<h3 className="project-block_one-heading"><a href="#">Project Two</a></h3>
						</div>
					</div>
				</div>

				{/* <!-- Project Block One --> */}
				<div className="project-block_one col-lg-6 col-md-12 col-sm-12">
					<div className="project-block_one-inner wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
						<div className="project-block_one-image">
							<a href="#"><img src={gallery_01} alt="" /></a>
						</div>
						<div className="project-block_one-content">
							<div className="project-block_one-designation">Text will be coming soon...</div>
							<h3 className="project-block_one-heading"><a href="#">Project Three</a></h3>
						</div>
					</div>
				</div>

				{/* <!-- Project Block One --> */}
				<div className="project-block_one col-lg-6 col-md-12 col-sm-12">
					<div className="project-block_one-inner wow fadeInRight" data-wow-delay="300ms" data-wow-duration="1500ms">
						<div className="project-block_one-image">
							<a href="#"><img src={gallery_02} alt="" /></a>
						</div>
						<div className="project-block_one-content">
							<div className="project-block_one-designation">Text will be coming soon...</div>
							<h3 className="project-block_one-heading"><a href="#">Project Four</a></h3>
						</div>
					</div>
				</div>

			</div>

			{/* <!-- Button Box --> */}
			<div className="project-one_button text-center">
				<a href="#" className="theme-btn btn-style-three">
					<span className="btn-wrap">
						<span className="text-one">View All Projects</span>
						<span className="text-two">View All Projects</span>
					</span>
				</a>
			</div>

		</div>
	</section>
  )
}

export default Projects