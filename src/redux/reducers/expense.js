
import expenses from '../../data/dataExpenses';
import { ActionTypes } from '../constants/expense';

const initialState = {
  expenses,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SAVE_EXPENSE:
      return {...state, expenses: [...state.expenses, action.expense]} // retornar copia del estado cambiado
    default:
      return state;
  }
};