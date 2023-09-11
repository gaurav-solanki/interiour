import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IC_VERIFIED from "../../assets/ic_verified.svg";
import IMG_SLIDER1 from "../../assets/img_slider1.png";
import IMG_SLIDER2 from "../../assets/img_slider2.png";
import SliderItem from "../SliderItem/SliderItem";
import "./SpecialOffer.scss";

const SpecialOffer = () => {
	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 1.96,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<div className="specialWrapper">
			<div className="title">
				<div>Special Offers</div>
				<div>
					<img src={IC_VERIFIED} alt="" width={16} height={16} />
				</div>
			</div>
			<div>
				<Slider {...settings}>
					<SliderItem imgSrc={IMG_SLIDER1} mainTitle1={"High Quality"} mainTitle2={"Furniture"} context={"Lorem ipsum dolor sit amet consectetur. Aenean lacus turpis vitae nisl pharetra a nibh sit fames."} exploreBtn={true} />
					<SliderItem imgSrc={IMG_SLIDER2} mainTitle1={"Discount Up to"} largeTitle={"70%"} context={"Lorem ipsum dolor sit ame"} exploreBtn={false} leftAligned={true} />
					<SliderItem imgSrc={IMG_SLIDER1} mainTitle1={"High Quality"} mainTitle2={"Furniture"} context={"Lorem ipsum dolor sit amet consectetur. Aenean lacus turpis vitae nisl pharetra a nibh sit fames."} exploreBtn={true} />
					<SliderItem imgSrc={IMG_SLIDER2} mainTitle1={"Discount Up to"} largeTitle={"70%"} context={"Lorem ipsum dolor sit ame"} exploreBtn={false} leftAligned={true} />
				</Slider>
			</div>
		</div>
	);
};

export default SpecialOffer;
