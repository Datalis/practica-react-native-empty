import React, {Component, useEffect} from 'react';
import ExpensesNavigator from './src/navigation/ExpensesNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {createCollection, createDbInstance, getDocs} from './src/db/db';
import {updateExpenses} from './src/redux/actions/expenseActions';
import {connect} from 'react-redux';

const App = props => {
  useEffect(() => {
    console.log('ejecutanto useEffect');
    (async () => {
      await createDbInstance();
      await createCollection();
      // const docs = await getDocs();
      props.updateExpenses();
      // console.log(docs);
    })();
  }, [props]);
  return (
    <NavigationContainer>
      <ExpensesNavigator />
    </NavigationContainer>
  );
};

export default connect(
  null,
  {updateExpenses},
)(App);
