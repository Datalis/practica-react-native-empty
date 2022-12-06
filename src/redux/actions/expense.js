import { ActionTypes } from "../constants/expense";

export function saveExpense(expense) {
  return {
    type: ActionTypes.SAVE_EXPENSE,
    expense: expense
  };
}