import { useBudgetContext } from "../Contexts/BudgetContext";

export default function Balance() {
  const { budgets } = useBudgetContext();

  const getTotals = () => {
    let totalIncome = 0;
    let totalExpenses = 0;
    if (budgets.filter((element) => element.budget.type === "Income").length > 0) {
      totalIncome = budgets
        .filter((element) => element.budget.type === "Income")
        .map((element) => element.budget.amount)
        .reduce((acc, amount) => parseInt(acc) + parseInt(amount));
    }
    if (budgets.filter((element) => element.budget.type === "Expenses").length > 0) {
      totalExpenses = budgets
        .filter((element) => element.budget.type === "Expenses")
        .map((element) => element.budget.amount)
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
