import React from "react";
import { Table } from "./components/Table";
import GlobalFonts from "./fonts/fonts";

import logo from "./logoblm.png";
import "./index.css";
import Markers from './components/Markers';
import data from './data/data.json';

function App() {
  console.log(data[0]["Street Address of Incident"])
  return (
    <div className="App">
      <GlobalFonts />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to begin!</p>
      </header>
      <Markers />
    </div>
  );
}

export default App;
