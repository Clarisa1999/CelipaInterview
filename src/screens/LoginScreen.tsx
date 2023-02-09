import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootParamList } from '../navigation/types';

export default function LoginScreen({
  navigation
}: {
  navigation: StackNavigationProp<RootParamList>;
}) {
  const [name, setName] = React.useState<string>();

  const onPress = async () => {
    if (!name) {
      Alert.alert('Please enter your name');
      return;
    }
    await AsyncStorage.setItem('name', name);
    navigation.navigate('Tabs', { screen: 'Home' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Please Enter Your Name</Text>
      <TextInput value={name} onChangeText={setName} style={styles.input} />
      <Button title="Start" onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20
  },
  input: {
    borderColor: 'gray',
    width: '90%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10
  }
});
