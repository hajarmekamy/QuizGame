import { CHOSEN_OPTION, OPTION_IS_SELECTED } from "../Reducers/_types";

const actions = (dispatch) => {
  const setChosenOption = (chosenOption) => {
    dispatch({ type: CHOSEN_OPTION, payload: chosenOption });
  };

  const setOptionIsSelected = (optionIsSelected) => {
    dispatch({ type: OPTION_IS_SELECTED, payload: optionIsSelected });
  };

  return {
    setChosenOption,
    setOptionIsSelected,
  };
};

export default actions;
