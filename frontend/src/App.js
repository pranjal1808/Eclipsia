import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState(null);
  const [waterLogs, setWaterLogs] = useState([]);

  const API = axios.create({
    baseURL: "http://localhost:5065/api", // your ASP.NET Core backend URL + /api prefix
  });

  // Get a user by ID
  const getUser = async () => {
    try {
      const response = await API.get(`/User/${userId}`);
      setUserData(response.data);
    } catch (error) {
      console.error(error);
      alert("User not found. Make sure the ID exists!");
    }
  };

  // Get water logs for user
  const getWaterLogs = async () => {
    try {
      const response = await API.get(`/Water/${userId}`);
      setWaterLogs(response.data);
    } catch (error) {
      console.error(error);
      alert("Could not fetch water logs.");
    }
  };

  // Add water log
  const addWaterLog = async () => {
    try {
      const log = {
        userId: userId,
        date: new Date().toISOString(),
        cupsDrank: 1, // example
      };
      const response = await API.post("/Water", log);
      alert("Water log added!");
      getWaterLogs(); // refresh list
    } catch (error) {
      console.error(error);
      alert("Error adding water log.");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Eclipsia App (React + C# API)</h1>

      <div>
        <label>User ID:</label>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button onClick={getUser}>Get User</button>
      </div>

      {userData && (
        <div style={{ marginTop: "20px" }}>
          <h3>User Data</h3>
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        </div>
      )}

      <div style={{ marginTop: "20px" }}>
        <button onClick={getWaterLogs}>Get Water Logs</button>
        <button onClick={addWaterLog}>Add Water Log</button>

        {waterLogs.length > 0 && (
          <div>
            <h3>Water Logs</h3>
            <ul>
              {waterLogs.map((log) => (
                <li key={log.id}>
                  {log.date}: {log.cupsDrank} cups
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
