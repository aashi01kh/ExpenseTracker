import React, { useState } from "react";
import ExpenseItem from "../Expenses/ExpenseItem";
import "../Expenses/Expense.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
const Expense = (props) => {
  const [filter, setfilter] = useState("2022");
  const filterChangedHandler = (selectedYear) => {
    setfilter(selectedYear);
  };
  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filter;
  });
  return (
    <div>
      <Card className="expense">
        <ExpenseFilter
          selected={filteredExpense}
          onChangeFilter={filterChangedHandler}
        />
        {filteredExpense.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expense;
