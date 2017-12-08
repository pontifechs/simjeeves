import {items} from "./items";
import combineReducers from "redux/es/combineReducers";


const db = combineReducers({
  items: items
});

export default db;