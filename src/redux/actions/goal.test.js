import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as api from '../../lib/api';
import * as goalActions from './goal';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../../lib/api', () => ({
  getGoals: jest.fn(),
}));

describe('test goals actions', () => {
  let store;
  beforeEach(() => {
    store = mockStore();
  });

  it(`should dispatch ${goalActions.GET_GOALS_REQUEST} on request`, () => {
    return store.dispatch(goalActions.getAllGoals()).then(() => {
      const expectedAction = {
        type: goalActions.GET_GOALS_REQUEST,
      };

      const action = store.getActions()[0];

      expect(action).toEqual(expectedAction);
    });
  });

  it(`should dispatch ${goalActions.GET_GOALS_SUCCESS} on success`, () => {
    const mockData = {};
    const mockResult = {data: mockData};
    api.getGoals.mockImplementationOnce(() => Promise.resolve(mockResult));

    return store.dispatch(goalActions.getAllGoals()).then(() => {
      const expectedAction = {
        type: goalActions.GET_GOALS_SUCCESS,
        payload: {goals: mockData},
      };

      const action = store.getActions()[1];

      expect(action).toEqual(expectedAction);
    });
  });

  it(`should dispatch ${goalActions.GET_GOALS_FAILURE} on failure`, () => {
    api.getGoals.mockImplementationOnce(() =>
      Promise.reject(Error({response: {}})),
    );

    return store.dispatch(goalActions.getAllGoals()).then(() => {
      const expectedAction = {
        type: goalActions.GET_GOALS_FAILURE,
      };

      const action = store.getActions()[1];

      expect(action).toEqual(expectedAction);
    });
  });
});
