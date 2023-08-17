import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import UpcomingJob from '../screens/UpcomingJob';
import ActiveJob from '../screens/ActiveJob';
import Chat from '../screens/Chat';
import TaskJob from '../screens/TaskJob';
import { Image } from 'react-native';

const BottomTab = createBottomTabNavigator();

const BottomTabs = () =>{
    return (
      <BottomTab.Navigator>
        <BottomTab.Screen name="Home" component={Home}
         options={{
          
          
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Image
                source={require('./img/home.png')}
                
            />
          ),
         }} 
         />
        <BottomTab.Screen name="UpcomingJobs" component={UpcomingJob} 
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Image
                source={require('./img/package.png')}
            />
          ),
         }} />
        <BottomTab.Screen name="ActiveJobs" component={ActiveJob}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Image
                source={require('./img/car.png')}
            />
          ),
         }}  />
        <BottomTab.Screen name="Chat" component={Chat} 
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Image
                source={require('./img/chat.png')}
            />
          ),
         }} />
        <BottomTab.Screen name="TaskJobs" component={TaskJob} 
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Image
                source={require('./img/account.png')}
            />
          ),
         }} />
      </BottomTab.Navigator>
    )
  };

export default function Navigator() {
  return (
    <NavigationContainer>
        <BottomTabs/>
    </NavigationContainer>
  );
}
