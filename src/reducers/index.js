import { combineReducers } from "redux";
import notes from './reducer_notePad';

const rootReducer = combineReducers({
  notes: notes,
});

export default rootReducer;
