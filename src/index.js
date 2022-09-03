import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./components/Login";
import { QuizProvider } from "./contexts/quiz";
import "./styles/all.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QuizProvider>
      <Login />
    </QuizProvider>
  </React.StrictMode>
);
