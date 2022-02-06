import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";

import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = (props) => {
  // console.log(expenses);
  const [filteredYear, setFilteredYear] = useState("2020");
  const FilterChangeHandler = (year) => {
    setFilteredYear(year);
  };
  console.log(filteredYear);

  const filteredExpense = props.expenses.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });
  console.log(filteredExpense);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onFilterChange={FilterChangeHandler}
        ></ExpensesFilter>
        {filteredExpense.map((item, index) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          ></ExpenseItem>
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
