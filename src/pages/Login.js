import React, { useState } from "react";
import "../styling/login.css";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // navigate to checkout page
      setLoading(false);
      navigate("/checkout", { replace: true });

      setEmail("");
      setPassword("");
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  if (loading) {
    return (
      <>
        <div className="space_products"></div>
        <h1
          style={{ marginTop: "25px", textAlign: "center", fontSize: "22px" }}
        >
          Loading...
        </h1>
      </>
    );
  } else {
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

              <button className="login_btn" onClick={handleSignIn}>
                login
              </button>
            </form>

            <p className="create_account">
              Don't have an account?{" "}
              <Link to="/register">
                <span>Create an account</span>
              </Link>
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
