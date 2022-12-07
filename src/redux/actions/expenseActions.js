import {ActionTypes} from '../constants/expenseTypes';
import {createDoc, getDocs} from '../../db/db';

export function addExpense(item) {
  return async (dispatch, getState) => {
    await createDoc({...item, totalVal: parseFloat(item.totalVal)});
    return dispatch({
      type: ActionTypes.ADD_EXPENSE,
      data: item,
    });
  };
}

export function updateExpenses(db) {
  return async (dispatch, getState) => {
    let expenses = await getDocs();
    dispatch({
      type: ActionTypes.UPDATE_EXPENSES,
      data: expenses,
    });
  };
}
