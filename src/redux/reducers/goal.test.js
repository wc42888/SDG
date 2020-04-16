import {GET_GOALS_SUCCESS} from '../actions';
import goalReducer from './goal';

describe('test goal reducer', () => {
  it('should return the correct goals', () => {
    const goals = [{id: 1}, {id: 2}, {id: 3}];
    const newState = goalReducer([], {
      type: GET_GOALS_SUCCESS,
      payload: {goals},
    });
    expect(newState).toEqual(goals);
  });
});
