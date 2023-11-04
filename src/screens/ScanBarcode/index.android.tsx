/* eslint-disable @typescript-eslint/no-floating-promises  */
/* eslint-disable  @typescript-eslint/strict-boolean-expressions */
import React, { type FC, useState } from 'react';
import {
  Alert,
  Linking,
  PermissionsAndroid,
  SafeAreaView,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { Camera } from 'react-native-camera-kit';
import { type StackScreenProps } from '@react-navigation/stack';

import { CustomHeaderWithBack } from '@/components';
import { type HomePageTopStackParamList } from '@/models';
import { colors } from '@/theme/colors';

import Styles from './Style';

type Props = StackScreenProps<HomePageTopStackParamList>;
const ScanBarcode: FC<Props> = () => {
  const [qrvalue, setQrvalue] = useState('');
  const [opneScanner, setOpneScanner] = useState(false);

  const onOpenlink = (): void => {
    // If scanned then function to open URL in Browser
    Linking.openURL(qrvalue);
  };

  const onBarcodeScan = (qrvalue: string): void => {
    // Called after te successful scanning of QRCode/Barcode
    setQrvalue(qrvalue);
    setOpneScanner(false);
  };

  const onOpneScanner = (): void => {
    // To Start Scanning

    async function requestCameraPermission(): Promise<void> {
      try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // If CAMERA Permission is granted
          setQrvalue('');
          setOpneScanner(true);
        } else {
          Alert.alert('CAMERA permission denied');
        }
      } catch (err: any) {
        Alert.alert('Camera permission err', err);
        // console.warn(err);
      }
    }
    // Calling the camera permission function
    // ts
    requestCameraPermission();
  };

  return (
    <SafeAreaView style={Styles.safeArea}>
      <CustomHeaderWithBack txt={'Scan barcode'} />
      {opneScanner ? (
        <View>
          <Camera
            style={Styles.cameraStyle}
            showFrame={true}
            // Show/hide scan frame
            scanBarcode={true}
            // Can restrict for the QR Code only
            laserColor={'blue'}
            // Color can be of your choice
            frameColor={colors.primary}
            // If frame is visible then frame color
            colorForScannerFrame={'black'}
            // Scanner Frame color
            onReadCode={(event: any) => {
              onBarcodeScan(event.nativeEvent.codeStringValue ?? '');
            }}
          />
        </View>
      ) : (
        <View style={Styles.container}>
          <Text style={Styles.titleText}>Scanned Result</Text>
          <Text style={Styles.textStyle}>{qrvalue ? 'Scanned Result: ' + qrvalue : ''}</Text>
          {qrvalue.includes('https://') ||
          qrvalue.includes('http://') ||
          qrvalue.includes('geo:') ? (
            <TouchableHighlight onPress={onOpenlink}>
              <Text style={Styles.textLinkStyle}>
                {qrvalue.includes('geo:') ? 'Open in Map' : 'Open Link'}
              </Text>
            </TouchableHighlight>
          ) : null}
          <TouchableHighlight onPress={onOpneScanner} style={Styles.buttonStyle}>
            <Text style={Styles.buttonTextStyle}>Open QR Scanner</Text>
          </TouchableHighlight>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ScanBarcode;
