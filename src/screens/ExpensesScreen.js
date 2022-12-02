import expenses from '../data/expenses';
import {FlatList, ImageBackground, Text, View, StyleSheet} from 'react-native';
import React from 'react';
import {ListItem} from 'react-native-elements';
import ActionButton from 'react-native-action-button';

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 24,
    color: 'white',
  },
  titleContainer: {
    padding: 20,
  },
  imageBackgroundStyle: {
    width: '100%',
    height: 200,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});

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
        style={styles.imageBackgroundStyle}>
        <View style={styles.titleContainer}>
          <Text style={styles.headerTitle}>{props.route.params.category}</Text>
        </View>
      </ImageBackground>
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
