import React from "react";
import logo from "./assets/logo.svg";

// styles & assets
import "./App.scss";
import { Route, Routes } from "react-router-dom";

// components
import TheNavigation from "./components/TheNavigation";

// views
import Home from "./views/Home";
import Tunes from "./views/Tunes";
import About from "./views/About";

function App() {
  return (
    <div className="App">
      <header>
        <TheNavigation />
      </header>
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tunes" element={<Tunes />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <footer>
        <img src={logo} className="App-logo" alt="logo" />
      </footer>
    </div>
  );
}

export default App;
