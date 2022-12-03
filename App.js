/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import ExpenseNavigator from './src/navigation/ExpenseNavigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <ExpenseNavigator />
    </NavigationContainer>
  );
};

export default App;
