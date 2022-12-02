import {createStore, combineReducers, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import expenseReducer from './reducers/expenseReducer';

const appReducer = combineReducers({
  expenseReducer,
});

const store = createStore(appReducer, applyMiddleware(reduxThunk));
export default store;
