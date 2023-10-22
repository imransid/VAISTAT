import React, { type FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { type DeliveryPageStackParamList, type HomePageTopStackParamList } from '@/models';
import { DeliveryJobsScreen, DeliveryScreen, HomeScreen, UrgentDeliveryScreen } from '@/screens';

const Stack = createNativeStackNavigator<HomePageTopStackParamList>();
const DeliveryStack = createNativeStackNavigator<DeliveryPageStackParamList>();

const DeliveryStackScreen: FC = () => {
  return (
    <DeliveryStack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <DeliveryStack.Screen name="Delivery" component={DeliveryScreen} />
      <DeliveryStack.Screen name="DeliveryJobs" component={DeliveryJobsScreen} />
    </DeliveryStack.Navigator>
  );
};

const HomePageTopStackNavigator: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DeliveryStackScreen" component={DeliveryStackScreen} />
      <Stack.Screen name="UrgentDelivery" component={UrgentDeliveryScreen} />
    </Stack.Navigator>
  );
};

export default HomePageTopStackNavigator;
