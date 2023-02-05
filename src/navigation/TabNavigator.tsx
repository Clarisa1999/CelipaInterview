import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import ReceiptsScreen from '../screens/ReceiptsScreen';
import { TabParamList } from './types';
import ReceiptLight from '../../assets/receipt-light.png';
import ReceiptDark from '../../assets/receipt-dark.png';
import Home from '../../assets/home-icon.png';
import NewReceipt from '../../assets/new-receipt.png';
import ProfileLight from '../../assets/profile-light.png';
import ProfileDark from '../../assets/profile-dark.png';

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen
        name="Receipts"
        component={ReceiptsScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={ReceiptDark} style={styles.icon} />
            ) : (
              <Image source={ReceiptLight} style={styles.icon} />
            )
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={NewReceipt} style={styles.icon} />
            ) : (
              <Image source={Home} style={styles.icon} />
            )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={ProfileDark} style={styles.icon} />
            ) : (
              <Image source={ProfileLight} style={styles.icon} />
            )
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  }
});
