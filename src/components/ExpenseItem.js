import React, { useContext } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
	const { dispatch, currency } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: "DELETE_EXPENSE",
			payload: props.id,
		});
	};

	const increaseAllocation = (name) => {
		const expense = {
			name: name,
			cost: 10,
		};

		dispatch({
			type: "ADD_EXPENSE",
			payload: expense,
		});
	};
	const decreaseAllocation = (name) => {
		const expense = {
			name: name,
			cost: 10,
		};

		dispatch({
			type: "RED_EXPENSE",
			payload: expense,
		});
	};

	return (
		<tr>
			<td>{props.name}</td>
			<td>
				{currency.symbol}
				{props.cost}
			</td>
			<td className="text-center">
				<FaPlusCircle
					onClick={() => increaseAllocation(props.name)}
					size={32}
					color="#4eab5b"
				/>
			</td>
			<td className="text-center">
				<FaMinusCircle
					onClick={() => decreaseAllocation(props.name)}
					size={32}
					color="#ae2217"
				/>
			</td>
			<td>
				<TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
			</td>
		</tr>
	);
};

export default ExpenseItem;
