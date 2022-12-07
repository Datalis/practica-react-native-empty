import data from '../../data/dataExpenses';
import { ActionTypes } from '../constants/expense';


const initialState = {
  expenses: data.expenses,
  nextId: data.nextId
};
export default (state = initialState, action) => {
  let expenses;
  switch (action.type) {
    case ActionTypes.SAVE_EXPENSE:
      expenses = [...state.expenses]
      if(action.expense.id){
        expenses = expenses.map(e=>e.id==action.expense.id?action.expense:e)
      }
      else{
        action.expense.id = state.nextId;
        expenses.push(action.expense)
      }
      return {...state, nextId: state.nextId+1, expenses} // retornar copia del estado cambiado
    case ActionTypes.DELETE_EXPENSE:
      expenses = [ ...state.expenses ];
      expenses = expenses.filter((e)=>e.id!=action.expense.id);

      return {...state, expenses: expenses} // retornar copia del estado cambiado
    
      default:
      return state;
  }
};