import React from "react";
import "../styles/all.css";
const Answer = ({
  answerText,
  index,
  onSelectAnswer,
  currentAnswer,
  correctAnswer,
}) => {
  const letter = ["A", "B", "C", "D"];
  const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
  const isWrongAnswer =
    currentAnswer === answerText && currentAnswer !== correctAnswer;
  const correctAnswerClass = isCorrectAnswer ? "correct-answer" : "";
  const isWrongAnswerClass = isWrongAnswer ? "wrong-answer" : "";
  const disabledClass = currentAnswer ? "disabled-answer" : "";

  return (
    <div
      className={`answer ${correctAnswerClass} ${isWrongAnswerClass} ${disabledClass}`}
      onClick={() => onSelectAnswer(answerText)}
    >
      <div className="answer-letter">{letter[index]}</div>
      <div className="answer-text">{answerText}</div>
    </div>
  );
};

export default Answer;
