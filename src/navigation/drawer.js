import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import ExpensesNavigator from './ExpensesNavigator';
import HomeTabs from './HomeTabs';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="ExpensesNavigator">
        <Drawer.Screen
          name="ExpensesNavigator"
          component={ExpensesNavigator}
        />
        <Drawer.Screen name="Categorias" component={ExpensesNavigator} />
        {/*<Drawer.Screen name="Cuentas" component={ExpensesNavigator} />*/}
        {/*<Drawer.Screen name="Ingresos" component={ExpensesNavigator} />*/}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
