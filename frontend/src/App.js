import React, { useState, useEffect } from "react";
import Login from "./Login.js";
import Dashboard from "./Dashboard.js";

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
}
