import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import LogoImage from '../../assets/celipa-icon.png';
import LogoText from '../../assets/celipa-text.png';

export default function CelipaLogo() {
  return (
    <View style={styles.icon}>
      <Image source={LogoImage} />
      <Image source={LogoText} />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 31.15,
    height: 31.14,
    top: 41.37
    //position: 'absolute'
  }
});
