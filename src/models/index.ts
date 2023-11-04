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
  DeliveryStackScreen: undefined;
  UrgentDelivery: undefined;
}

export interface UpcomingJobStackParamList extends ParamListBase {
  UpcomingJobScreen: undefined;
  UpcomingJobDetailScreen: undefined;
}

export interface DeliveryPageStackParamList extends ParamListBase {
  Delivery: undefined;
  DeliveryJobs: undefined;
}

export interface DrawerParamList extends ParamListBase {
  BottomTabs: undefined;
  Profile: undefined;
  Settings: undefined;
}

export interface IUpcomingJobargType {
  driverId: string;
  userId: number;
}

export interface IUpcomingJob {
  _id: number;
  pharmacy_name: string;
  location: string;
  delivery_count: number;
  pickup_count: number;
}
export interface IUpcomingJobs {
  code: number;
  message?: string;
  result: IUpcomingJob[];
}

export interface IUpcomingjobTimingObj {
  startDateTime: string;
  endDateTime: string;
}

export interface IUpcomingJobExpandedListItem {
  _id: string;
  pick_up_location: string;
  jobTimingObj: IUpcomingjobTimingObj;
  ride_fare: number;
  estimate_distance: number;
}

export interface IUpcomingJobExpandedList {
  code: number;
  message?: string;
  result: IUpcomingJobExpandedListItem[];
}
