import { useState } from "react";
import { useBudgetContext } from "../Contexts/BudgetContext";

export default function AddTransaction() {
  const { budget, setBudget } = useBudgetContext();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Expenses");

  const HandleAddTransaction = (e) => {
    e.preventDefault();
    if (description !== "" && amount !== "" && type !== "") {
      setBudget([
        ...budget,
        {
          description: description,
          amount: amount,
          type: type,
        },
      ]);
      setDescription("");
      setAmount("");
    } else {
      alert("All Fiels are mandatory!");
    }
  };

  return (
    <>
      <form onSubmit={HandleAddTransaction}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="text"
        />
        <br />
        <input
          type="number"
          placeholder="Transaction Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="text"
          min={1}
        />
        <div>
          <input
            type="radio"
            name="type"
            value="Income"
            checked={type === "Income"}
            onChange={(e) => setType(e.target.value)}
            id="radio-income"
          />
          <label htmlFor="radio-income">Income</label>
          <input
            type="radio"
            name="type"
            value="Expenses"
            checked={type === "Expenses"}
            onChange={(e) => setType(e.target.value)}
            id="radio-expenses"
          />
          <label htmlFor="radio-expenses">Expenses</label>
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </>
  );
}
