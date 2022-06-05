import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import "../Expenses/Expense.css";
import ExpenseChart from "./ExpenseChart";
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
          selected={filter}
          onChangeFilter={filterChangedHandler}
        />
        <ExpenseChart expenses={filteredExpense} />
        <ExpenseList items={filteredExpense} />
      </Card>
    </div>
  );
};

export default Expense;
