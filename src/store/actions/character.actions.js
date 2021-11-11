import * as keys from '../keys/character.keys';
import ApiService from '../../services/ApiService';

export const fetchCharacter = url => dispatch => {
  dispatch({
    type: keys.GET_CHARACTER_PENDING,
    payload: '',
  });
  ApiService.getCharacter(url)
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
