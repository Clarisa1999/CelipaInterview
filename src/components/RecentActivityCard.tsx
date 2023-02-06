import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import Arrow from '../../assets/arrow.png';
import { BackgroundColors, BorderColrs, TextColors } from '../utils/colors';

type Props = {
  name: string;
  date: Date;
};

export default function RecentActivityCard({ name, date }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.first}>
        <Text style={styles.name}>{name}</Text>
        <Image source={Arrow} style={styles.arrow} />
      </View>
      <Text style={styles.date}>{date.toISOString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: 10,
    height: 80,
    width: '100%',
    marginTop: 12,
    backgroundColor: BackgroundColors.Primary,
    borderRadius: 12,
    borderWidth: 0.2,
    borderColor: BorderColrs.Primary
  },
  first: { display: 'flex', flexDirection: 'row' },
  arrow: { width: 10, height: 18 },
  name: {
    flex: 1,
    color: TextColors.Primary,
    fontSize: 20
  },
  date: {
    fontSize: 16,
    fontWeight: '400'
  }
});
