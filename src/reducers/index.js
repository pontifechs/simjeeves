import {combineReducers} from 'redux';

import {simExecution} from "./simExecution";
import armory, * as fromArmory from "./armory";
import db from "./db";

const rootReducer = combineReducers({
  simExecution: simExecution,
  armory: armory,
  db: db
});

export default rootReducer;

export const getCharacter = (state, characterKey) => {
  return fromArmory.getCharacter(state.armory, characterKey);
};
