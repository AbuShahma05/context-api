import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h2 className="text-gray-900 font-bold">Login</h2>

      <input
        className="bg-black text-white"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      <br />
      <br />

      <input
        className="bg-black text-white"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <br />
      <br />

      <button onClick={handleSubmit} className="bg-red-900 text-black rounded">
        Submit
      </button>
    </div>
  );
};

export default Login;
