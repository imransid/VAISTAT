import { type ParamListBase } from '@react-navigation/native';

export interface RootStackParamList extends ParamListBase {
  SignIn: undefined;
  SignUp: undefined;
}

export interface AuthStackParamList extends ParamListBase {
  AccountVerification: undefined;
  OTPVerification: undefined;
  PhoneVerification: undefined;
  FAQ: undefined;
  SignUp: undefined;
  SignIn: undefined;
  AppStack: undefined;
}

export interface AppStackParamList extends ParamListBase {
  Home: undefined;
}

export interface BottomTabParamList extends ParamListBase {
  TopTabs: undefined;
  UpcomingJobs: undefined;
  ActiveJobs: undefined;
  Chat: undefined;
  TaskJobs: undefined;
}
export interface HomePageTopStackParamList extends ParamListBase {
  Home: undefined;
  Delivery: undefined;
  UrgentDelivery: undefined;
}

export interface DrawerParamList extends ParamListBase {
  BottomTabs: undefined;
  Profile: undefined;
  Settings: undefined;
}
