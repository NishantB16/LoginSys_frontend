import React, { useState } from "react";
export const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    let user = await axios.post(
      "https://loginsys-backend.onrender.com/apis/site/signin",
      { name: username, password: password }
    );
  };
  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">username</label>
        <input
          value={username}
          type="username"
          placeholder="username"
          id="username"
          name="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <label htmlFor="password">password</label>
        <input
          value={password}
          type="password"
          placeholder="password"
          id="password"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">LogIn</button>
      </form>

      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Dont have an account?Register here
      </button>
    </div>
  );
};
