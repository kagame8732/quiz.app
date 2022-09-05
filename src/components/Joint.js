import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Quiz from "../components/Quiz";
import Register from "./Register";
import Home from "./Home";
import Login from "./Login";

function Joint() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default Joint;
