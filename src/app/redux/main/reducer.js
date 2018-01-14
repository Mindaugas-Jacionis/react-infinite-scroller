import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

const initialState = Immutable({
  fetching: false,
  errorMessage: false,
  shots: [],
  page: 0,
});

export default function login(state = initialState, action = {}) {
  const { payload = {}, type, page } = action;

  switch (type) {
    case types.SHOTS:
      return Object.assign({}, state, {
        fetching: true,
      });
    case types.SHOTS_SUCCESS: {
      const newData = payload.map(item => ({
        id: item.id,
        title: item.title,
        url: item.html_url,
        img: item.images.teaser,
      }));

      return Object.assign({}, state, {
        fetching: false,
        errorMessage: false,
        page,
        shots: state.shots.concat(
          newData.filter(
            shot => !state.shots.find(loaded => loaded.id === shot.id)
          )
        ),
      });
    }
    case types.SHOTS_FAILURE:
      return Object.assign({}, state, {
        fetching: false,
        errorMessage: 'Something went wrong while fetching shots',
      });

    default:
      return state;
  }
}
