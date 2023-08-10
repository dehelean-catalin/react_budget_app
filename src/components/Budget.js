import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
	const { budget, dispatch, currency, expenses } = useContext(AppContext);

	const handleChange = (val) => {
		const totalExpenses = expenses.reduce(
			(total, value) => total + value.cost,
			0
		);

		if (budget <= totalExpenses) {
			alert("You cannot reduce the budget lower than the spendings");
			return;
		}
		dispatch({ type: "SET_BUDGET", payload: val });
	};

	return (
		<div className="alert alert-secondary">
			<span>Budget: {currency.symbol}</span>
			<input
				value={budget}
				type="number"
				onChange={(e) => handleChange(e.target.value)}
				max={20000}
				step={10}
			/>
		</div>
	);
};
export default Budget;
