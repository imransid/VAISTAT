import React, { type FC } from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from '@/screens';

import { colors } from '../theme/colors';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: colors.black,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: colors.primary
      }}>
      {/* {BottomTabs.map(bottomTab => ( */}
      <Tab.Screen
        // key={bottomTab.name}
        // name={bottomTab.name}
        key={'home'}
        name="Home"
        component={HomeScreen}
        // options={{
        //   tabBarShowLabel: false,
        //   tabBarIcon: ({ color }) => <Icon name={'infinite'} size={22} color={color} />,
        //   tabBarButton: props => <CustomTabBarButton {...props} item={bottomTab} />
        // }}
      />
      {/* ))} */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    borderRadius: 16,
    bottom: 16,
    height: 60,
    left: 16,
    position: 'absolute',
    right: 16
  }
});
