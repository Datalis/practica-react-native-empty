import { ActionTypes } from "../constants/expense";

export function saveExpense(expense) {
  return {
    type: ActionTypes.SAVE_EXPENSE,
    expense: expense
  };
}

export function deleteExpense(expense) {
  return {
    type: ActionTypes.DELETE_EXPENSE,
    expense: expense
  };
}