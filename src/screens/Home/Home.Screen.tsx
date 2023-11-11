import React, { type FC, useEffect, useState /* useRef */ } from 'react';
import { ActivityIndicator, Alert, TouchableOpacity, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { Card, Text } from 'react-native-paper';
import Geolocation, {
  type GeolocationError,
  type GeolocationResponse
} from '@react-native-community/geolocation';
import { type StackScreenProps } from '@react-navigation/stack';

// import { useSelector } from 'react-redux';
// import {useGetActiveJobsMapDataQuery} from '@/store/apis/ActiveJobsApi'
// import { type RootState } from '@/store';
import TopBar from '@/components/TopBar/TopBar';
import { Environment } from '@/enviroment/environment';
import { type HomePageTopStackParamList } from '@/models';

import Styles from './Style';
// import ToastPopUp from '../../store/sagas/Toast.android';
// import SpinnerButton from 'react-native-spinner-button';
// import { IActiveJob} from '@/models'

type Props = StackScreenProps<HomePageTopStackParamList>;

const HomeScreen: FC<Props> = ({ navigation, route }: Props): React.ReactNode => {
  // const coords = useSelector((state: RootState) => state.users.user.data?.lat_long);
  // const driverId = useSelector((state: RootState) => state.users.user.data?._id);
  // const {data, isError,error, isLoading, isSuccess} = useGetActiveJobsMapDataQuery(driverId||'')
  const destination = { latitude: 23.7561, longitude: 90.3872 };
  const pickUpLocation = { latitude: 23.7461, longitude: 90.3742 };
  const [position, setPosition] = useState<GeolocationResponse | null>(null);
  const [isGoButtonLoading, setIsGoButtonLoading] = useState(false);

  // const requestLocationPermission = async (): Promise<boolean> => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
  //       {
  //         title: 'Geolocation Permission',
  //         message: 'Can we access your location?',
  //         buttonNeutral: 'Ask Me Later',
  //         buttonNegative: 'Cancel',
  //         buttonPositive: 'OK',
  //       },
  //     );
  //     if (granted === 'granted') {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   } catch (err) {
  //     return false;
  //   }
  // };

  const getLocation = (): void => {
    // const result = requestLocationPermission();
    // result.then((res:boolean) => {
    // if (res) {
    Geolocation.getCurrentPosition(
      (position: GeolocationResponse) => {
        setPosition(position);
      },
      (error: GeolocationError) => {
        Alert.alert('GetCurrentPosition Error', JSON.stringify(error));
      },
      { enableHighAccuracy: true }
    );
    // }
    // });
  };

  useEffect((): void => {
    Geolocation.setRNConfiguration({
      skipPermissionRequests: false,
      locationProvider: 'playServices'
    });
  }, [1]);

  useEffect((): void => {
    getLocation();
  }, [position]);

  const handleOnlineButton = (): void => {
    setIsGoButtonLoading(true);
    setTimeout(() => {
      setIsGoButtonLoading(false);
    }, 3000);
  };

  return (
    <View style={Styles.container}>
      <TopBar navigation={navigation} route={route} />
      {position != null && (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={Styles.map}
          region={{
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}>
          <Marker
            coordinate={position?.coords}
            title={'My location'}
            description={'My location Address'}
          />
          <Marker
            coordinate={destination}
            title={'Destination'}
            description={'destination Address'}
          />
          <Marker coordinate={pickUpLocation} title={'Pick Up'} description={'Pick up Address'} />
          {/* { data?.activeJobs  && coords && data?.activeJobs.map((job: IActiveJob,index: number)=>  */}
          <MapViewDirections
            splitWaypoints={true}
            origin={position?.coords}
            destination={destination}
            apikey={Environment.GOOGLE_MAPS_APIKEY}
            strokeWidth={10}
            strokeColor="hotpink"
          />
          {/* )}  */}

          <MapViewDirections
            splitWaypoints={true}
            origin={destination}
            destination={pickUpLocation}
            apikey={Environment.GOOGLE_MAPS_APIKEY}
            strokeWidth={10}
            strokeColor="green"
          />
        </MapView>
      )}
      <TouchableOpacity style={Styles.fabButton} onPress={handleOnlineButton}>
        <Text variant="bodyLarge" style={Styles.textColor}>
          Go
        </Text>
      </TouchableOpacity>
      {isGoButtonLoading && (
        <ActivityIndicator style={Styles.fabIndecator} size="large" animating={isGoButtonLoading} />
      )}
      {isGoButtonLoading && (
        <Card style={Styles.card}>
          <Card.Content>
            <Text variant="titleLarge" style={Styles.textColor}>
              You are online
            </Text>
          </Card.Content>
        </Card>
      )}
    </View>
  );
};

export default HomeScreen;
