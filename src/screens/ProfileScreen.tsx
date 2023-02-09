import { View, Text, SafeAreaView, Button, Alert } from 'react-native';
import React from 'react';
import { TextColors } from '../utils/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackScreenProps } from '@react-navigation/stack';
import { HomeParamList, TabParamList } from '../navigation/types';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export default function ProfileScreen({
  navigation
}: BottomTabScreenProps<TabParamList>) {
  const onPress = async () => {
    await AsyncStorage.clear();
    navigation.getParent()?.navigate('Login');
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Button title="Logout" onPress={onPress} />
    </SafeAreaView>
  );
}
