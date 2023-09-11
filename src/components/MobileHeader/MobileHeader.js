import IC_LOGO from "../../assets/header_logo.svg";
import IC_FILTER from "../../assets/ic_filter.svg";
import "./MobileHeader.scss";

const MobileHeader = (props) => {
	return (
		<div className="mobileHeader">
			<div className="logoWrapper">
				<img src={IC_LOGO} alt="bag" width={150} />
			</div>
			<div className="filterBtn">
				<div>
					<img src={IC_FILTER} alt="filter" width={25} height={25} />
				</div>
				<button onClick={() => props.setShowMenu(true)}>Filter</button>
			</div>
		</div>
	);
};

export default MobileHeader;
