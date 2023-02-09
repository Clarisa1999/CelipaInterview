import { View, Text } from 'react-native';
import React from 'react';
import { BackgroundColors, TextColors } from '../utils/colors';

export default function JoinReceipt() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: BackgroundColors.Primary,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text style={{ color: TextColors.Primary, fontSize: 20 }}>
        This screen has not been Implemented
      </Text>
    </View>
  );
}
