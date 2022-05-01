import ExpenseItem from "./components/ExpenseItem";
import "./index.css";
function App() {
  const expense = [
    { id: "e1", title: "Book", date: new Date(2022, 3, 12), amount: 130 },
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
    { id: "e4", title: "Clothes", date: new Date(2022, 3, 1), amount: 1200 },
  ];
  return (
    <div className="main">
      <ExpenseItem
        title={expense[0].title}
        date={expense[0].date}
        amount={expense[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        date={expense[1].date}
        amount={expense[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[2].title}
        date={expense[2].date}
        amount={expense[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[3].title}
        date={expense[3].date}
        amount={expense[3].amount}
      ></ExpenseItem>
    </div>
  );
}
export default App;
