import { NavigatorScreenParams } from '@react-navigation/native';

export type RootParamList = {
  Login: undefined;
  Tabs: NavigatorScreenParams<TabParamList>;
};

export type TabParamList = {
  Receipts: undefined;
  Home: undefined;
  Profile: undefined;
};

export type HomeParamList = {
  Feed: undefined;
  AddReceipt: undefined;
  ViewMore: undefined;
  JoinReceipt: undefined;
};
