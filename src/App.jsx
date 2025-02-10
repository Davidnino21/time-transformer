import { useState } from "react";
import moment from "moment-timezone";
import "./App.css";

function App() {
  const [time, setTime] = useState("");
  const [fromZone, setFromZone] = useState("");
  const [toZone, setToZone] = useState("");
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
        <select>
          {timeZones.map((zone) => (
            <option key={zone} value={zone}>
              {zone}
            </option>
          ))}
        </select>
        <label>To Time Zone:</label>
        <select>
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
          <p>Converted Time:</p>
        </div>
      </div>
    </div>
  );
}

export default App;
