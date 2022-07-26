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
              <Routes>
                <Route
                  path="/home"
                  element={
                    <div className="width">
                      <Home />
                    </div>
                  }
                />
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </BudgetContextProvider>
          </LoginContextProvider>
        </BrowserRouter>
      </div>
    </>
  );
}
