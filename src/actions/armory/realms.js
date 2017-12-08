const blizzard = require('blizzard.js').initialize({ apikey: "y6mmtcjmcspj5582bncfdbbntep5ykjx"});


export const RECEIVE_REALMS = 'RECEIVE_REALMS';

export const receiveRealms = (region, json) => {
  return {
    type: RECEIVE_REALMS,
    region: region,
    json: json
  }
};

function shouldRequestRealms(state, region) {
  return state.armory.realms[region].length === 0;
}

export const requestRealmsIfNeeded = (region) => {
  return function (dispatch, getState) {
    if (shouldRequestRealms(getState(), region))
    {
      return blizzard.wow.realms({"locale": region})
      // TODO:: Error handling
        .then(response => response.data)
        .then(json => dispatch(receiveRealms(region, json))
        )
    }
    else
    {
      return Promise.resolve();
    }
  }
};