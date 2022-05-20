import React, { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import "./index.css";
const expense_data = [
  { id: "e1", title: "Book", date: new Date(2021, 3, 12), amount: 130 },
  {
    id: "e2",
    title: "Toilet Paper",
    date: new Date(2022, 7, 28),
    amount: 200,
  },
  {
    id: "e3",
    title: "Hostel Fees",
    date: new Date(2022, 0, 10),
    amount: 35000,
  },
  { id: "e4", title: "Clothes", date: new Date(2021, 3, 1), amount: 1200 },
  {
    id: "e5",
    title: "Life Insurance",
    date: new Date(2019, 3, 1),
    amount: 12000,
  },
];
const App = () => {
  const [expense, setExpense] = useState(expense_data);
  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpense((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expense} />
    </div>
  );
};
export default App;
