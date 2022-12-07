import {ActionTypes} from '../constants/expenseTypes';

import expenses from '../../data/expenses';

const initialState = {
  expenses: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_EXPENSE:
      console.log('ejecutaondo accion add');
      console.log('action data ', action.data)
      return {...state, expenses: [...state.expenses, action.data]};
    case ActionTypes.UPDATE_EXPENSES:
      return {...state, expenses: action.data}
    default:
      return state;
  }
};
