import {combineReducers} from 'redux';
import goal from './goal';
import loading from './loading';
import target from './target';

const rootReducer = combineReducers({goal, loading, target});

export default rootReducer;
