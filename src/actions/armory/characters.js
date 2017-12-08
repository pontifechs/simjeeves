
const blizzard = require('blizzard.js').initialize({ apikey: "y6mmtcjmcspj5582bncfdbbntep5ykjx"});

export const RECEIVE_CHARACTER = "RECEIVE_CHARACTER";

export class CharacterKey {
  constructor(region, realm, name) {
    this.region = region;
    this.realm = realm;
    this.name = name;
  }

  get FQN() {
    let region = this.region.toLowerCase();
    let realm = this.realm.toLowerCase();
    let name = this.name.toLowerCase();

    return `${region}.${realm}.${name}`;
  }
}

export const receiveCharacter = (characterKey, json) => {
  return {
    type: RECEIVE_CHARACTER,
    characterKey: characterKey,
    json: json
  }
};

function shouldRequestCharacter(state, characterKey) {
  return !(characterKey.FQN in state.armory.characters.byName);
}

export const requestCharacter = (characterKey) => {
  return function (dispatch) {
    return blizzard.wow.character(['items', 'stats'], {"origin" : characterKey.region, "realm" : characterKey.realm, "name" : characterKey.name})
    // TODO:: Error handling
      .then(response => response.data)
      .then(json => dispatch(receiveCharacter(characterKey, json))
      );
  }
};

export const requestCharacterIfNeeded = (characterKey) => {
  return function (dispatch, getState) {
    if (shouldRequestCharacter(getState(), characterKey))
    {
      requestCharacter(characterKey);
    }
    else
    {
      return Promise.resolve();
    }
  }
};
