import { CORRECTS, WRONGS, NO_ANSWERS } from "../Reducers/_types";

const reducer = (state, action) => {
  switch (action.type) {
    case CORRECTS:
      return { ...state, corrects: state.corrects + 1 };

    case WRONGS:
      return { ...state, wrongs: state.wrongs + 1 };

    case NO_ANSWERS:
      return { ...state, no_answers: state.no_answers + 1 };

      case RESETSCORE:
        return { ...state, no_answers: state.no_answers + 1 };
  
    default:
      return state;
  }
};

export default reducer;
