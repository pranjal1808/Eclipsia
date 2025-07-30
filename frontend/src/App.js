import React, { useState } from "react";
import Login from "./Login.js";
import Dashboard from "./Dashboard.js";

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  return user
    ? React.createElement(Dashboard, { user })
    : React.createElement(Login, { onLogin: handleLogin });
}