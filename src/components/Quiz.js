import React, { useContext } from "react";
import "../styles/output.css";
import "../styles/all.css";
import { QuizContext } from "../contexts/quiz";
import Question from "../components/Question";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div>
      <div className="quiz">
        {quizState.showResults && (
          <div className="results">
            <div className="congratulations">Congratulations!</div>
            <div className="results-info">
              <div>You have done the quiz</div>
              <div className=" ">
                You've got {quizState.correctAnswerCount} of
                {quizState.question.length}
              </div>
              <div
                className="next-button"
                onClick={() => dispatch({ type: "RESTART" })}
              >
                Restart
              </div>
            </div>
          </div>
        )}

        {!quizState.showResults && (
          <div>
            <div className="score">
              Question {quizState.currentQuestionIndex + 1} /
              {quizState.question.length}
            </div>
            <Question />

            <div
              className="next-button"
              onClick={() => dispatch({ type: "NEXT_QUESTION" })}
            >
              Next Question
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
