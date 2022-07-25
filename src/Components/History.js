import { useBudgetContext } from "../Contexts/BudgetContext";

export default function History() {
  const { budgets, handleDelete } = useBudgetContext();

  const printAmount = (amount) => {
    return parseFloat(amount)
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
      <h2 className="mt-2">Transaction History</h2>
      {budgets.map((element, index) => {
        return (
          <div key={index} className="box align-center">
            <p>{element.budget.description}</p>
            <div className="d-flex align-center">
              <p className={element.budget.type === "Income" ? "Green" : "Red"}>
                {printAmount(element.budget.amount)}
              </p>
              <button
                className="delete"
                onClick={() => handleDelete(element.uidd)}
              >
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
