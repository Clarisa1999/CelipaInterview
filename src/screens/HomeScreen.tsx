import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MoneyCard from '../components/MoneyCard';
import RecentActivityCard from '../components/RecentActivityCard';
import WelcomeHeader from '../components/WelcomeHeader';
import CelipaLogo from '../components/CelipaLogo';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.homeContainer}>
      <View style={styles.container}>
        <CelipaLogo />
        <View style={styles.welcomeTab}>
          <WelcomeHeader name="Christophe" />
        </View>
        <View style={styles.transaction}>
          <MoneyCard
            value={123}
            description="spent this month"
            color="#AF4E8E"
          />
          <MoneyCard
            value={123}
            description="spent this month"
            color="#AF4E8E"
          />
        </View>
        <View style={styles.textBar}>
          <Text style={styles.recentActivityText}>Recent activity</Text>
          <Text style={styles.viewMoreText}>View More</Text>
        </View>
        <View style={styles.activity}>
          <RecentActivityCard name="Linden Square Delivery" date={new Date()} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#219AF4'
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: '25%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: 'center'
  },
  welcomeTab: {
    marginTop: -100,
    height: '20%'
  },
  transaction: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '20%'
  },
  textBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '10%'
  },
  recentActivityText: {
    color: '#219AF4',
    fontSize: 24,
    fontWeight: '600'
  },
  viewMoreText: {
    fontSize: 16,
    fontWeight: '600'
  },
  activity: {
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
});
