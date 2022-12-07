 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   View,
   StatusBar,
 } from 'react-native';
 import { ListItem } from 'react-native-elements';
 import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
 
// import data from '../data/dataExpenses';
 // import Expense from './components/Expense';
 
 const Expense = (props) => {
   const {numDoc, providerRuc, totalVal} = props.item;
   return (
       <View>
         <ListItem
           title={numDoc}
           subtitle={providerRuc}
           rightTitle={totalVal}
           onPress={()=>{
             props.navigation.navigate('ExpensesDetail', {item: props.item})
           }}
         />
       </View>
   )
   }
 
 const ExpenseList = ({expenses, navigation}) => {
   return (
     <>
       <StatusBar barStyle="dark-content" />
       <SafeAreaView>
         <ScrollView
           contentInsetAdjustmentBehavior="automatic"> 
           <FlatList
             data={expenses}
             renderItem={({item})=>(<Expense item={item} navigation={navigation}/>)}
             keyExtractor={(item, idx) => idx} />
         </ScrollView>
       </SafeAreaView>
     </>
   );
 };
 
 
const mapStateToProps = state => {
  const {expenseReducer} = state;
  return {
    expenses: expenseReducer.expenses,
  };
};
export default connect(mapStateToProps)(ExpenseList);
 
//  export default ExpenseList;
 