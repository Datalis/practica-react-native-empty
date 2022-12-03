import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ExpensesScreen from '../screens/ExpensesScreen';
import ExpenseDetailScreen from '../screens/ExpenseDetailScreen';

const Stack = createStackNavigator();

function ExpenseNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Expenses" component={ExpensesScreen} />
      <Stack.Screen name="ExpenseDetails" component={ExpenseDetailScreen} />
    </Stack.Navigator>
  );
}

export default ExpenseNavigator;
