import React, { useState } from "react";

export const Register = (props) => {
  const [username, setUsername] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    let user = await axios.post(
      "https://loginsys-backend.onrender.com/apis/site/newuserregister",
      { name: username, dateofbirth: dob, email: email, password: password }
    );
  };
  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
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
        <label htmlFor="dob">dob</label>
        <input
          value={dob}
          type="dob"
          placeholder="dob"
          id="dob"
          name="dob"
          onChange={(e) => {
            setDob(e.target.value);
          }}
        />

        <label htmlFor="email">email</label>
        <input
          value={email}
          type="email"
          placeholder="email"
          id="email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

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
        <button type="submit" onSubmit={handleSubmit}>
          Register
        </button>
      </form>

      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account?Login here
      </button>
    </div>
  );
};
