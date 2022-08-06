import * as React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbar";
import Home from "./components/Home";
import About from "./components/About";
import Auth from "./components/auth";
import IsSignin from "./components/IsSignin";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/sigin" element={<IsSignin />} />
      </Routes>
    </div>

  );
}

export default App;
