import React from 'react'

import "../assets/css/bootstrap.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "../assets/css/color-switcher-design.css";
import "../assets/css/color-themes/default-color.css";

import footer_bg from "../assets/images/background/footer-bg.jpg";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="main-footer">
		<div className="footer_bg-image" style={{backgroundImage: `url(${footer_bg})`}}></div>
		<div className="upper-box">
			<div className="auto-container">
				<div className="row clearfix">
					<div className="column col-lg-6 col-md-6 col-sm-12">
						<div className="footer-logo"><a href="index.html"><img src={logo} alt="" title=""/></a></div>
					</div>
					<div className="column col-lg-6 col-md-6 col-sm-12">
						{/* <!-- Subscribe Box --> */}
						<div className="subscribe-box">
							<form method="post" action="https://uniqthemes.com/html/antilia/contact.html">
								<div className="form-group">
									<input type="email" name="search-field" value="" placeholder="Enter Your Email" required/>
									<button type="submit">Subscribe</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- Widgets Section --> */}
		<div className="widgets-section">
			<div className="auto-container">
				<div className="row clearfix">


					{/* <!-- Footer Column --> */}
					<div className="footer-column col-lg-4 col-md-6 col-sm-12">
						<div className="footer-widget links-widget">
							<h5>quick links</h5>
							<ul className="footer-list">
								<li><a href="#">Residential Real Estate</a></li>
								<li><a href="#">Commercial Development</a></li>
								<li><a href="#">Commercial Real Estate</a></li>
								<li><a href="#">Business Sales</a></li>
								<li><a href="#">Lending Partners</a></li>
							</ul>
						</div>
					</div>

					{/* <!-- Footer Column --> */}
					<div className="footer-column col-lg-4 col-md-6 col-sm-12">
						<div className="footer-widget links-widget">
							<h5>Hours</h5>
							<table className='footer-timing-line'>
								<tr>
									<td>Monday</td>
									<td>09:00 AM</td>
									<td>-</td>
									<td>05:00 PM</td>
								</tr>
								<tr>
									<td>Tuesday</td>
									<td>09:00 AM</td>
									<td>-</td>
									<td>05:00 PM</td>
								</tr>
								<tr>
									<td>Wednesday</td>
									<td>09:00 AM</td>
									<td>-</td>
									<td>05:00 PM</td>
								</tr>
								<tr>
									<td>Thursday</td>
									<td>09:00 AM</td>
									<td>-</td>
									<td>05:00 PM</td>
								</tr>
								<tr>
									<td>Friday</td>
									<td>09:00 AM</td>
									<td>-</td>
									<td>05:00 PM</td>
								</tr>
								<tr>
									<td>Saturday</td>
									<td>Closed</td>
								</tr>
								<tr>
									<td>Sunday</td>
									<td>Closed</td>
								</tr>
							</table>
						</div>
					</div>

					{/* <!-- Footer Column --> */}
					<div className="footer-column col-lg-4 col-md-6 col-sm-12">
						<div className="footer-widget contact-widget">
							<h5>contact us</h5>
							<ul className="footer-contact_list">
								<li><span>PH:</span>+9999999999</li>
								<li><span>EM:</span>username@domain.com</li>
								<li><span>LO:</span>Text will be coming soon... <br/> Text will be coming soon...</li>
							</ul>
						</div>
					</div>

				</div>
			</div>
		</div>
		{/* <!-- End Widgets Section --> */}

		<div className="footer-bottom">
			<div className="auto-container">
				<div className="d-flex justify-content-between align-items-center flex-wrap">
					<div className="copyright">Copyright &copy; 2024. All Rights Reserved.</div>
					{/* <!-- Social Box --> */}
					<div className="footer_socials">
						<a href="#"><i className="fa-brands fa-facebook-f"></i></a>
						<a href="#"><i className="fa-brands fa-twitter"></i></a>
						<a href="#"><i className="fa-brands fa-youtube"></i></a>
						<a href="#"><i className="fa-brands fa-instagram"></i></a>
					</div>
				</div>
			</div>
		</div>
	</footer>
  )
}

export default Footer