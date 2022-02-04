import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <h2>Food</h2>
      <div className="expense-item__description">March 28 2022</div>
      <div className="expense-item__price">500</div>
    </div>
  );
}

export default ExpenseItem;
