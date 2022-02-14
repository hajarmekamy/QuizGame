import score from "./score";
import options from "./options";

const actions = (dispatch, value, props) => {
  return {
    score: score(dispatch, value, props),
    options: options(dispatch, value, props),
  };
};

export default actions;
