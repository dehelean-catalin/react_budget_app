import React, { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { AppContext } from "../context/AppContext";
import "./Currency.css";

const Currency = () => {
	const { dispatch, currency } = useContext(AppContext);
	const options = [
		{
			name: "Dollar",
			symbol: "$",
		},
		{
			name: "Pound",
			symbol: "£",
		},
		{
			name: "Euro",
			symbol: "€",
		},
		{
			name: "Ruppee",
			symbol: "₹",
		},
	];
	const handleSelect = (eventKey) => {
		const selected = options.find((option) => option.name === eventKey);
		dispatch({ type: "CHG_CURRENCY", payload: selected });
	};

	return (
		<Dropdown onSelect={handleSelect}>
			<Dropdown.Toggle
				variant="success"
				id="dropdown-basic"
				style={{ background: "#92e398", border: 0 }}
			>
				Currency ( <span className="me-1">{currency.symbol} </span>
				{currency.name})
			</Dropdown.Toggle>

			<Dropdown.Menu style={{ background: "#92e398" }}>
				{options.map((opt) => (
					<Dropdown.Item eventKey={opt.name} className="dropdown-item">
						<span className="me-2">{opt.symbol}</span>
						{opt.name}
					</Dropdown.Item>
				))}
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default Currency;
