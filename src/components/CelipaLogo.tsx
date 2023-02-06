import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import LogoImage from '../../assets/celipa-icon.png';
import LogoText from '../../assets/celipa-text.png';

export default function CelipaLogo() {
  return (
    <View style={styles.icon}>
      <Image source={LogoImage} style={{ marginRight: 2 }} />
      <Image source={LogoText} style={{ marginLeft: 2 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 80
  }
});
