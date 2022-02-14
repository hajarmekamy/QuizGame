import { CORRECTS, WRONGS, NO_ANSWERS, RESET_SCORE } from "../Reducers/_types";
import initialState from "../Providers/InitialState";

const reducer = (state, action) => {
  switch (action.type) {
    case CORRECTS:
      return { ...state, corrects: state.corrects + 1 };

    case WRONGS:
      return { ...state, wrongs: state.wrongs + 1 };

    case NO_ANSWERS:
      return { ...state, no_answers: state.no_answers + 1 };

    case RESET_SCORE:
      return initialState;

    default:
      return state;
  }
};

export default reducer;
