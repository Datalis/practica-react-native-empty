// In App.js in a new project

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ExpensesScreen from '../screens/ExpensesScreen';
import ExpenseForm from '../screens/ExpenseForm';
import HomeTabs from './HomeTabs';

const Stack = createStackNavigator();

function ExpensesNavigator() {
  return (
    <Stack.Navigator initialRouteName="HomeTabs">
      <Stack.Screen name="HomeTabs" options={{headerShown: false}} component={HomeTabs} />
      <Stack.Screen name="Expenses" component={ExpensesScreen} />
      <Stack.Screen name="ExpenseForm" component={ExpenseForm} />
    </Stack.Navigator>
  );
}

export default ExpensesNavigator;
