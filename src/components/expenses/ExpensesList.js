import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.expenses.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        No Expense Found for {props.year}
      </h2>
    );
  }
  return (
    <ul className="expeneses-list">
      {props.expenses.map((item, index) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        ></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpensesList;
