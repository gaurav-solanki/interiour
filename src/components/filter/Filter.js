import { Link } from "react-router-dom";
import RangeSlider from "../rangeSlider/rangeSlider";
import IC_LOGO from "../../assets/header_logo.svg";
import IC_FILTER from "../../assets/ic_filter.svg";
import "./Filter.scss";
import Checkbox from "../Checkbox/Checkbox";

const Filter = (props) => {
	return (
		<div className={props.showMenu ? "filterWrapper show" : "filterWrapper "}>
			<div className="logoWrapper">
				<img src={IC_LOGO} alt="bag" className="img-fluid" />
			</div>

			<div className="fitlerTitle">
				<div className="filterText">
					<div>
						<img src={IC_FILTER} alt="filter" width={25} height={25} />
					</div>
					<div>Filter</div>
				</div>
				<button className="closeBtn" onClick={() => props.setShowMenu(false)}>
					Close
				</button>
				<div>
					<Link to="/">Reset Filter</Link>
				</div>
			</div>

			<div className="tabs">
				<div className="tab">
					<input type="checkbox" id="chck1" />
					<label className="tab-label" htmlFor="chck1">
						Store
					</label>
					<div className="tab-content">
						<div className="filterBlock small">
							<Checkbox label="IKEA" />
							<Checkbox label="Americon Signature" />
							<Checkbox label="iFurnholic" />
							<Checkbox label="Informa" />
							<Checkbox label="Dove’s Furniture" />
							<Checkbox label="IKEA" />
							<Checkbox label="Americon Signature" />
							<Checkbox label="iFurnholic" />
							<Checkbox label="Informa" />
							<Checkbox label="Dove’s Furniture" />
						</div>
					</div>
				</div>
				<div className="tab">
					<input type="checkbox" id="chck2" />
					<label className="tab-label" htmlFor="chck2">
						Products
					</label>
					<div className="tab-content">
						<div className="filterBlock large">
							<Checkbox label="Furniture(102)" />
							<Checkbox label="Workspace(40)" />
							<Checkbox label="Kitchen(56)" />
							<Checkbox label="Plants(42)" />
							<Checkbox label="Bathroom(63)" />
							<Checkbox label="Storage(30)" />
							<Checkbox label="Textiles(55)" />
							<Checkbox label="Loundry(14)" />
							<Checkbox label="Furniture(102)" />
							<Checkbox label="Workspace(40)" />
							<Checkbox label="Kitchen(56)" />
							<Checkbox label="Plants(42)" />
							<Checkbox label="Bathroom(63)" />
						</div>
					</div>
				</div>
			</div>
			<label className="priceLabel">Price Range</label>
			<div className="priceFilter">
				<RangeSlider min={0} max={2000} onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)} />
			</div>
			<div className="text-center">
				<button className="applyBtn" onClick={() => props.setShowMenu(false)}>
					Apply
				</button>
			</div>
		</div>
	);
};

export default Filter;
