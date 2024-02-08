import React from 'react'

import "../assets/css/bootstrap.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "../assets/css/color-switcher-design.css";
import "../assets/css/color-themes/default-color.css";

import logo_icon from "../assets/images/icons/logo-icon.png";

const Marketingbanner = () => {
  return (
    <section className="marketing-one">
		<div className="outer-container">
			<div className="animation_mode">
                <marquee behavior="" direction="left">
				<h1><span><img src={logo_icon} alt="" /></span> Modern Structures <span><img src={logo_icon} alt="" /></span> Interior Design <span><img src={logo_icon} alt="" /></span> Thinking outside of the box <span><img src={logo_icon} alt="" /></span></h1>
                </marquee>
			</div>
		</div>
	</section>
  )
}

export default Marketingbanner