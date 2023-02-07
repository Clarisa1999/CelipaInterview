import { View, Text } from 'react-native';
import React from 'react';
import { TextColors } from '../utils/colors';

export default function ViewMore() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
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
