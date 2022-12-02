import {ActionTypes} from '../constants/expenseTypes';

export function addExpense(item) {
  return {
    type: ActionTypes.ADD_EXPENSE,
    data: item,
  };
}
