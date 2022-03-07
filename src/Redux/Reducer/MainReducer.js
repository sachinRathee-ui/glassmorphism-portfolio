import { combineReducers } from 'redux';
import { Reducer } from './Reducer';

const MainReducer = combineReducers({
	modal: Reducer,
});

export default MainReducer;
