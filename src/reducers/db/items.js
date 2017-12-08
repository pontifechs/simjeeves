import {RECEIVE_CHARACTER} from "../../actions/armory/characters";
import {combineReducers} from "redux";
import {Item} from "../../concepts/Item";
import Slot from "../../concepts/Slot";

const byKeyExampleState = {
  "147016.925.[1507,1808,3336,3562]" : {
    "id": "<guidA>",
    "owner" : "us.azuremyst.magicnumber",
    "slot" : "trinket",
    "wowId": 147016,
    "name": "Terror From Below",
    "icon": "trade_archaeology_sharkjaws",
    "quality": 4,
    "itemLevel": 925,
    "tooltipParams": {
      "gem0": 151583,
      "timewalkerLevel": 110
    },
    "stats": [{
      "stat": 32,
      "amount": 1296
    }],
    "bonusLists": [3562, 1808, 1507, 3336],
  },
  // "147016.930.[1507,1808,3336,3562]" : { ... }
};

const extractItemsFromArmory = (state, action) => {
  let cleanItems = [];
  let owner = action.characterKey;

  for (let slot of Slot.values()) {
    let json = action.json.items[slot];
    if (!json) {
      continue;
    }
    let item = new Item(owner, slot, json);
    // Already seen it
    if (item.equalitySlug in state) {
      continue;
    }
    cleanItems.push(item);
  }
  return cleanItems;
};


// For now we'll listen to the armory receive event. This may need to change.
export const byKey = (state = {}, action) => {
  switch (action.type) {

    // Snag the items that come in from the armory.
    case RECEIVE_CHARACTER:
      let items = extractItemsFromArmory(state, action);
      let cleanState = {...state};

      for (let item of items) {
        cleanState[item.equalitySlug] = item;
      }

      return cleanState;
    default:
      return state;
  }
};

export const items = combineReducers({
  byKey: byKey,
});

