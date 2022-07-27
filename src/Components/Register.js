import React, { useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { useLoginContext } from "../Contexts/LoginContext";

const Register = () => {
  const { Register, user } = useLoginContext();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const HandleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await Register(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  if (user) return <Navigate to="/home" />;

  return (
    <>
      <div className="FORM">
        <h1>Register</h1>
        <form onSubmit={HandleSignUp} className="Login">
          <input
            type={"email"}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type={"password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Register</button>
        </form>
        <p className="center mt-2">
          Already a user? 
          <Link to="/"> Sign in</Link>
        </p>
      </div>
    </>
  );
};

export default Register;
