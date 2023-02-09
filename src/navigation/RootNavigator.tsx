import { View, Text, ActivityIndicator } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootParamList } from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TabNavigator from './TabNavigator';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator<RootParamList>();

export default function RootNavigator() {
  const [name, setName] = React.useState<string>();

  React.useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('name');
        if (value !== null) {
          // value previously stored
          setName(value);
        }
      } catch (e) {}
    };
    getData();
  }, []);

  return name ? (
    <TabNavigator />
  ) : (
    <Stack.Navigator id="Root">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
