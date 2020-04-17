import {GET_TARGETS_SUCCESS} from '../actions';
import targetReducer from './target';

describe('test target reducer', () => {
  it('should return the correct targets', () => {
    const targets = [{id: 1}, {id: 2}, {id: 3}];
    const newState = targetReducer([], {
      type: GET_TARGETS_SUCCESS,
      payload: {targets},
    });
    expect(newState).toBe(targets);
  });
});
