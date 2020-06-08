import React from 'react';
import {FlatList, View} from 'react-native';
import expenses from '../../data/groupedExpenses';
import {ListItem} from 'react-native-elements';
import ActionButton from 'react-native-action-button';

const Item = props => {
  return (
    <ListItem
      title={props.item.label}
      rightTitle={props.item.total}
      leftAvatar={{source: require('../../assets/images/alimentacion.png')}}
      onPress={() => {
        props.navigation.navigate('Expenses');
      }}
    />
  );
};

const HomeScreen = props => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={expenses}
        renderItem={item => (
          <Item item={item.item} navigation={props.navigation} />
        )}
      />
      <ActionButton
        buttonColor="rgba(231,76,60,1)"
        onPress={() => {
          props.navigation.navigate('ExpenseForm');
        }}
      />
    </View>
  );
};

export default HomeScreen;
