import { useEffect, useState } from 'react';
import { PermissionsAndroid } from 'react-native';

const useImagePicker = (): boolean => {
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean>(false);

  useEffect(() => {
    const getCameraPermission = async (): Promise<void> => {
      try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK'
        });
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setHasCameraPermission(true);
        } else {
          setHasCameraPermission(false);
        }
      } catch (err) {
        setHasCameraPermission(false);
        // Handle the error here
      }
    };

    // Call the async function and handle the promise
    getCameraPermission().catch(error => {
      console.error('Error getting camera permission:', error);
    });
  }, []);

  return hasCameraPermission;
};

export default useImagePicker;
