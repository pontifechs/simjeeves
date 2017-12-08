import { combineReducers } from "redux";
import {RECEIVE_REALMS} from "../../actions/armory/realms";

export const US = (state = [], action) => {
  switch (action.type)
  {
    case RECEIVE_REALMS:
      if (action.region === "US")
      {
        return action.json;
      }
      else
      {
        return state;
      }
    default:
      return state;
  }
};

export const EU = (state = [], action) => {
  switch (action.type)
  {
    case RECEIVE_REALMS:
      if (action.region === "EU")
      {
        return action.json;
      }
      else
      {
        return state;
      }
    default:
      return state;
  }
};

export const KR = (state = [], action) => {
  switch (action.type)
  {
    case RECEIVE_REALMS:
      if (action.region === "KR")
      {
        return action.json;
      }
      else
      {
        return state;
      }
    default:
      return state;
  }
};

export const TW = (state = [], action) => {
  switch (action.type)
  {
    case RECEIVE_REALMS:
      if (action.region === "TW")
      {
        return action.json;
      }
      else
      {
        return state;
      }
    default:
      return state;
  }
};

export const realms = combineReducers({
  US: US,
  EU: EU,
  KR: KR,
  TW: TW
});