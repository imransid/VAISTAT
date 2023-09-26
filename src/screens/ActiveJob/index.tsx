import React, { type FC } from 'react';
import { Text, View } from 'react-native';

import Styles from './style';

const ActiveJob: FC = (): React.ReactNode => {
  return (
    <View style={Styles.container}>
      <Text>Active Jobs</Text>
    </View>
  );
};

export default ActiveJob;
