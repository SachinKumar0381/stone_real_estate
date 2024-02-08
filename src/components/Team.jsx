import React from 'react'

import "../assets/css/bootstrap.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "../assets/css/color-switcher-design.css";
import "../assets/css/color-themes/default-color.css";

import logo_icon from "../assets/images/icons/logo-icon.png";
import team_01 from "../assets/images/resource/profile.jpg";

const Team = () => {
  return (
    <section className="team-one">
		<div className="auto-container">
			{/* <!-- Sec Title --> */}
			<div className="sec-title centered">
				<div className="sec-title_icon">
					<img src={logo_icon} alt="" />
				</div>
				<div className="sec-title_title">Our Team Members.</div>
				<h2 className="sec-title_heading">Meet Experts People <br/> on Board</h2>
			</div>
			<div className="team-one_slider swiper-container">
				<div className="swiper-wrapper">
	
						<div className="team-block_one">
							<div className="team-block_one-inner">
								<div className="team-block_one-image">
									<img src={team_01} alt="" />
									{/* <!-- Social Box --> */}
									<div className="team-block_one-socials">
										<a href="#"><i className="fa-brands fa-facebook-f"></i></a>
										<a href="#"><i className="fa-brands fa-twitter"></i></a>
										<a href="#"><i className="fa-brands fa-instagram"></i></a>
									</div>
								</div>
								<div className="team-block_one-content">
									<h3 className="team-block_one-heading"><a href="team-detail.html">Member Name</a></h3>
									<div className="team-block_one-designation">Member Role</div>
								</div>
							</div>
						</div>

						<div className="team-block_one">
							<div className="team-block_one-inner">
								<div className="team-block_one-image">
									<img src={team_01} alt="" />
									{/* <!-- Social Box --> */}
									<div className="team-block_one-socials">
										<a href="#"><i className="fa-brands fa-facebook-f"></i></a>
										<a href="#"><i className="fa-brands fa-twitter"></i></a>
										<a href="#"><i className="fa-brands fa-instagram"></i></a>
									</div>
								</div>
								<div className="team-block_one-content">
									<h3 className="team-block_one-heading"><a href="team-detail.html">Member Name</a></h3>
									<div className="team-block_one-designation">Member Role</div>
								</div>
							</div>
						</div>

						<div className="team-block_one">
							<div className="team-block_one-inner">
								<div className="team-block_one-image">
									<img src={team_01} alt="" />
									{/* <!-- Social Box --> */}
									<div className="team-block_one-socials">
										<a href="#"><i className="fa-brands fa-facebook-f"></i></a>
										<a href="#"><i className="fa-brands fa-twitter"></i></a>
										<a href="#"><i className="fa-brands fa-instagram"></i></a>
									</div>
								</div>
								<div className="team-block_one-content">
									<h3 className="team-block_one-heading"><a href="team-detail.html">Member Name</a></h3>
									<div className="team-block_one-designation">Member Role</div>
								</div>
							</div>
						</div>
				
				</div>

				{/* <!-- Team One Button --> */}
				<div className="team-one_button text-center">
					<a href="#" className="theme-btn btn-style-two">
						<span className="btn-wrap">
							<span className="text-one">View All Team</span>
							<span className="text-two">View All Team</span>
						</span>
					</a>
				</div>

			</div>
		</div>
	</section>
  )
}

export default Team