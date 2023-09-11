import "./Checkbox.scss";

const Checkbox = (props) => {
	return (
		<label className="checkboxWrapper">
			{props.label}
			<input type="checkbox" />
			<span className="checkmark"></span>
		</label>
	);
};

export default Checkbox;
