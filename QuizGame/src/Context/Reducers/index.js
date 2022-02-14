import score from "./score";
import options from "./options";
import time from "./time";

const combineReducers = (...reducers) => (state, action) =>
  reducers.reduce((acc, nextReducer) => nextReducer(acc, action), state);

const reducers = combineReducers(options, score, time);
export default reducers;
