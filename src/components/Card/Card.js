import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import IC_BAG from "../../assets/ic_bag.svg";
import "./Card.scss";

const Card = (props) => {
	return (
		<div className="card">
			<div className="productImage">
				<img src={props.imgSrc} alt="product" className="img-fluid" />
			</div>
			<div className="productContent">
				<div className="brand">{props.brand}</div>
				<div className="productDetails">
					<div className="productName">{props.productName}</div>
					<Link to="/">...</Link>
				</div>
				<Rating readonly={true} initialValue={5} iconsCount={5} size={16} />
				<div className="pricing">
					<div className="price">{props.price}</div>
					<div>
						<button>
							<img src={IC_BAG} alt="bag" width="20" height="20" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
