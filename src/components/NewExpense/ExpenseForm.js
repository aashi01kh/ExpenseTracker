import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [titleEntered, setTitleEntered] = useState("");
  const [amountEntered, setAmountEnterd] = useState("");
  const [dateEnterd, setDateEntered] = useState("");
  const ForumSubmitHandler = (event) => {
    event.preventDefault();
    const expensData = {
      id: Math.random(),
      title: titleEntered,
      amount: amountEntered,
      date: new Date(dateEnterd),
    };
    props.onExpense(expensData);
    setAmountEnterd(" ");
    setDateEntered(" ");
    setTitleEntered(" ");
  };

  const titleChangeHandler = (event) => {
    setTitleEntered(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmountEnterd(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDateEntered(event.target.value);
  };
  return (
    <div>
      <form onSubmit={ForumSubmitHandler}>
        <div className="new-expense__main">
          <div className="new-expense__base">
            <label>Title</label>
            <input
              type="text"
              onChange={titleChangeHandler}
              value={titleEntered}
            />
          </div>
          <div className="new-expense__base">
            <label>Amount</label>
            <input
              type="number"
              onChange={amountChangeHandler}
              value={amountEntered}
            />
          </div>
          <div className="new-expense__base">
            <label>Date</label>
            <input
              type="date"
              min="2020-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
              value={dateEnterd}
            />
          </div>
        </div>
        <div className="new-expense__but">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};
export default ExpenseForm;
