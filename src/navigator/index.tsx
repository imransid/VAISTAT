import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import UpcomingJob from '../screens/UpcomingJob';
import ActiveJob from '../screens/ActiveJob';
import Chat from '../screens/Chat';
import TaskJob from '../screens/TaskJob';
import { Image } from 'react-native';
import Login from '../screens/Login';
import Registration from '../screens/Registration';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Login: undefined
  Registration: undefined;
  Home: undefined
};

export type BottomTabParamList = {
  Home: undefined
  UpcomingJobs: undefined;
  ActiveJobs: undefined;
  Chat: undefined;
  TaskJobs: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();
const Stack = createStackNavigator<RootStackParamList>();

const DrawerNavigator = () => {

}

const BottomTabs = () =>{
    return (
      <BottomTab.Navigator
      screenOptions={({ route }: BottomTabScreenProps<BottomTabParamList>) => ({
        tabBarShowLabel:false,
        tabBarIcon: ({ focused }) => {

          switch(route.name){
            case 'Home': 
                return focused
                      ? <Image source={require('./img/house-active.png')}/>
                      : <Image source={require('./img/house.png')}/>
                
            case 'UpcomingJobs': 
                return focused
                      ?<Image source={require('./img/package-active.png')}/>
                      :<Image source={require('./img/package.png')}/>
                
            case 'ActiveJobs': 
                return focused
                      ?<Image source={require('./img/car-active.png')}/>
                      :<Image source={require('./img/car.png')}/>
                
            case 'Chat': 
                return focused
                      ?<Image source={require('./img/chat-active.png')}/>
                      :<Image source={require('./img/chat.png')}/>
                
            case 'TaskJobs': 
                return focused
                      ?<Image source={require('./img/account-active.png')}/>
                      :<Image source={require('./img/account.png')}/>
            default: 
              return <Image source={require('./img/house-active.png')}
          />
                
          }
          
        },

      })}
      >
        <BottomTab.Screen name="Home" component={Home} />
        <BottomTab.Screen name="UpcomingJobs" component={UpcomingJob}  />
        <BottomTab.Screen name="ActiveJobs" component={ActiveJob} />
        <BottomTab.Screen name="Chat" component={Chat}  />
        <BottomTab.Screen name="TaskJobs" component={TaskJob}  />
      </BottomTab.Navigator>
    )
};

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Registration' component={Registration}/>
      <Stack.Screen name='Home' component={BottomTabs} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

export default function Navigator() {
  return (
    <NavigationContainer>
        <StackNavigator/>
    </NavigationContainer>
  );
}
