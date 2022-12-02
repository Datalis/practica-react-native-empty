import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ExpensesScreen from '../screens/ExpensesScreen';
import ExpenseForm from '../screens/ExpenseForm';
import HomeTabs from './HomeTabs';
import {generalStyles} from '../styles';
import {Icon, Button} from 'react-native-elements';
import ExpenseListScreen from '../screens/ExpenseListScreen';

const Stack = createStackNavigator();

function ExpensesNavigator(props) {
  return (
    <Stack.Navigator
      initialRouteName="Expenses"
      // headerMode="screen"
      // screenOptions={{
      //   headerTitleStyle: {...generalStyles.screenTitle},
      //   headerStyle: {
      //     elevation: 0,
      //   },
      // }}
    >
      {/*<Stack.Screen*/}
      {/*  name="HomeTabs"*/}
      {/*  options={{*/}
      {/*    headerTitle: 'Inicio',*/}
      {/*    headerLeft: () => (*/}
      {/*      <Button*/}
      {/*        icon={{*/}
      {/*          name: 'menu',*/}
      {/*          size: 24,*/}
      {/*          color: 'black',*/}
      {/*        }}*/}
      {/*        type="clear"*/}
      {/*        buttonStyle={{borderRadius: 200}}*/}
      {/*        onPress={() => props.navigation.toggleDrawer()}*/}
      {/*        containerStyle={{margin: 0}}*/}
      {/*      />*/}
      {/*    ),*/}
      {/*  }}*/}
      {/*  component={HomeTabs}*/}
      {/*/>*/}
      <Stack.Screen
        name="Expenses"
        options={{
          headerTitle: 'Gastos',
        }}
        component={ExpenseListScreen}
      />
      <Stack.Screen name="ExpenseForm" component={ExpenseForm} />
    </Stack.Navigator>
  );
}

export default ExpensesNavigator;
