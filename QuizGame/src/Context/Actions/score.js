import { WRONGS, CORRECTS, NO_ANSWERS, RESET_SCORE } from "../Reducers/_types";

const actions = (dispatch) => {
  const wrongAnswers = () => {
    dispatch({ type: WRONGS });
  };

  const correctAnswers = () => {
    dispatch({ type: CORRECTS });
  };

  const noAnswers = () => {
    dispatch({ type: NO_ANSWERS });
  };

  const resetScore = () => {
    dispatch({ type: RESET_SCORE });
  };

  return {
    wrongAnswers,
    correctAnswers,
    noAnswers,
    resetScore,
  };
};

export default actions;
