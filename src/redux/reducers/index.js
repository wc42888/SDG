import {combineReducers} from 'redux';
import goal from './goal';
import loading from './loading';

const rootReducer = combineReducers({goal, loading});

export default rootReducer;
