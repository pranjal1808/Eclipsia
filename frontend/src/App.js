import React, { useState } from "react";
import "./App.css";
import Login from "./Login"; // Import login component

export default function App() {
  const [user, setUser] = useState(null); // Start as null (not logged in)

  if (!user) {
    return <Login onLogin={(name) => setUser(name)} />;
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-left">
          <div className="avatar">{user[0]}</div>
          <div>
            <div className="greet">Hi <span className="name">{user}</span>,</div>
            <div className="sub">Your current cycle</div>
          </div>
        </div>

        <nav className="header-nav">
          <button className="icon-btn">⟳</button>
          <button className="icon-btn">📅</button>
        </nav>
      </header>

      <main className="main">
        <section className="top-card">
          <div className="circle">
            <div className="circle-inner">
              <div className="period-label">Period</div>
              <div className="period-day">1</div>
              <div className="fertility">Low chance to get pregnant</div>
            </div>
          </div>
          <button className="edit-btn">EDIT PERIOD</button>
        </section>

        <section className="calendar-strip">
          <h3>July 2025</h3>
          <div className="days">
            {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d, i) => (
              <div key={d} className={`day ${i===1 ? "active" : ""}`}>
                <div className="date">{6 + i}</div>
                <div className="dow">{d}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="cards">
          <div className="card">
            <p className="card-title">Log your symptoms</p>
            <button className="plus">+</button>
          </div>

          <div className="card">
            <p className="card-title">Day to ovulation</p>
            <div className="card-value">13</div>
          </div>

          <div className="card">
            <p className="card-title">Day of cycle</p>
            <div className="card-value">1</div>
          </div>

          <div className="card">
            <p className="card-title">Water tracking</p>
            <div className="card-value">2 cups</div>
          </div>
        </section>
      </main>

      <footer className="bottom-nav">
        <button>Home</button>
        <button>Calendar</button>
        <button className="plus-center">+</button>
        <button>Statistics</button>
        <button>Profile</button>
      </footer>
    </div>
  );
}
