import React, { useEffect, useContext } from "react";
import { StateContext } from "../Context/Providers/State";

const Options = () => {
  const { state, actions } = useContext(StateContext);

  useEffect(() => {
    let interval;
    if (state.timer > 0) {
      interval = setInterval(() => {
        actions.time.setTimer(state.timer - 1);
      }, 1000);
    }
    if (state.timer === 0) {
      clearInterval(interval);
      actions.time.setTimeExpired(true);
      console.log("time expired");
    }
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [state.timer]);
  return (
    <>
      halooo
      <h4>time {state.timer} </h4>
    </>
  );
};

export default Options;
