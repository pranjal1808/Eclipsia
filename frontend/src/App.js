<<<<<<< HEAD
import React, { useState } from "react";
import "./App.css";
import Login from "./Login"; // Import login component
=======
import React, { useState, useEffect } from "react";
import Login from "./Login.js";
import Dashboard from "./Dashboard.js";
>>>>>>> 112ff98fe837f9aea2c93e944332ea3c55e8a029

function IntermediatePage(props) {
  const handleContinue = () => {
    if (props.onContinue) {
      props.onContinue();
    }
  };

  const handleMyCycleClick = () => {
    if (props.onContinue) {
      props.onContinue();
    }
  };

  const handleOvulationClick = () => {
    if (props.onOvulation) {
      props.onOvulation();
    }
  };

  const handleWaterTrackingClick = () => {
    if (props.onWaterTracking) {
      props.onWaterTracking();
    }
  };

  const handleExerciseClick = () => {
    if (props.onExercise) {
      props.onExercise();
    }
  };

  const handleBack = () => {
    if (props.onBack) {
      props.onBack();
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={handleBack} style={{ fontSize: "24px", cursor: "pointer", background: "none", border: "none" }} aria-label="Back">
        ←
      </button>
      <h1>Welcome to the Intermediate Page</h1>
      <p>This page appears after login and before the dashboard.</p>
      <div style={{ margin: "20px 0" }}>
        <button style={{ margin: "5px" }} onClick={handleMyCycleClick}>My Cycle</button>
        <button style={{ margin: "5px" }} onClick={handleOvulationClick}>Ovulation</button>
        <button style={{ margin: "5px" }} onClick={handleWaterTrackingClick}>Water Tracking</button>
        <button style={{ margin: "5px" }} onClick={handleExerciseClick}>Exercise</button>
      </div>
      <button onClick={handleContinue}>Continue to Dashboard</button>
    </div>
  );
}

function OvulationDashboard(props) {
  const [ovulationDate, setOvulationDate] = useState(null);
  const [fertileWindowStart, setFertileWindowStart] = useState(null);
  const [fertileWindowEnd, setFertileWindowEnd] = useState(null);

  useEffect(() => {
    const cycleLength = 28;
    const lutealPhase = 14;

    if (props.startDate) {
      const start = new Date(props.startDate);
      const ovulation = new Date(start);
      ovulation.setDate(start.getDate() + cycleLength - lutealPhase);
      setOvulationDate(ovulation);

      const fertileStart = new Date(ovulation);
      fertileStart.setDate(ovulation.getDate() - 5);
      setFertileWindowStart(fertileStart);

      const fertileEnd = new Date(ovulation);
      fertileEnd.setDate(ovulation.getDate() + 1);
      setFertileWindowEnd(fertileEnd);
    }
  }, [props.startDate]);

  const formatDate = (date) => {
    if (!date) return "N/A";
    return date.toISOString().split("T")[0];
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", padding: "20px" }}>
      <button onClick={props.onBack} style={{ fontSize: "24px", cursor: "pointer", background: "none", border: "none" }} aria-label="Back">
        ←
      </button>
      <h1>Ovulation Dashboard</h1>
      <p>Ovulation Date: {formatDate(ovulationDate)}</p>
      <p>Fertile Window: {formatDate(fertileWindowStart)} to {formatDate(fertileWindowEnd)}</p>
      <p>Duration: 6 days</p>
    </div>
  );
}

function WaterTrackingDashboard(props) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px", padding: "20px" }}>
      <button onClick={props.onBack} style={{ fontSize: "24px", cursor: "pointer", background: "none", border: "none" }} aria-label="Back">
        ←
      </button>
      <h1>Water Tracking Dashboard</h1>
      <p>Track your daily water intake here.</p>
      {/* Add water tracking functionality here */}
    </div>
  );
}

function ExerciseDashboard(props) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px", padding: "20px" }}>
      <button onClick={props.onBack} style={{ fontSize: "24px", cursor: "pointer", background: "none", border: "none" }} aria-label="Back">
        ←
      </button>
      <h1>Exercise Dashboard</h1>
      <p>Track your exercise routines here.</p>
      {/* Add exercise tracking functionality here */}
    </div>
  );
}

export default function App() {
<<<<<<< HEAD
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
=======
  const [user, setUser] = useState(null);
  const [showIntermediate, setShowIntermediate] = useState(false);
  const [showOvulation, setShowOvulation] = useState(false);
  const [showWaterTracking, setShowWaterTracking] = useState(false);
  const [showExercise, setShowExercise] = useState(false);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
    setShowIntermediate(true);
  };

  const handleContinue = () => {
    setShowIntermediate(false);
    setShowOvulation(false);
    setShowWaterTracking(false);
    setShowExercise(false);
  };

  const handleMyCycle = () => {
    setShowIntermediate(false);
    setShowOvulation(false);
    setShowWaterTracking(false);
    setShowExercise(false);
  };

  const handleOvulation = () => {
    setShowIntermediate(false);
    setShowOvulation(true);
    setShowWaterTracking(false);
    setShowExercise(false);
  };

  const handleWaterTracking = () => {
    setShowIntermediate(false);
    setShowOvulation(false);
    setShowWaterTracking(true);
    setShowExercise(false);
  };

  const handleExercise = () => {
    setShowIntermediate(false);
    setShowOvulation(false);
    setShowWaterTracking(false);
    setShowExercise(true);
  };

  const handleBackFromOvulation = () => {
    setShowOvulation(false);
    setShowIntermediate(true);
  };

  const handleBackFromWaterTracking = () => {
    setShowWaterTracking(false);
    setShowIntermediate(true);
  };

  const handleBackFromExercise = () => {
    setShowExercise(false);
    setShowIntermediate(true);
  };

  const handleBackFromIntermediate = () => {
    setShowIntermediate(false);
    setUser(null);
  };

  const handleDateChange = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  } else if (showOvulation) {
    return <OvulationDashboard startDate={startDate} onBack={handleBackFromOvulation} />;
  } else if (showWaterTracking) {
    return <WaterTrackingDashboard onBack={handleBackFromWaterTracking} />;
  } else if (showExercise) {
    return <ExerciseDashboard onBack={handleBackFromExercise} />;
  } else if (showIntermediate) {
    return (
      <IntermediatePage
        onContinue={handleMyCycle}
        onOvulation={handleOvulation}
        onWaterTracking={handleWaterTracking}
        onExercise={handleExercise}
        onBack={handleBackFromIntermediate}
      />
    );
  } else {
    return <Dashboard user={user} startDate={startDate} endDate={endDate} onDateChange={handleDateChange} onBack={handleBackFromIntermediate} />;
  }
>>>>>>> 112ff98fe837f9aea2c93e944332ea3c55e8a029
}
