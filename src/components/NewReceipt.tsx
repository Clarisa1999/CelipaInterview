import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import icon from '../../assets/new-receipt.png';

export default function NewReceipt({ onPress }: { onPress: () => void }) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
        <Image source={icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 12,
    width: 48
  }
});
