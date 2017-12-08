
import {combineReducers} from 'redux';
import {realms} from './realms';
import characters, * as fromCharacters from "./characters";


const armory = combineReducers({
  realms: realms,
  characters: characters
});
export default armory;

export const getCharacter = (armory, characterKey) => {
  return fromCharacters.getCharacter(armory.characters, characterKey);
};