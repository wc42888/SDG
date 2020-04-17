import {getTargets, showNetworkError} from '../../lib';

export const GET_TARGETS_REQUEST = 'GET_TARGETS_REQUEST';
export const GET_TARGETS_SUCCESS = 'GET_TARGETS_SUCCESS';
export const GET_TARGETS_FAILURE = 'GET_TARGETS_FAILURE';

export const getAllTargets = (goalCode) => async (dispatch) => {
  try {
    dispatch({type: GET_TARGETS_REQUEST});
    const {data} = await getTargets(goalCode);
    const {targets} = data[0];
    dispatch({type: GET_TARGETS_SUCCESS, payload: {targets}});
  } catch (error) {
    showNetworkError(error);
    dispatch({type: GET_TARGETS_FAILURE});
  }
};
