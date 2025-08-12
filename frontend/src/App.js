import React, { useState, useEffect } from "react";
import Login from "./Login.js";
import Dashboard from "./Dashboard.js";

export default function App() {
  const [user, setUser] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleDateChange = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };

  if (!user) {
    return React.createElement(Login, { onLogin: handleLogin });
  }

  return React.createElement(Dashboard, {
    user: user,
    startDate: startDate,
    endDate: endDate,
    onDateChange: handleDateChange,
    cyclePeriod: "28 days",
    pregnancyChance: "Low",
    daysToOvulation: "14",
    dayOfCycle: "1",
    waterTrackingStatus: "On track"
  });
}
