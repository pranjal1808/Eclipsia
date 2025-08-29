import React, { useState } from "react";
import "./Login.css";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email.trim() || !password.trim()) {
      setError("Email and password are required");
      return;
    }

    try {
      const url = isSignup ? "/api/user/register" : "/api/user/login";
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, PCOSFlag: false, PregnancyMode: false }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data);
      } else {
        onLogin(email);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return React.createElement("div", {
    className: "login-container"
  },
    React.createElement("h1", null, isSignup ? "Sign Up" : "Login"),
    error && React.createElement("p", { style: { color: "red" } }, error),
    React.createElement("form", { onSubmit: handleSubmit },
      React.createElement("div", { className: "input-group" },
        React.createElement("label", null, "Email:"),
        React.createElement("input", {
          type: "email",
          value: email,
          onChange: (e) => setEmail(e.target.value),
          placeholder: "Enter your email"
        })
      ),
      React.createElement("div", { className: "input-group" },
        React.createElement("label", null, "Password:"),
        React.createElement("input", {
          type: "password",
          value: password,
          onChange: (e) => setPassword(e.target.value),
          placeholder: "Enter your password"
        })
      ),
      React.createElement("button", { type: "submit" }, isSignup ? "Sign Up" : "Login")
    ),
    React.createElement("p", {
      style: { marginTop: "15px", cursor: "pointer", color: "#4facfe" },
      onClick: () => setIsSignup(!isSignup)
    }, isSignup ? "Already have an account? Login" : "New user? Sign up here")
  );
}
