import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";

import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  // console.log(expenses);
  const [filteredYear, setFilteredYear] = useState("2020");
  const FilterChangeHandler = (year) => {
    setFilteredYear(year);
  };
  // console.log(filteredYear);

  const filteredExpense = props.expenses.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });
  // console.log(filteredExpense);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onFilterChange={FilterChangeHandler}
        ></ExpensesFilter>
        <ExpensesList year={filteredYear} expenses={filteredExpense} />
      </Card>
    </div>
  );
};

export default Expenses;
