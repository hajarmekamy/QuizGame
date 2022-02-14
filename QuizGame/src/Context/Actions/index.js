import score from "./score";
import options from "./options";
import time from "./time";

const actions = (dispatch, value, props) => {
  return {
    score: score(dispatch, value, props),
    options: options(dispatch, value, props),
    time: time(dispatch, value, props),
  };
};

export default actions;
