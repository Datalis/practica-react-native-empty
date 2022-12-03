import React from 'react';
import ExpenseList from '../components/ExpenseList';

const ExpensesScreen = ({navigation}) => {
  // console.log(navigation)
  return <ExpenseList navigation={navigation} />;
};

export default ExpensesScreen;
