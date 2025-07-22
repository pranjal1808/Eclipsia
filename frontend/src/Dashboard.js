import React from "react";

export default function Dashboard(props) {
  return React.createElement(
    "div",
    { style: { textAlign: "center", padding: "20px" } },

    React.createElement(
      "h2",
      null,
      `Hi ${props.user}, Your current cycle`
    ),

    React.createElement(
      "div",
      {
        style: {
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          backgroundColor: "#f8a",
          margin: "20px auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: "24px",
        },
      },
      "Period 1"
    ),

    React.createElement(
      "p",
      null,
      "Low chance to get pregnant"
    ),

    React.createElement(
      "button",
      null,
      "Edit Period"
    ),

    React.createElement(
      "div",
      null,
      React.createElement("h3", null, "My Cycles"),
      React.createElement("p", null, "Days to ovulation: 13"),
      React.createElement("p", null, "Day of cycle: 1"),
      React.createElement("p", null, "Water tracking: Coming soon")
    )
  );
}
