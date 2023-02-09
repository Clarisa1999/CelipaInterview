import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from 'react-native-popup-menu';
import icon from '../../assets/new-receipt.png';
import { HomeParamList } from '../navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';
import scanIcon from '../../assets/scan-receipt-icon.png';
import joinIcon from '../../assets/join-receipt-icon.png';
import { BackgroundColors, BorderColrs } from '../utils/colors';

const Divider = () => <View style={styles.divider} />;

export default function PopUpMenu({
  navigation
}: {
  navigation: StackNavigationProp<HomeParamList>;
}) {
  return (
    <MenuProvider style={styles.container}>
      <Menu>
        <MenuTrigger
          customStyles={{
            triggerWrapper: {
              height: -100
            }
          }}
        >
          <Image source={icon} />
        </MenuTrigger>
        <MenuOptions>
          <MenuOption
            onSelect={() => navigation.navigate('AddReceipt')}
            style={styles.options}
          >
            <Image source={scanIcon} />
            <Text style={styles.text}>Scan Receipt</Text>
          </MenuOption>
          <Divider />
          <MenuOption
            onSelect={() => navigation.navigate('JoinReceipt')}
            style={styles.options}
          >
            <Image source={joinIcon} />
            <Text style={styles.text}>Join receipt</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BackgroundColors.Primary,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingBottom: '20%',
    flexDirection: 'column'
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: BorderColrs.Primary
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  text: {
    fontSize: 16,
    fontWeight: '300'
  }
});
