import React, { useState } from "react";
import "../styling/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="space_products"></div>
      <div className="login_container">
        <h4 className="login_title">login</h4>
        <div className="login_form">
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="login_btn">login</button>
          </form>

          <p className="create_account">
            Don't have an account? <span>Create an account</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
