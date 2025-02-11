import { useState } from "react";
import moment from "moment-timezone";
import "./App.css";

function App() {
  const [time, setTime] = useState("");
  const [fromZone, setFromZone] = useState("US/Pacific");
  const [toZone, setToZone] = useState("Africa/Cairo");
  const [convertedTime, setConvertedTime] = useState("");

  const timeZones = moment.tz.names();



  return (
    <div className="content">
      <div>
        <h1>Time Zone Transformer</h1>
      </div>
      <div className="card-content">
        <label>Enter Time:</label>
        <input type="datetime-local" />
        <label>From Time Zone:</label>
        <select value={fromZone}>
          {timeZones.map((zone) => (
            <option key={zone} value={zone}>
              {zone}
            </option>
          ))}
        </select>
        <label>To Time Zone:</label>
        <select value={toZone}>
          {timeZones.map((zone) => (
            <option key={zone} value={zone}>
              {zone}
            </option>
          ))}
          <option value=""></option>
        </select>
        <div>
          <button>Transform</button>
        </div>
        <div>
          <h3>Converted Time:</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
