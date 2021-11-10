import {combineReducers} from 'redux';
import episode from './episode.reducer';
import character from './character.reducer';

export default combineReducers({
  episode,
  character,
});
