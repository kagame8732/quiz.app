import React from "react";
import ReactDOM from "react-dom/client";
import Joint from "./components/Joint";
import { QuizProvider } from "./contexts/quiz";
import "./styles/all.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QuizProvider>
      <Joint />
    </QuizProvider>
  </React.StrictMode>
);
