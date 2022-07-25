import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../Firebase";
import { set, ref, onValue, remove, refFromURL, get } from "firebase/database";
import { uid } from "uid";
import Spinner from "../Spinner.gif";
const BudgetContext = createContext();

export function BudgetContextProvider({ children }) {
  const navigate = useNavigate();
  const [budgets, setBudgets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setLoading(true);
        onValue(ref(db, `/${auth.currentUser.uid}`), (snapshot) => {
          setBudgets([]);
          const data = snapshot.val();
          if (data !== null) {
            Object.values(data).map((budget) => {
              setBudgets((oldArray) => [...oldArray, budget]);
            });
          }
          setLoading(false);
        });
      } else if (!user) {
        navigate("/");
      }
    });
  }, []);

  const writeToDatabase = (description, amount, type) => {
    const uidd = uid();
    set(ref(db, `/${auth.currentUser.uid}/${uidd}`), {
      budget: {
        description: description,
        amount: amount,
        type: type,
      },
      uidd: uidd,
    });
  };

  const handleDelete = (uid) => {
    remove(ref(db, `/${auth.currentUser.uid}/${uid}`));
    budgets.filter(() => budgets);
  };

  if (loading) return <img src={Spinner} />;

  return (
    <BudgetContext.Provider
      value={{
        budgets,
        setBudgets,
        writeToDatabase,
        handleDelete,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
}

export function useBudgetContext() {
  return useContext(BudgetContext);
}
