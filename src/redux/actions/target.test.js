import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as api from '../../lib/api';
import * as targetActions from './target';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../../lib/api', () => ({
  getTargets: jest.fn(),
}));

describe('test targets actions', () => {
  let store;
  beforeEach(() => {
    store = mockStore();
  });

  it(`should dispatch ${targetActions.GET_TARGETS_REQUEST} on request`, () => {
    return store.dispatch(targetActions.getAllTargets()).then(() => {
      const expectedAction = {
        type: targetActions.GET_TARGETS_REQUEST,
      };

      const action = store.getActions()[0];

      expect(action).toEqual(expectedAction);
    });
  });

  it(`should dispatch ${targetActions.GET_TARGETS_SUCCESS} on success`, () => {
    const mockData = [{targets: []}];
    const mockResult = {data: mockData};
    api.getTargets.mockImplementationOnce(() => Promise.resolve(mockResult));

    return store.dispatch(targetActions.getAllTargets()).then(() => {
      const expectedAction = {
        type: targetActions.GET_TARGETS_SUCCESS,
        payload: {targets: []},
      };

      const action = store.getActions()[1];

      expect(action).toEqual(expectedAction);
    });
  });

  it(`should dispatch ${targetActions.GET_TARGETS_FAILURE} on success`, () => {
    api.getTargets.mockImplementationOnce(() =>
      Promise.reject(Error({response: {}})),
    );

    return store.dispatch(targetActions.getAllTargets()).then(() => {
      const expectedAction = {
        type: targetActions.GET_TARGETS_FAILURE,
      };

      const action = store.getActions()[1];

      expect(action).toEqual(expectedAction);
    });
  });
});
