import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import defaultImage from '../../assets/img_avatar.png';
import { BackgroundColors, BorderColrs, TextColors } from '../utils/colors';

type Props = {
  name: String;
};

export default function WelcomeHeader({ name }: Props) {
  return (
    <View style={sytles.container}>
      <Image source={defaultImage} style={sytles.imageStyling} />
      <View>
        <Text style={sytles.welcomeText}>Welcome back, </Text>
        <Text style={sytles.welcomeText}>{name}.</Text>
      </View>
    </View>
  );
}

const sytles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    width: 382,
    height: 100,
    marginTop: -50,
    backgroundColor: BackgroundColors.Primary,
    borderColor: BorderColrs.Primary,
    borderRadius: 12,
    borderWidth: 0.2
  },
  welcomeText: {
    color: TextColors.Primary,
    fontSize: 34,
    lineHeight: 40.22,
    fontWeight: '600'
  },
  imageStyling: {
    width: 64,
    height: 64,
    borderRadius: 50,
    marginHorizontal: 16,
    backgroundColor: 'grey'
  }
});
