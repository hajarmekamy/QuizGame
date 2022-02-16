import React, { useEffect, useContext } from "react";
import { StateContext } from "../Context/Providers/State";

const CountDown = () => {
  const { state, actions } = useContext(StateContext);

  useEffect(() => {
    let interval;
    if (state.timer > 0) {
      interval = setInterval(() => {
        actions.time.setTimer(state.timer - 1);
      }, 1000);
    }
    if (state.timer === 0 || state.chosen_option !== undefined) {
      clearInterval(interval);
      actions.time.setTimeExpired(true);
      console.log("time expired");
    }
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [state.timer]);
  return (
    <>
      <div className="timer">{state.timer} </div>
    </>
  );
};

export default CountDown;
