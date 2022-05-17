import React, { useState } from "react";
import ExpenseItem from "../Expenses/ExpenseItem";
import "../Expenses/Expense.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
const Expense = (props) => {
  const [filter, setfilter] = useState("2020");
  const filterChangedHandler = (selectedYear) => {
    setfilter(selectedYear);
  };
  return (
    <Card className="expense">
      <ExpenseFilter selected={filter} onChangeFilter={filterChangedHandler} />
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
};

export default Expense;
