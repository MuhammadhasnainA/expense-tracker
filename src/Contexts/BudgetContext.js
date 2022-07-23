import { createContext, useContext, useState } from "react";

const BudgetContext = createContext();

export function BudgetContextProvider({ children }) {
  const [budget, setBudget] = useState([]);

  return (
    <BudgetContext.Provider value={{ budget, setBudget }}>
      {children}
    </BudgetContext.Provider>
  );
}


export function useBudgetContext(){
  return useContext(BudgetContext);
}