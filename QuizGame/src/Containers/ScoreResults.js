import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../Context/Providers/State";

const ScoreResults = () => {
  const { state, actions } = useContext(StateContext);
  let navigate = useNavigate();
  const restartQuiz = () => {
    actions.score.resetScore();
    navigate("/");
  };

  return (
    <div className="results-container">
      <p className="score-text-color">
        CORRECT ANSWERS:{" "}
        <b style={{ color: "darkgreen", fontSize: 50, marginLeft: 20 }}>
          {state.corrects}
        </b>
      </p>
      <p className="score-text-color">
        WRONGS ANSWERS:{" "}
        <b style={{ color: "darkred", fontSize: 50, marginLeft: 20 }}>
          {state.wrongs}
        </b>
      </p>
      <p className="score-text-color">
        NOT ANSWERED:
        <b style={{ color: "orange", fontSize: 50, marginLeft: 20 }}>
          {state.no_answers}
        </b>
      </p>
      <button className="restart-button" onClick={restartQuiz}>
        RESTART
        </button>
    </div>
  );
};

export default ScoreResults;
