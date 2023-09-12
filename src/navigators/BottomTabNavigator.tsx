import React, { type FC } from 'react';
import { Image } from 'react-native';
import { type BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { type BottomTabParamList } from '@/models';
import { ActiveJob, HomeScreen } from '@/screens';
import Chat from '@/screens/Chat';
import TaskJob from '@/screens/TaskJob';
import UpcomingJob from '@/screens/UpcomingJob';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigator: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }: BottomTabScreenProps<BottomTabParamList>) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          switch (route.name) {
            case 'Home':
              return focused ? (
                <Image source={require('../assets/img//house-active.png')} />
              ) : (
                <Image source={require('../assets/img/house.png')} />
              );

            case 'UpcomingJobs':
              return focused ? (
                <Image source={require('../assets/img/package-active.png')} />
              ) : (
                <Image source={require('../assets/img/package.png')} />
              );

            case 'ActiveJobs':
              return focused ? (
                <Image source={require('../assets/img/car-active.png')} />
              ) : (
                <Image source={require('../assets/img/car.png')} />
              );

            case 'Chat':
              return focused ? (
                <Image source={require('../assets/img/chat-active.png')} />
              ) : (
                <Image source={require('../assets/img/chat.png')} />
              );

            case 'TaskJobs':
              return focused ? (
                <Image source={require('../assets/img/account-active.png')} />
              ) : (
                <Image source={require('../assets/img/account.png')} />
              );
            default:
              return <Image source={require('../assets/img/house-active.png')} />;
          }
        }
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="UpcomingJobs" component={UpcomingJob} />
      <Tab.Screen name="ActiveJobs" component={ActiveJob} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="TaskJobs" component={TaskJob} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
