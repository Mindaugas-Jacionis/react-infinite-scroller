import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

const initialState = Immutable({
  fetching: false,
  errorMessage: false,
  shots: {},
  page: 0,
});

export default function login(state = initialState, action = {}) {
  const { payload = {}, type } = action;

  switch (type) {
    case types.SHOTS:
      return Object.assign({}, state, {
        fetching: true,
      });
    case types.SHOTS_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        errorMessage: false,
        shots: Object.assign({}, state.shots, payload),
      });
    case types.SHOTS_FAILURE:
      return Object.assign({}, state, {
        fetching: false,
        errorMessage: 'Something went wrong while fetching shots',
      });

    default:
      return state;
  }
}
