import * as React from 'react';
import HistoryScreen from '../screens/Tabs/HistoryScreen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/Tabs/HomeScreen';
import {StyleSheet} from 'react-native';
import {robotoWeights} from 'react-native-typography';

const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
  tabLabel: {
    ...robotoWeights.medium,
    fontSize: 16,
    textTransform: 'none',
  },
});

export default function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        style: {
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS,

        },
        activeTintColor: '#000000DE',
        inactiveTintColor: '#00000061',
        indicatorStyle: {
          backgroundColor: '#f0983c',
          width: '15%',
          height: 5,
          marginLeft: '13%',
          borderRadius: 10,
        },
        labelStyle: {...styles.tabLabel},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: 'Gastos',
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          headerTitle: 'Historial',
        }}
      />
    </Tab.Navigator>
  );
}
