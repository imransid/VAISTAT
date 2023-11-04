import React, { type FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { type UpcomingJobStackParamList } from '@/models';
import { UrgentDeliveryScreen } from '@/screens';
import UpcomingJob from '@/screens/UpcomingJob';
const Stack = createNativeStackNavigator<UpcomingJobStackParamList>();

const UpcomingJobStackNavigator: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="UpcomingJobScreen" component={UpcomingJob} />
      <Stack.Screen name="UpcomingJobDetailScreen" component={UrgentDeliveryScreen} />
    </Stack.Navigator>
  );
};

export default UpcomingJobStackNavigator;
