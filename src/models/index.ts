import { type ParamListBase } from '@react-navigation/native';

export interface RootStackParamList extends ParamListBase {
  SignIn: undefined;
  SignUp: undefined;
}

export interface AppStackParamList extends ParamListBase {
  Home: undefined;
}

export interface BottomTabParamList extends ParamListBase {
  Home: undefined;
  UpcomingJobs: undefined;
  ActiveJobs: undefined;
  Chat: undefined;
  TaskJobs: undefined;
}

export interface DrawerParamList extends ParamListBase {
  BottomTabs: undefined;
  Profile: undefined;
  Settings: undefined;
}
