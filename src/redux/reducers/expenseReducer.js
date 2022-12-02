import {ActionTypes} from '../constants/expenseTypes';

import expenses from '../../data/expenses';

const initialState = {
  expenses: expenses,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_EXPENSE:
      console.log('ejecutaondo accion add');
      return {...state, expenses: [...state.expenses, action.data]};
    default:
      return state;
  }
};
