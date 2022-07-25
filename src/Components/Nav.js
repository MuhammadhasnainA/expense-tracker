import React from "react";
import { useLoginContext } from "../Contexts/LoginContext";

const Nav = () => {
  const { user, LogOut } = useLoginContext();

  const HandleLogOut = async () => {
    try {
      await LogOut();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="Nav">
      <h1>Expense Tracker</h1>
      {user && <button onClick={HandleLogOut}>Log out</button>}
    </div>
  );
};

export default Nav;
