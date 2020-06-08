import expenses from '../data/expenses';
import {FlatList, ImageBackground, View} from 'react-native';
import React from 'react';
import {ListItem} from 'react-native-elements';
import ActionButton from 'react-native-action-button';

const Item = props => {
  return (
    <ListItem title={props.item.producto.label} rightTitle={props.item.total} />
  );
};

const ExpensesScreen = props => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/images/alimentacion.png')}
        style={{width: '100%', height: 200}}
      />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={expenses}
        renderItem={item => <Item item={item.item} />}
      />
      <ActionButton
        buttonColor="rgba(231,76,60,1)"
        onPress={() => {
          console.log('hi');
        }}
      />
    </View>
  );
};

export default ExpensesScreen;
