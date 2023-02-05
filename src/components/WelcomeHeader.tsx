import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import defaultImage from '../../assets/defaultIcon.png';

type Props = {
  name: String;
};

export default function WelcomeHeader({ name }: Props) {
  return (
    <View style={sytles.container}>
      <Image source={defaultImage} style={sytles.imageStyling} />
      <Text style={sytles.welcomeText}>Welcome Back, {name}</Text>
    </View>
  );
}

const sytles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 382,
    height: 100,
    backgroundColor: '#ffff',
    borderColor: 'grey',
    borderRadius: 12,
    borderWidth: 0.5
  },
  welcomeText: {
    display: 'flex',
    alignContent: 'center',
    color: '#219AF4',
    fontStyle: 'normal',
    fontSize: 40,
    alignItems: 'center',
    lineHeight: 40.22,
    fontWeight: '600'
  },
  imageStyling: {
    width: 64,
    height: 64,
    borderRadius: 50,
    backgroundColor: 'blue'
  }
});
