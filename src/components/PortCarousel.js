import React from "react";

import "./PortCarousel.css";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
	return <div />;
}

function SamplePrevArrow(props) {
	return <div />;
}

const settings = {
	dots: true,
	infinite: true,
	pauseOnHover: true,
	slidesToShow: 1,
	autoplay: true,
	speed: 2000,
	autoplaySpeed: 2000,
	slidesToScroll: 1,
	nextArrow: <SampleNextArrow />,
	prevArrow: <SamplePrevArrow />,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				initialSlide: 1,
				dots: true,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
			},
		},
	],
};

function PortCarousel({ resumeData }) {
	return (
		<section id="portfolio">
			<div className="portfolio__header">
				<h1
					style={{
						fontSize: "30px",
						fontFamily: "Montserrat",
						color: "#fff",
					}}
				>
					Checkout some of my works
				</h1>
			</div>
			<div className="portfolio__projects">
				{resumeData.portfolio &&
					resumeData.portfolio.map((item, index) => {
						return (
							<div className="portfolio__project" key={index}>
								<div className="portfolio__project_imageslider">
									<div
										style={{
											width: "100%",
											height: "100%",
										}}
									>
										<Slider {...settings}>
											{item.images.map((image, i) => (
												<div key={i}>
													<img
														style={{
															boxShadow:
																"0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.3)",
														}}
														src={image.url}
														alt="project"
													/>
												</div>
											))}
										</Slider>
									</div>
								</div>
								<div className="portfolio__project_sidebar">
									<center>
										<div className="portfolio__project_name">
											<h5 className="portfolio__project_name_text">
												{item.name}
											</h5>
										</div>
										<div className="portfolio__project_description">
											<p className="portfolio__project_description_text">
												{item.description}
											</p>
										</div>

										<div>
											{item.skills.map((skill, index) => (
												<span
													key={index}
													style={{
														fontWeight: "bold",
														color:
															"rgba(253, 45, 119, 1)",
														fontFamily: "Lato",
														fontSize: "18px",
													}}
												>
													{skill.skillname}
												</span>
											))}
										</div>
									</center>
									<center>
										<a
											href={item.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											<button>
												<p
													style={{
														fontFamily: "Raleway",
													}}
												>
													Visit Here
												</p>
											</button>
										</a>
									</center>
								</div>
							</div>
						);
					})}
			</div>
		</section>
	);
}

export default PortCarousel;
