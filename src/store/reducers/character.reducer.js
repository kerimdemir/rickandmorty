import * as keys from '../keys/character.keys';

const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case keys.GET_CHARACTER_PENDING:
      return {
        ...state,
        error: action.payload,
        fetching: true,
      };
    case keys.GET_CHARACTER_FULFILLED:
      return {
        ...state,
        character: action.payload,
        fetching: false,
      };
    case keys.GET_CHARACTER_REJECTED:
      return {
        ...state,
        error: action.payload,
        fetching: false,
      };

    default:
      return state;
  }
};
