// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";
import React, { useState } from "react";

const initExpense = [
  {
    id: "e1",
    title: "News Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, updateExpenses] = useState(initExpense);
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Lets get started"),
  //   React.createElement(Expenses, { expenses: expenses })
  // );

  const addExpenseHandler = (expense) => {
    // expenses = expense;
    console.log(expense);
    updateExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
};

export default App;
