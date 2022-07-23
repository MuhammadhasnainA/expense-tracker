import AddTransaction from "./Components/AddTransaction";
import Balance from "./Components/Balance";
import History from "./Components/History";
import { BudgetContextProvider } from "./Contexts/BudgetContext";
import "./styles.css";

export default function App() {
  return (
    <>
    <div className="Nav">
    <h1>Expense Tracker</h1>
  </div>
    <div className="App">
      <div className="width">
        <BudgetContextProvider>
          <Balance />
          <History />
          <AddTransaction />
        </BudgetContextProvider>
      </div>
    </div>
    </>
  );
}
