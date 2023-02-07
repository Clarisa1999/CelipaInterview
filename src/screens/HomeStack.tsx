import { View, Text } from 'react-native';
import React from 'react';
import { HomeParamList } from '../navigation/types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import AddReceipt from './AddReceipt';
import ViewMore from './ViewMore';
import JoinReceipt from './JoinReceipt';
import { TransitionPresets } from '@react-navigation/stack';

const Stack = createNativeStackNavigator<HomeParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Feed"
      screenOptions={{
        headerTransparent: true,
        headerTintColor: 'transparent'
      }}
    >
      <Stack.Screen name="Feed" component={HomeScreen} />
      <Stack.Screen
        name="AddReceipt"
        component={AddReceipt}
        options={{ headerShown: false, presentation: 'modal' }}
      />
      <Stack.Screen
        name="JoinReceipt"
        component={JoinReceipt}
        options={{ headerShown: false, presentation: 'modal' }}
      />
      <Stack.Screen name="ViewMore" component={ViewMore} />
    </Stack.Navigator>
  );
}
