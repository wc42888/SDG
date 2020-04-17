import {GET_TARGETS_SUCCESS} from '../actions';

const initialState = [];

const goalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TARGETS_SUCCESS:
      return action.payload.targets;
    default:
      return state;
  }
};

export default goalReducer;
