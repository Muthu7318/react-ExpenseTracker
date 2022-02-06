import "../newExpense/NewExpense";

const SaveExpense = (props) => {
  const saveExpenseHandler = () => {
    console.log(props.expenses);
    localStorage.setItem("expenses", JSON.stringify(props.expenses));
    alert("your expense is saved");
  };
  return (
    <div className="new-expense">
      <button onClick={saveExpenseHandler}> Save Expenses </button>
    </div>
  );
};

export default SaveExpense;
