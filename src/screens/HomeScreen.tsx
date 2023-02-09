import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MoneyCard from '../components/MoneyCard';
import RecentActivityCard from '../components/RecentActivityCard';
import WelcomeHeader from '../components/WelcomeHeader';
import CelipaLogo from '../components/CelipaLogo';
import { BackgroundColors, TextColors } from '../utils/colors';
import NewReceipt from '../components/NewReceipt';
import PopUpMenu from '../components/PopUpMenu';
import { HomeParamList } from '../navigation/types';
import { StackScreenProps } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({
  navigation
}: StackScreenProps<HomeParamList>) {
  const [name, setName] = React.useState<string>();

  React.useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('name');
        if (value !== null) {
          // value previously stored
          setName(value);
        }
      } catch (e) {}
    };
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.homeContainer} edges={['top']}>
      <CelipaLogo />
      <View style={styles.container}>
        <WelcomeHeader name={name ?? ''} />
        <View style={styles.transaction}>
          <MoneyCard
            value={123}
            description="spent this mont"
            color={TextColors.DarkTertiary}
          />
          <MoneyCard
            value={123}
            description="still owed to you"
            color={TextColors.Tertiary}
          />
        </View>
        <View style={styles.textBar}>
          <Text style={styles.recentActivityText}>Recent activity</Text>
          <Text
            style={styles.viewMoreText}
            onPress={() => navigation.navigate('ViewMore')}
          >
            View More
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ViewMore')}>
          <RecentActivityCard name="Linden Square Delivery" date={new Date()} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ViewMore')}>
          <RecentActivityCard name="Bab Korean Bistro" date={new Date()} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ViewMore')}>
          <RecentActivityCard name="The Local" date={new Date()} />
        </TouchableOpacity>
        <View style={styles.addReceiptButton}>
          <PopUpMenu navigation={navigation} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: BackgroundColors.Secondary
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: BackgroundColors.Primary,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40
  },
  transaction: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 24
  },
  textBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24
  },
  recentActivityText: {
    color: TextColors.Primary,
    fontSize: 24,
    fontWeight: '600'
  },
  viewMoreText: {
    fontSize: 16,
    fontWeight: '300',
    textDecorationLine: 'underline'
  },
  addReceiptButton: {
    flex: 1,
    zIndex: 1
    // alignItems: 'flex-end',
    // justifyContent: 'flex-end'
  }
});
