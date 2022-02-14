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
    <>
      SCORES CORRECTS:{state.corrects} WRONGS:{state.wrongs} NOT ANSWERED:
      {state.no_answers}
      <button onClick={restartQuiz}>Restart</button>
    </>
  );
};

export default ScoreResults;
