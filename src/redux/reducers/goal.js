import {GET_GOALS_SUCCESS} from '../actions';

const initialState = [];

const goalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GOALS_SUCCESS:
      return action.payload.goals;
    default:
      return state;
  }
};

export default goalReducer;
