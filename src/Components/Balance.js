import { useEffect, useState } from "react";
import { useBudgetContext } from "../Contexts/BudgetContext";

export default function Balance() {
  const { budget } = useBudgetContext();

  const getTotals = () => {
    let totalIncome = 1;
    let totalExpenses = 0;
    if (budget.filter((element) => element.type === "Income").length > 0) {
      totalIncome = budget
        .filter((element) => element.type === "Income")
        .map((element) => element.amount)
        .reduce((acc, amount) => parseInt(acc) + parseInt(amount));
    }
    if (budget.filter((element) => element.type === "Expenses").length > 0) {
      totalExpenses = budget
        .filter((element) => element.type === "Expenses")
        .map((element) => element.amount)
        .reduce((acc, amount) => parseInt(acc) + parseInt(amount));
    }
    return {
      totalIncome,
      totalExpenses,
    };
  };

  // Print amount format
  const printAmount = (amount) => {
    return parseFloat(amount)
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const { totalIncome, totalExpenses } = getTotals();

  // render
  return (
    <div className="amount-details-container">
      <h1 className="current">
        Current Balance{" "}
        <span className="highlight">
          {printAmount(totalIncome - totalExpenses)}
        </span>
      </h1>
      <div className="totals">
        <p>Total Income</p>
        <span id="total-income">{printAmount(totalIncome)}</span>
      </div>
      <div className="totals">
        <p>Total Expenses</p>
        <span id="total-expenses">{printAmount(totalExpenses)}</span>
      </div>
    </div>
  );
}
