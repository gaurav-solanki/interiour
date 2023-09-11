import { Link } from "react-router-dom";
import "./SliderItem.scss";

const SliderItem = (props) => {
	return (
		<div className="sliderItem">
			<img src={props.imgSrc} alt="" className="img-fluid" />
			<div className={props.leftAligned ? "sliderContent end" : "sliderContent"}>
				<div>
					{props.mainTitle1 && (
						<div className="mainTitle">
							{props.mainTitle1}
							{props.mainTitle2 && <br />}
							{props.mainTitle2}
						</div>
					)}
					{props.largeTitle && <div className="largeTitle">{props.largeTitle}</div>}
					<div className="context">{props.context} </div>
					{props.exploreBtn && (
						<Link className="exploreLink" to="/">
							Explore Now
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default SliderItem;
