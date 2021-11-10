import * as keys from '../keys/character.keys';
import ApiService from '../../services/ApiService';

export const fetchCharacter = id => dispatch => {
  dispatch({
    type: keys.GET_CHARACTER_PENDING,
    payload: '',
  });
  ApiService.getCharacter(id)
    .then(response => {
      dispatch({
        type: keys.GET_CHARACTER_FULFILLED,
        payload: response.data,
      });
    })
    .catch(error => {
      dispatch({
        type: keys.GET_CHARACTER_REJECTED,
        payload: error,
      });
    });
};
