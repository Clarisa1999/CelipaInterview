import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import ReceiptsScreen from '../screens/ReceiptsScreen';
import { TabParamList } from './types';
import ReceiptLight from '../../assets/receipt-light.png';
import ReceiptDark from '../../assets/receipt-dark.png';
import HomeLight from '../../assets/home-icon.png';
import HomeDark from '../../assets/home-dark.png';
import ProfileLight from '../../assets/profile-light.png';
import ProfileDark from '../../assets/profile-dark.png';
import HomeStack from '../screens/HomeStack';

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
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
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              // <Image source={NewReceipt} style={styles.icon} />
              <Image source={HomeDark} style={styles.icon} />
            ) : (
              <Image source={HomeLight} style={styles.icon} />
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
