import { Link } from "react-router-dom";
import IMG_FURNITURE1 from "../../assets/img_furniture1.png";
import IMG_FURNITURE2 from "../../assets/img_furniture2.png";
import IMG_FURNITURE3 from "../../assets/img_furniture3.png";
import IMG_FURNITURE4 from "../../assets/img_furniture4.png";
import Card from "../Card/Card";
import "./BestSeller.scss";

const BestSeller = () => {
	const categoryChange = (evt) => {
		const tablinks = document.getElementsByClassName("categoryItem");
		for (var i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(" active", "");
		}
		evt.currentTarget.className += " active";
	};

	return (
		<div className="bestSellerWrapper">
			<div className="titleWrapper">
				<div className="title">Best Seller</div>
				<Link to="/" className="viewAll">
					View All
				</Link>
			</div>
			<div className="categoryWrapper">
				<div>
					<ul className="categoryList">
						<li className="categoryItem active" onClick={(event) => categoryChange(event)}>
							All Products
						</li>
						<li className="categoryItem" onClick={(event) => categoryChange(event)}>
							Chair
						</li>
						<li className="categoryItem" onClick={(event) => categoryChange(event)}>
							Table
						</li>
						<li className="categoryItem" onClick={(event) => categoryChange(event)}>
							Sofa
						</li>
						<li className="categoryItem" onClick={(event) => categoryChange(event)}>
							FootStool
						</li>
						<li className="categoryItem" onClick={(event) => categoryChange(event)}>
							Office
						</li>
					</ul>
				</div>
				<div className="sortingWrapper">
					<div>Sort by </div>
					<div>
						<select className="sortingSelect">
							<option>Low-high</option>
							<option>High-Low</option>
						</select>
					</div>
				</div>
			</div>
			<div className="sliderWrapper">
				<div className="flexScroll">
					<Card imgSrc={IMG_FURNITURE1} brand={"IKEA"} productName={"Muren Armchairs"} price={"$210.00"} />
					<Card imgSrc={IMG_FURNITURE2} brand={"IKEA"} productName={"Muren Armchairs"} price={"$210.00"} />
					<Card imgSrc={IMG_FURNITURE3} brand={"IKEA"} productName={"Muren Armchairs"} price={"$210.00"} />
					<Card imgSrc={IMG_FURNITURE4} brand={"IKEA"} productName={"Muren Armchairs"} price={"$210.00"} />
					<Card imgSrc={IMG_FURNITURE1} brand={"IKEA"} productName={"Muren Armchairs"} price={"$210.00"} />
					<Card imgSrc={IMG_FURNITURE2} brand={"IKEA"} productName={"Muren Armchairs"} price={"$210.00"} />
					<Card imgSrc={IMG_FURNITURE3} brand={"IKEA"} productName={"Muren Armchairs"} price={"$210.00"} />
					<Card imgSrc={IMG_FURNITURE4} brand={"IKEA"} productName={"Muren Armchairs"} price={"$210.00"} />
				</div>
			</div>
		</div>
	);
};

export default BestSeller;
