import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

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
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    width: 150,
    height: 80,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: 'grey'
  },
  value: {
    color: '#AF4E8E',
    fontSize: 32,
    fontFamily: 'Source Sans Pro',
    fontWeight: '600'
  },
  description: {
    color: '#333333'
  }
});
