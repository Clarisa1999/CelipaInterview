import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { BackgroundColors } from '../utils/colors';

export default function ReceiptsScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: BackgroundColors.Primary,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    ></SafeAreaView>
  );
}
