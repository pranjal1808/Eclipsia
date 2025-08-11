import React, { useState, useEffect } from "react";

export default function Dashboard(props) {
  const [tempStartDate, setTempStartDate] = useState(props.startDate || "");
  const [tempEndDate, setTempEndDate] = useState(props.endDate || "");
  const [startDate, setStartDate] = useState(props.startDate || "");
  const [endDate, setEndDate] = useState(props.endDate || "");
  const [currentDay, setCurrentDay] = useState(null);

  const saveDates = () => {
    setStartDate(tempStartDate);
    setEndDate(tempEndDate);
    if (props.onDateChange) {
      props.onDateChange(tempStartDate, tempEndDate);
    }
  };

  const handleBack = () => {
    if (props.onBack) {
      props.onBack();
    }
  };

  useEffect(() => {
    if (props.startDate !== startDate) {
      setStartDate(props.startDate || "");
      setTempStartDate(props.startDate || "");
    }
    if (props.endDate !== endDate) {
      setEndDate(props.endDate || "");
      setTempEndDate(props.endDate || "");
    }
  }, [props.startDate, props.endDate]);

  useEffect(() => {
    if (startDate) {
      const start = new Date(startDate);
      const today = new Date();
      const diffTime = today - start;
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
      if (diffDays > 0 && endDate) {
        const end = new Date(endDate);
        if (today <= end) {
          setCurrentDay(diffDays);
        } else {
          setCurrentDay(null);
        }
      } else {
        setCurrentDay(null);
      }
    } else {
      setCurrentDay(null);
    }
  }, [startDate, endDate]);

  return (
    <div style={{ textAlign: "center", padding: "20px", backgroundColor: "#1f1d1cff" }}>
      <h2>Hi {props.user}, Your current cycle</h2>

      <div
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          backgroundColor: "#ef6eb1ff",
          margin: "20px auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: "24px",
        }}
      >
        {currentDay ? `Day ${currentDay}` : props.cyclePeriod}
      </div>

      <p>{props.pregnancyChance}</p>

      <div>
        <h3>Edit Period Dates</h3>
        <label>
          Start Date:{" "}
          <input
            type="date"
            value={tempStartDate}
            onChange={(e) => setTempStartDate(e.target.value)}
          />
        </label>
        <br />
        <label>
          End Date:{" "}
          <input
            type="date"
            value={tempEndDate}
            onChange={(e) => setTempEndDate(e.target.value)}
          />
        </label>
        <div style={{ marginTop: "20px", textAlign: "right" }}>
          <button onClick={saveDates} style={{ marginRight: "10px" }}>
            Save
          </button>
        </div>
      </div>

      <p>
        Period Start Date: {startDate || "N/A"} <br />
        Period End Date: {endDate || "N/A"}
      </p>

      <div>
        <h3>My Cycles</h3>
        <p>Days to ovulation: {props.daysToOvulation}</p>
        <p>Day of cycle: {props.dayOfCycle}</p>
      <p>Water tracking: {props.waterTrackingStatus}</p>
      </div>
      <button onClick={handleBack} style={{ fontSize: "24px", cursor: "pointer", background: "none", border: "none", marginTop: "20px" }} aria-label="Back">
        ←
      </button>
    </div>
  );
}
