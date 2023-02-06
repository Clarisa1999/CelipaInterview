import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { BackgroundColors, BorderColrs, TextColors } from '../utils/colors';

type Props = {
  value: number;
  description: string;
  color: string;
};

export default function MoneyCard({ value, description, color }: Props) {
  return (
    <View style={sytles.cardContainer}>
      <Text style={[sytles.value, { color: color }]}>{`$${value}`}</Text>
      <Text style={sytles.description}>{description}</Text>
    </View>
  );
}

const sytles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BackgroundColors.Primary,
    width: 180,
    height: 80,
    marginHorizontal: 8,
    borderRadius: 12,
    borderWidth: 0.2,
    borderColor: BorderColrs.Primary
  },
  value: {
    fontSize: 32,
    fontWeight: '600'
  },
  description: {
    color: TextColors.Secondary
  }
});
