import { Link } from "react-router-dom";
import IC_BAG from "../../assets/ic_bag.svg";
import IC_BELL from "../../assets/ic_bell.svg";
import IC_LOGIN from "../../assets/ic_login.svg";

import "./Header.scss";

const header = () => {
	return (
		<header className="headerWrapper">
			<div className="headerContent">
				<div className="d-flex">
					<Link className="homeLink" to="/">
						home
					</Link>
					<div className="seperator">|</div>
					<Link className="newLink" to="/">
						New Items
					</Link>
				</div>
				<div className="searchWrapper">
					<input type="text" placeholder="Search For Products . . ." className="searchInput" />
				</div>
				<div className="d-flex navLinks">
					<div>
						<Link to="/">
							<img src={IC_BELL} alt="bag" width="20" height="20" />
						</Link>
					</div>
					<div className="seperator">|</div>
					<div>
						<Link to="/">
							<img src={IC_BAG} alt="bag" width="20" height="20" />
						</Link>
					</div>
					<div className="seperator">|</div>
					<div>
						<Link to="/">
							<img src={IC_LOGIN} alt="bag" width="20" height="20" />
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default header;
