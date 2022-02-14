import { TIMER, TIME_EXPIRED } from "../Reducers/_types";

const reducer = (state, action) => {
  switch (action.type) {
    case TIMER:
      return { ...state, timer: action.payload };

    case TIME_EXPIRED:
      return { ...state, time_expired: action.payload };

    default:
      return state;
  }
};

export default reducer;
