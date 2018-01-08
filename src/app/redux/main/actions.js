import * as types from './actionTypes';
import { ACCESS_TOKEN } from '../../../Constants';

export function fetchShots(page) {
  const query = `page=${page}&per_page=30&access_token=${ACCESS_TOKEN}`;

  return {
    types: [types.SHOTS, types.SHOTS_SUCCESS, types.SHOTS_FAILURE],
    api: api => api(`/shots?${query}`),
    page,
  };
}
