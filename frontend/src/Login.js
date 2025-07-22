import React, { useState } from "react";

export default function Login(props) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== "") {
      props.onLogin(username);
    }
  };

  return React.createElement(
    "div",
    { style: { textAlign: "center", marginTop: "50px" } },
    React.createElement("h1", null, "Login"),
    React.createElement(
      "form",
      { onSubmit: handleSubmit },
      React.createElement("input", {
        type: "text",
        placeholder: "Enter your name",
        value: username,
        onChange: (e) => setUsername(e.target.value),
      }),
      React.createElement("button", { type: "submit" }, "Login")
    )
  );
}
