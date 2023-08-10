import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import AllocationForm from "./components/AllocationForm";
import Budget from "./components/Budget";
import Currency from "./components/Currency";
import ExpenseList from "./components/ExpenseList";
import ExpenseTotal from "./components/ExpenseTotal";
import Remaining from "./components/Remaining";
import { AppProvider } from "./context/AppContext";

const App = () => {
	return (
		<AppProvider>
			<div className="container">
				<h1 className="mt-3">Company's Budget Allocation</h1>
				<div className="row mt-3">
					<div class="col">
						<Budget />
					</div>
					<div class="col">
						<ExpenseTotal />
					</div>
					<div class="col">
						<Remaining />
					</div>
					<div class="col">
						<Currency />
					</div>
					<ExpenseList />
					<AllocationForm />
				</div>
			</div>
		</AppProvider>
	);
};

export default App;
