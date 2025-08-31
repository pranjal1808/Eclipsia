import React, { useState, useEffect } from "react";

function Modal({ children, onClose }) {
  return React.createElement("div", {
    style: {
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000
    }
  },
    React.createElement("div", {
      style: {
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "8px",
        minWidth: "300px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.3)"
      }
    },
      children,
      React.createElement("div", { style: { marginTop: "20px", textAlign: "right" } },
        React.createElement("button", { onClick: onClose, style: { marginRight: "10px" } }, "Cancel")
      )
    )
  );
}

export default function Dashboard(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [tempStartDate, setTempStartDate] = useState(props.startDate || "");
  const [tempEndDate, setTempEndDate] = useState(props.endDate || "");
  const [startDate, setStartDate] = useState(props.startDate || "");
  const [endDate, setEndDate] = useState(props.endDate || "");
  const [currentDay, setCurrentDay] = useState(0);

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
    if (props.onDateChange) {
      props.onDateChange(tempStartDate, tempEndDate);
    }
    setModalOpen(false);
  };

  const handleBack = () => {
    if (props.onBack) {
      props.onBack();
    }
  };

  useEffect(() => {
    if (startDate) {
      const start = new Date(startDate);
      const today = new Date();
      const diffTime = today.getTime() - start.getTime();
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
      if (diffDays > 0 && endDate) {
        const end = new Date(endDate);
        if (today <= end) {
          setCurrentDay(diffDays);
        } else {
          setCurrentDay(0);
        }
      } else {
        setCurrentDay(0);
      }
    } else {
      setCurrentDay(0);
    }
  }, [startDate, endDate]);

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

  return React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "20px",
      backgroundColor: "#1f1d1cff",
      color: "#fff",
      minHeight: "100vh"
    }
  },
    React.createElement("h2", null, "Hi ", props.user, ", Your current cycle"),
    
    React.createElement("div", {
      style: {
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
        boxShadow: "0 4px 8px rgba(0,0,0,0.3)"
      }
    }, currentDay > 0 ? "Day " + currentDay : props.cyclePeriod),
    
    React.createElement("p", { style: { fontSize: "18px", margin: "10px 0" } }, props.pregnancyChance),
    
    React.createElement("button", {
      onClick: openModal,
      style: {
        padding: "10px 20px",
        backgroundColor: "#ef6eb1ff",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        margin: "10px"
      }
    }, "Edit Period"),
    
    React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-around",
        margin: "20px 0"
      }
    },
      React.createElement("button", {
        style: {
          padding: "10px 20px",
          backgroundColor: "#ef6eb1ff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          margin: "10px"
        },
        onClick: () => { /* Functionality for Cycles */ }
      }, "Cycles"),
      
      React.createElement("button", {
        style: {
          padding: "10px 20px",
          backgroundColor: "#ef6eb1ff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          margin: "10px"
        },
        onClick: () => { /* Functionality for Calendar */ }
      }, "Calendar"),
      
      React.createElement("button", {
        style: {
          padding: "10px 20px",
          backgroundColor: "#ef6eb1ff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          margin: "10px"
        },
        onClick: () => { /* Functionality for Analysis */ }
      }, "Analysis")
    ),
    
    React.createElement("div", {
      style: {
        backgroundColor: "#2a2a2a",
        padding: "20px",
        borderRadius: "10px",
        margin: "20px auto",
        maxWidth: "400px"
      }
    },
      React.createElement("h3", null, "Current Period"),
      React.createElement("p", null, React.createElement("strong", null, "Start:"), " ", startDate || "N/A"),
      React.createElement("p", null, React.createElement("strong", null, "End:"), " ", endDate || "N/A")
    ),
    
    React.createElement("div", {
      style: {
        backgroundColor: "#2a2a2a",
        padding: "20px",
        borderRadius: "10px",
        margin: "20px auto",
        maxWidth: "400px"
      }
    },
      React.createElement("h3", null, "My Cycles"),
      React.createElement("p", null, "Days to ovulation: ", props.daysToOvulation),
      React.createElement("p", null, "Day of cycle: ", props.dayOfCycle),
      React.createElement("p", null, "Water tracking: ", props.waterTrackingStatus)
    )
  );
}
