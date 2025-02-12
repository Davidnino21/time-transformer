import { useState } from "react";
import moment from "moment-timezone";
import "./App.css";

function App() {
  // Define state variable for the user input and converted time
  const [time, setTime] = useState(""); // Stores the input time from the user
  const [fromZone, setFromZone] = useState("US/Pacific"); // Default time zone to convert from
  const [toZone, setToZone] = useState("Africa/Cairo"); // Default time zone to convert to
  const [convertedTime, setConvertedTime] = useState(""); // Stores the results of the converted time

  // Get a list of all available time zones from moment-timezone
  const timeZones = moment.tz.names();

  // Function to convert time from one zone to another
  function convert() {
    // Create a moment object with the user's input time and the selected "from" time zone
    const m = moment.tz(time, fromZone);

    // Convert the time to the selected time zone and format it
    setConvertedTime(m.tz(toZone).format("MM/DD/YYYY, h:mm:ss a"));
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
