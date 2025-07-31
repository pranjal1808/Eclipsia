import React, { useState, useEffect } from "react";

function Modal({ children, onClose }) {
  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(240, 200, 229, 1)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "8px",
        minWidth: "300px",
        boxShadow: "0 2px 10px rgba(18, 16, 17, 1)"
      }}>
        {children}
        <div style={{ marginTop: "20px", textAlign: "right" }}>
          <button onClick={onClose} style={{ marginRight: "10px" }}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default function Dashboard(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [tempStartDate, setTempStartDate] = useState(props.startDate || "");
  const [tempEndDate, setTempEndDate] = useState(props.endDate || "");
  const [startDate, setStartDate] = useState(props.startDate || "");
  const [endDate, setEndDate] = useState(props.endDate || "");
  const [currentDay, setCurrentDay] = useState(null);

  const openModal = () => {
    setTempStartDate(startDate);
    setTempEndDate(endDate);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const saveDates = () => {
    setStartDate(tempStartDate);
    setEndDate(tempEndDate);
    setModalOpen(false);
  };

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
    <div style={{ textAlign: "center", padding: "20px" }}>
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

      <button onClick={openModal}>Edit Period</button>

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

      {modalOpen && (
        <Modal onClose={closeModal}>
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
            <button onClick={closeModal}>Cancel</button>
          </div>
        </Modal>
      )}
    </div>
  );
}
