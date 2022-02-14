import React, { useContext, useState } from "react";
import { StateContext } from "../Context/Providers/State";

const QuizHelpers = ({ helperTwoActive, setHelperTwoActive }) => {
  const { state, actions } = useContext(StateContext);
  let timeExpired = state.time_time_expired;

  const [helperOneActive, setHelperOneActive] = useState();

  const addSeconds = () => {
    if (!timeExpired) {
      setHelperOneActive(true);
      actions.time.setTimer(state.timer + 10);
    }
  };

  const removeTwoOptions = () => {
    if (!timeExpired) {
      setHelperTwoActive(true);
    }
  };

  return (
    <>
      <button
        disabled={helperTwoActive || timeExpired}
        onClick={removeTwoOptions}
      >
        remove two options
      </button>
      <button disabled={helperOneActive || timeExpired} onClick={addSeconds}>
        add 10 seconds
      </button>
    </>
  );
};

export default QuizHelpers;
