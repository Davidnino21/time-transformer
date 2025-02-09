import { useState } from "react";

import "./App.css";

function App() {
  return (
    <div className="content">
      <div>
        <h1>Time Zone Transformer</h1>
      </div>
      <div className="card-content">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <div>
          <button>Transform</button>
        </div>
        <div>
          <p>Your time has been converted</p>
        </div>
      </div>
    </div>
  );
}

export default App;
