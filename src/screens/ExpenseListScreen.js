import React from 'react';
import {FlatList, View} from 'react-native';

import {ListItem} from 'react-native-elements';
import {connect} from 'react-redux';
import ActionButton from 'react-native-action-button';

const ExpenseItem = ({item}) => {
  return <ListItem title={item.numDoc} rightTitle={item.totalVal} />;
};

const ExpenseListScreen = ({expenses, navigation}) => {
  const goToForm = () => navigation.navigate('ExpenseForm');
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={expenses}
        keyExtractor={item => item.numDoc}
        renderItem={ExpenseItem}
      />

      <ActionButton
        buttonColor="rgba(231,76,60,1)"
        onPress={() => {

            goToForm();
        }}
      />
    </View>
  );
};
const mapStateToProps = state => {
  const {expenseReducer} = state;
  return {
    expenses: expenseReducer.expenses,
  };
};
export default connect(mapStateToProps)(ExpenseListScreen);
