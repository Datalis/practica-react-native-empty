import React, {Component} from 'react';
import Drawer from './src/navigation/Drawer';
import {View} from 'react-native';
import ExpenseListScreen from './src/screens/ExpenseListScreen';
import ExpensesNavigator from './src/navigation/ExpensesNavigator';
import {NavigationContainer} from '@react-navigation/native';

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <ExpensesNavigator />
      </NavigationContainer>
    );
  }
}

export default App;
