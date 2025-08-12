import React, { useState } from "react";
import "./Login.css";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username.trim());
    }
  };

  return React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#1f1d1cff",
      color: "#fff"
    }
  },
    React.createElement("div", {
      style: {
        backgroundColor: "#2a2a2a",
        padding: "40px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
        textAlign: "center",
        maxWidth: "400px",
        width: "100%"
      }
    },
      React.createElement("h1", {
        style: { marginBottom: "30px", color: "#ef6eb1ff" }
      }, "Welcome to Eclipsia"),
      React.createElement("form", { onSubmit: handleSubmit },
        React.createElement("div", { style: { marginBottom: "20px" } },
          React.createElement("label", {
            style: { display: "block", marginBottom: "10px", fontSize: "16px" }
          }, "Enter your name:"),
          React.createElement("input", {
            type: "text",
            value: username,
            onChange: (e) => setUsername(e.target.value),
            placeholder: "Your name",
            style: {
              width: "100%",
              padding: "12px",
              borderRadius: "5px",
              border: "1px solid #555",
              backgroundColor: "#333",
              color: "#fff",
              fontSize: "16px"
            }
          })
        ),
        React.createElement("button", {
          type: "submit",
          style: {
            width: "100%",
            padding: "12px",
            backgroundColor: "#ef6eb1ff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer"
          }
        }, "Continue")
      )
    )
  );
}
