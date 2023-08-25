import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  //TITLE
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const tittleChangeHandel = (event) => {
    setEnteredTitle(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.targed.value,
    //   };
    // });

    console.log(event.target.value);
  };

  //AMOUNT
  const amountChangeHandel = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    console.log(event.target.value);
  };

  //DATE
  const dateChangeHandel = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    console.log(event.target.value);
  };

  // const inputChangeHandler = (identifier, value) => {
  //   if (identifier === "tittle") {
  //     setEnteredTitle(value);
  //   } else if (identifier === "date") {
  //     setEnteredDate(value);
  //   } else {
  //     setEnteredAmount(value);
  //   }
  // };

  // onChange={(event) =>
  //   inputChangeHandler("tittle", event.target.value)
  // }

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      tittle: enteredTitle,
      amount: enteredDate,
      date: new Date(enteredDate),
    };

    console.log(expenseData);

    setEnteredDate("");
    setEnteredTitle("");
    setEnteredAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>

          <input
            type="text"
            value={enteredTitle}
            onChange={tittleChangeHandel}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onInput={amountChangeHandel}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-01-01"
            value={enteredDate}
            onChange={dateChangeHandel}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
