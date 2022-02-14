import score from "./score";
import options from "./options";

const combineReducers = (...reducers) => (state, action) =>
  reducers.reduce((acc, nextReducer) => nextReducer(acc, action), state);

const reducers = combineReducers(options, score);
export default reducers;
