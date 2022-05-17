import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseData = (enteredData) => {
    console.log(enteredData);
    const expensData = {
      ...enteredData,
    };
    props.onAddExpense(expensData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onExpense={saveExpenseData} />
    </div>
  );
};
export default NewExpense;
