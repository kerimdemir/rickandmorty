import * as keys from '../keys/episode.keys';

const initialState = {episodeList: []};
export default (state = initialState, action) => {
  switch (action.type) {
    case keys.GET_EPISODE_LIST_PENDING:
      return {
        ...state,
        error: action.payload,
        fetching: true,
      };
    case keys.GET_EPISODE_LIST_FULFILLED:
      return {
        ...state,
        episodeList: action.payload,
        fetching: false,
      };
    case keys.GET_EPISODE_LIST_REJECTED:
      return {
        ...state,
        error: action.payload,
        fetching: false,
      };

    case keys.GET_EPISODE_PENDING:
      return {
        ...state,
        error: action.payload,
        fetching: true,
      };
    case keys.GET_EPISODE_FULFILLED:
      return {
        ...state,
        episode: action.payload,
        fetching: false,
      };
    case keys.GET_EPISODE_REJECTED:
      return {
        ...state,
        error: action.payload,
        fetching: false,
      };

    default:
      return state;
  }
};
