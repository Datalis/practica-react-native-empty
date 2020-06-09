import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import expenses from '../../data/groupedExpenses';
import {ListItem, Divider} from 'react-native-elements';
import ActionButton from 'react-native-action-button';
import {robotoWeights} from 'react-native-typography';

const styles = StyleSheet.create({
  listItemTitle: {
    ...robotoWeights.medium,
    fontSize: 18,
    color: 'black',
  },
  listItemRightTitle: {
    ...robotoWeights.medium,
    fontSize: 16,
    color: 'black',
  },
  listItemSubtitle: {
    ...robotoWeights.regular,
    fontSize: 16,
  },
  listItemRightSubtitle: {
    ...robotoWeights.regular,
    fontSize: 15,
  },
});

const Item = props => {
  return (
    <View>
      <ListItem
        title={props.item.label}
        subtitle="5 archivos"
        rightTitle={`CUP ${props.item.total}`}
        rightSubtitle={`CUC ${props.item.total}`}
        titleStyle={styles.listItemTitle}
        rightTitleStyle={styles.listItemRightTitle}
        subtitleStyle={styles.listItemSubtitle}
        rightSubtitleStyle={styles.listItemRightSubtitle}
        leftAvatar={{source: props.item.image}}
        onPress={() => {
          props.navigation.navigate('Expenses', {category: 'Aseo'});
        }}
      />
      <Divider
        style={{
          backgroundColor: '#E3E3E3',
          width: '85%',
          alignSelf: 'flex-end',
        }}
      />
    </View>
  );
};

const HomeScreen = props => {
  return (
    <View style={{flex: 1, paddingTop: 20, backgroundColor: 'white'}}>
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
          props.navigation.navigate('ExpenseForm', {category: 'Aseo'});
        }}
      />
    </View>
  );
};

export default HomeScreen;
