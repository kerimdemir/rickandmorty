import * as keys from '../keys/episode.keys';
import ApiService from '../../services/ApiService';

export const fetchEpisodeList = () => dispatch => {
  dispatch({
    type: keys.GET_EPISODE_LIST_PENDING,
    payload: '',
  });
  ApiService.getEpisodeList()
    .then(response => {
      dispatch({
        type: keys.GET_EPISODE_LIST_FULFILLED,
        payload: response.data.results,
      });
    })
    .catch(error => {
      dispatch({
        type: keys.GET_EPISODE_LIST_REJECTED,
        payload: error,
      });
    });
};

export const fetchEpisode = id => dispatch => {
  dispatch({
    type: keys.GET_EPISODE_PENDING,
    payload: '',
  });
  ApiService.getEpisode(id)
    .then(response => {
      dispatch({
        type: keys.GET_EPISODE_FULFILLED,
        payload: response.data,
      });
    })
    .catch(error => {
      dispatch({
        type: keys.GET_EPISODE_REJECTED,
        payload: error,
      });
    });
};
