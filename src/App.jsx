import { useState } from "react";
import moment from "moment-timezone";
import "./App.css";

function App() {
  const [time, setTime] = useState("");
  const [fromZone, setFromZone] = useState("US/Pacific");
  const [toZone, setToZone] = useState("Africa/Cairo");
  const [convertedTime, setConvertedTime] = useState("");

  const timeZones = moment.tz.names();

  function convert() {
    const m = moment.tz(time, fromZone)
    setConvertedTime(m.tz(toZone).format('MM/DD/YYYY, h:mm:ss a'));
  }

  return (
    <div className="content">
      <div>
        <h1>Time Zone Transformer</h1>
      </div>
      <div className="card-content">
        <label>Enter Time:</label>
        <input
          type="datetime-local"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <label>From Time Zone:</label>
        <select value={fromZone} onChange={(e) => setFromZone(e.target.value)}>
          {timeZones.map((zone) => (
            <option key={zone} value={zone}>
              {zone}
            </option>
          ))}
        </select>
        <label>To Time Zone:</label>
        <select value={toZone} onChange={(e) => setToZone(e.target.value)}>
          {timeZones.map((zone) => (
            <option key={zone} value={zone}>
              {zone}
            </option>
          ))}
        </select>
        <div>
          <button onClick={convert}>Transform</button>
        </div>
        <div>
          <h3>Converted Time: {convertedTime}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
