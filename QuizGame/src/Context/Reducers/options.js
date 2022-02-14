import { CHOSEN_OPTION, OPTION_IS_SELECTED } from "../Reducers/_types";

const reducer = (state, action) => {
  switch (action.type) {
    case CHOSEN_OPTION:
      return { ...state, chosen_option: action.payload };

    case OPTION_IS_SELECTED:
      return { ...state, option_is_selected: action.payload };

    default:
      return state;
  }
};

export default reducer;
