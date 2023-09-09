import React from 'react';
import { Image } from 'react-native';
import { type BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { type BottomTabParamList } from '../models';
import ActiveJob from '../screens/ActiveJob';
import Chat from '../screens/Chat';
import Home from '../screens/Home';
import TaskJob from '../screens/TaskJob';
import UpcomingJob from '../screens/UpcomingJob';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabs = (): React.ReactNode => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }: BottomTabScreenProps<BottomTabParamList>) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          switch (route.name) {
            case 'Home':
              return focused ? (
                <Image source={require('./img/house-active.png')} />
              ) : (
                <Image source={require('./img/house.png')} />
              );

            case 'UpcomingJobs':
              return focused ? (
                <Image source={require('./img/package-active.png')} />
              ) : (
                <Image source={require('./img/package.png')} />
              );

            case 'ActiveJobs':
              return focused ? (
                <Image source={require('./img/car-active.png')} />
              ) : (
                <Image source={require('./img/car.png')} />
              );

            case 'Chat':
              return focused ? (
                <Image source={require('./img/chat-active.png')} />
              ) : (
                <Image source={require('./img/chat.png')} />
              );

            case 'TaskJobs':
              return focused ? (
                <Image source={require('./img/account-active.png')} />
              ) : (
                <Image source={require('./img/account.png')} />
              );
            default:
              return <Image source={require('./img/house-active.png')} />;
          }
        }
      })}>
      <BottomTab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <BottomTab.Screen
        name="UpcomingJobs"
        component={UpcomingJob}
        options={{ headerShown: false }}
      />
      <BottomTab.Screen name="ActiveJobs" component={ActiveJob} options={{ headerShown: false }} />
      <BottomTab.Screen name="Chat" component={Chat} options={{ headerShown: false }} />
      <BottomTab.Screen name="TaskJobs" component={TaskJob} options={{ headerShown: false }} />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;
