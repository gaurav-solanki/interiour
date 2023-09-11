import { useState } from "react";
import Header from "./components/header/Header";
import MobileHeader from "./components/MobileHeader/MobileHeader";
import SpecialOffer from "./components/specialOffer/SpecialOffer";
import BestSeller from "./components/bestSeller/BestSeller";
import Filter from "./components/filter/Filter";
import "./App.scss";

function App() {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<>
			<div className="mainWrapper">
				<Filter showMenu={showMenu} setShowMenu={setShowMenu} />
				<div className="contentWrapper">
					<MobileHeader showMenu={showMenu} setShowMenu={setShowMenu} />
					<Header />
					<SpecialOffer />
					<BestSeller />
				</div>
			</div>
		</>
	);
}

export default App;
