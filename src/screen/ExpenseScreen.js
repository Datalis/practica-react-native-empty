import React from 'react';
import { useEffect } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
// import { FAB } from 'react-native-paper';
import ExpenseList from '../components/ExpenseList';



const ExpenseScreen = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.navigate('ExpensesForm', {item: {}})} title="  +  " />
      ),
    });
  }, [navigation]);

  return (
    <>
      <View> 
          <ExpenseList navigation={navigation}/>
      </View>
    </>
  );
};


export default ExpenseScreen;
