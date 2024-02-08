import React from 'react'

import "../assets/css/bootstrap.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "../assets/css/color-switcher-design.css";
import "../assets/css/color-themes/default-color.css";

import icon_logo from "../assets/images/icons/logo-icon.png";
import news_01 from "../assets/images/resource/news-1.jpg";
import news_02 from "../assets/images/resource/news-2.jpg";
import news_03 from "../assets/images/resource/news-3.jpg" ;

const Blogs = () => {
  return (
    <section className="news-one">
		<div className="auto-container">
			{/* <!-- Sec Title --> */}
			<div className="sec-title centered">
				<div className="sec-title_icon">
					<img src={icon_logo} alt="" />
				</div>
				<div className="sec-title_title">News & Updates</div>
				<h2 className="sec-title_heading">Recent Articles</h2>
			</div>
			<div className="row clearfix">

				{/* <!-- News Block One --> */}
				<div className="news-block_one col-lg-4 col-md-6 col-sm-12">
					<div className="news-block_one-inner wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
						<div className="news-block_one-image">
							<a href="news-detail.html"><img src={news_01} alt="" /></a>
						</div>
						<div className="news-block_one-content">
							<div className="news-block_one-date">24 <span>mar</span></div>
							<div className="news-block_one-title">Innovation</div>
							<h5 className="news-block_one-heading"><a href="news-detail.html">World’s Largest Passive House Buildings</a></h5>
							<a href="news-detail.html" className="news-block_one-more">Read More</a>
						</div>
					</div>
				</div>

				{/* <!-- News Block One --> */}
				<div className="news-block_one col-lg-4 col-md-6 col-sm-12">
					<div className="news-block_one-inner wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
						<div className="news-block_one-image">
							<a href="news-detail.html"><img src={news_02} alt="" /></a>
						</div>
						<div className="news-block_one-content">
							<div className="news-block_one-date">24 <span>mar</span></div>
							<div className="news-block_one-title">Innovation</div>
							<h5 className="news-block_one-heading"><a href="news-detail.html">World’s Largest Passive House Buildings</a></h5>
							<a href="news-detail.html" className="news-block_one-more">Read More</a>
						</div>
					</div>
				</div>

				{/* <!-- News Block One --> */}
				<div className="news-block_one col-lg-4 col-md-6 col-sm-12">
					<div className="news-block_one-inner wow fadeInRight" data-wow-delay="300ms" data-wow-duration="1500ms">
						<div className="news-block_one-image">
							<a href="news-detail.html"><img src={news_03} alt="" /></a>
						</div>
						<div className="news-block_one-content">
							<div className="news-block_one-date">24 <span>mar</span></div>
							<div className="news-block_one-title">Innovation</div>
							<h5 className="news-block_one-heading"><a href="news-detail.html">World’s Largest Passive House Buildings</a></h5>
							<a href="news-detail.html" className="news-block_one-more">Read More</a>
						</div>
					</div>
				</div>

			</div>

			<div className="news-one_button text-center">
				<a href="blog.html" className="theme-btn btn-style-two">
					<span className="btn-wrap">
						<span className="text-one">View All News</span>
						<span className="text-two">View All News</span>
					</span>
				</a>
			</div>

		</div>
	</section>
  )
}

export default Blogs