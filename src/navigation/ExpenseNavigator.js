import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import ExpenseDetail from "../screen/ExpenseDetail";
import ExpenseScreen from "../screen/ExpenseScreen";
// import { Button } from 'react-native-elements';
import ExpenseForm from '../screen/ExpenseForm';

const Stack = createStackNavigator();

const ExpenseNavigator = (props) =>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="Expenses" component={ExpenseScreen} options={({ navigation, route }) => ({
                headerTitle: 'Gastos',
            })}/>
            <Stack.Screen name="ExpensesDetail" component={ExpenseDetail} options={({ navigation, route }) => ({
                headerTitle: 'Detalle de Gasto',
            })}/>
            <Stack.Screen name="ExpensesForm" component={ExpenseForm} options={({ navigation, route }) => ({
                headerTitle: 'Formulario Gasto',
            })}/>
        </Stack.Navigator>
    )
}

export default ExpenseNavigator;