import { TIMER, TIME_EXPIRED } from "../Reducers/_types";

const actions = (dispatch) => {
  const setTimer = (time) => {
    dispatch({ type: TIMER, payload: time });
  };

  const setTimeExpired = (timeExpired) => {
    dispatch({ type: TIME_EXPIRED, payload: timeExpired });
  };

  return {
    setTimer,
    setTimeExpired,
  };
};

export default actions;
