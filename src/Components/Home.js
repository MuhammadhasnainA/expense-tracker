import React from "react";
import AddTransaction from "./AddTransaction";
import Balance from "./Balance";
import History from "./History";
import { Navigate } from "react-router-dom";
import { useLoginContext } from "../Contexts/LoginContext";

const Home = () => {
  const { user } = useLoginContext();

  if (!user) return <Navigate to="/" />;

  return (
    <>
      <Balance />
      <History />
      <AddTransaction />
    </>
  );
};

export default Home;
