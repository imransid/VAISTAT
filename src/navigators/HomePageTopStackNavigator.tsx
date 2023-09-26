import React, { type FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { type HomePageTopStackParamList } from '@/models';
import { DeliveryScreen, HomeScreen, UrgentDeliveryScreen } from '@/screens';

const Stack = createNativeStackNavigator<HomePageTopStackParamList>();

const HomePageTopStackNavigator: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Delivery" component={DeliveryScreen} />
      <Stack.Screen name="UrgentDelivery" component={UrgentDeliveryScreen} />
    </Stack.Navigator>
  );
};

export default HomePageTopStackNavigator;
