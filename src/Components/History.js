import { useBudgetContext } from "../Contexts/BudgetContext";

export default function History() {
  const { budget, setBudget } = useBudgetContext();

  const printAmount = (amount) => {
    return parseFloat(amount)
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const Delete = (index) => {
    budget.splice(index, 1);
    setBudget(budget.filter(() => budget));
  };

  return (
    <>
      <h2 className="mt-2">Transaction History</h2>
      {budget.map((element, index) => {
        return (
          <div key={index} className="box align-center">
            <p>{element.description}</p>
            <div className="d-flex align-center">
              <p className={element.type === "Income" ? "Green" : "Red"}>
                {printAmount(element.amount)}
              </p>
              <button className="delete" onClick={() => Delete(index)}>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
