import React from 'react';
import {FlatList, View, Text} from 'react-native';
import expenses from '../data/expenses';
import {ListItem} from 'react-native-elements';

const Item = ({item, navigation}) => {
  return (
    <ListItem
      title={item.numDoc}
      subtitle={item.providerRuc}
      rightTitle={item.totalVal}
      onPress={() => {
        console.log('dio click');
        navigation.navigate('ExpenseDetails');
      }}
    />
  );
};

const ExpenseList = ({navigation}) => {
  const renderItem = ({item}) => {
    return <Item item={item} navigation={navigation} />;
  };

  return (
    <FlatList
      data={expenses}
      renderItem={({item}) => <Item item={item} navigation={navigation} />}
      keyExtractor={(item, index) => item.numDoc}
    />
  );
};

export default ExpenseList;
