import { useEffect } from 'react';
import { PermissionsAndroid } from 'react-native';
import { launchCamera } from 'react-native-image-picker';

interface Action {
  title: string;
  type: 'capture' | 'library';
  options: any; // Adjust this type as needed
}

const useImagePicker = (): void => {
  const includeExtra = true;

  const actions: Action[] = [
    {
      title: 'Take Image',
      type: 'capture',
      options: {
        saveToPhotos: true,
        mediaType: 'photo',
        includeBase64: false,
        includeExtra
      }
    },
    {
      title: 'Select Image',
      type: 'library',
      options: {
        selectionLimit: 0,
        mediaType: 'photo',
        includeBase64: false,
        includeExtra
      }
    },
    {
      title: 'Take Video',
      type: 'capture',
      options: {
        saveToPhotos: true,
        formatAsMp4: true,
        mediaType: 'video',
        includeExtra
      }
    },
    {
      title: 'Select Video',
      type: 'library',
      options: {
        selectionLimit: 0,
        mediaType: 'video',
        formatAsMp4: true,
        includeExtra
      }
    },
    {
      title: 'Select Image or Video\n(mixed)',
      type: 'library',
      options: {
        selectionLimit: 0,
        mediaType: 'mixed',
        includeExtra
      }
    }
  ];

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
          void launchCamera(actions[0].options);
        } else {
          // console.log("Camera permission denied");
        }
      } catch (err) {
        console.warn(err);
      }
    };

    void getCameraPermission();
  }, [actions]);
};

export default useImagePicker;
