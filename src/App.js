import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Components/Home";
import Login from "../src/Components/Login";
import Nav from "./Components/Nav";
import Register from "./Components/Register";
import { BudgetContextProvider } from "./Contexts/BudgetContext";
import { LoginContextProvider } from "./Contexts/LoginContext";
import "./styles.css";

export default function App() {
  return (
    <>
      <div className="App">
      <BrowserRouter>
        <LoginContextProvider>
          <BudgetContextProvider>
            <Nav />
            <div className="width">
                <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                </Routes>
            </div>
          </BudgetContextProvider>
        </LoginContextProvider>
        </BrowserRouter>
      </div>
    </>
  );
}
