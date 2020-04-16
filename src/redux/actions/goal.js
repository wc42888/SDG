import {getGoals, showNetworkError} from '../../lib';

export const GET_GOALS_REQUEST = 'GET_GOALS_REQUEST';
export const GET_GOALS_SUCCESS = 'GET_GOALS_SUCCESS';
export const GET_GOALS_FAILURE = 'GET_GOALS_FAILURE';

export const getAllGoals = () => async (dispatch) => {
  try {
    dispatch({type: GET_GOALS_REQUEST});
    const {data: goals} = await getGoals();
    dispatch({type: GET_GOALS_SUCCESS, payload: {goals}});
  } catch (error) {
    showNetworkError(error);
    dispatch({type: GET_GOALS_FAILURE});
  }
};
