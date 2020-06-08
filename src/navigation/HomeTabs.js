import * as React from 'react';
import HistoryScreen from '../screens/Tabs/HistoryScreen';
import ExpensesNavigator from './ExpensesNavigator';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/Tabs/HomeScreen';

const Tab = createMaterialTopTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
    </Tab.Navigator>
  );
}
