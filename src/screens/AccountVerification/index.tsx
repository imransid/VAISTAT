import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { Modal, PaperProvider, Portal, Text } from 'react-native-paper';

import { Camera, GreenCheck, LeftArrow } from '@/assets';
import { Button, TextItem } from '@/components';
import { colors } from '@/theme/colors';

import useImagePicker from './Permission.android';
import Styles from './Styles';

interface IButtonIconWithText {
  value: string;
  status: boolean;
}

// interface Action {
//     title: string;
//     type: 'capture' | 'library';
//     options: any; // Adjust this type as needed
// }

const AccountVerification: React.FC = () => {
  useImagePicker();

  // Platform.OS !== 'ios' && useImagePicker()

  // const includeExtra = true;
  // // const actions: Action[] = [
  // //     {
  // //         title: 'Take Image',
  // //         type: 'capture',
  // //         options: {
  // //             saveToPhotos: true,
  // //             mediaType: 'photo',
  // //             includeBase64: false,
  // //             includeExtra
  // //         }
  // //     },
  // //     {
  // //         title: 'Select Image',
  // //         type: 'library',
  // //         options: {
  // //             selectionLimit: 0,
  // //             mediaType: 'photo',
  // //             includeBase64: false,
  // //             includeExtra
  // //         }
  // //     },
  // //     {
  // //         title: 'Select Image or Video\n(mixed)',
  // //         type: 'library',
  // //         options: {
  // //             selectionLimit: 0,
  // //             mediaType: 'mixed',
  // //             includeExtra
  // //         }
  // //     }
  // // ];

  // useEffect(() => {

  // if (Platform.OS === 'ios') {
  //     actions.push({
  //         title: 'Take Image or Video\n(mixed)',
  //         type: 'capture',
  //         options: {
  //             saveToPhotos: true,
  //             mediaType: 'mixed',
  //             includeExtra,
  //             presentationStyle: 'fullScreen',
  //         },
  //     });
  // }
  // }, [useImagePicker]);

  // const OnButtonPress = async (): Promise<void> => {
  //     try {
  //         await launchCamera(actions[0].options);
  //         // console.log("result", result)
  //         setVisible(false);
  //     } catch (error) {
  //         // Handle any errors that might occur during the camera launch
  //         console.error('Error launching camera:', error);
  //     }
  // };

  // const OpenGlary = async (): Promise<void> => {
  //     await launchImageLibrary(actions[0].options);
  //     // console.log("result", result)
  //     setVisible(false)
  // }

  const [visible, setVisible] = React.useState(false);

  const showModal = (): void => {
    setVisible(true);
  };
  const hideModal = (): void => {
    setVisible(false);
  };
  const containerStyle = { backgroundColor: 'white', padding: 20, margin: 20 };

  const ButtonIconWithText = (props: IButtonIconWithText): JSX.Element => {
    return (
      <TouchableOpacity
        style={Styles.button}
        onPress={(): void => {
          showModal();
        }}>
        <Row>
          <Col style={[Styles.centerAll, Styles.fixed40]}>
            {props.status ? <GreenCheck /> : <Camera />}
          </Col>
          <Col style={Styles.centerAll}>
            <TextItem variant="titleMedium" txt={props.value} color={colors.black} />
          </Col>
          <Col style={[Styles.centerAll, Styles.fixed40]}>
            <LeftArrow />
          </Col>
        </Row>
      </TouchableOpacity>
    );
  };

  return (
    <PaperProvider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <TextItem
            txt={'Select Image'}
            fontWeight="bold"
            variant="bodyLarge"
            color={colors.black}
          />
          <View style={Styles.Space}></View>
          {/* <TouchableOpacity onPress={() => void OnButtonPress()
                    }>
                        <TextItem txt={'Take a picture'} variant='bodyMedium' color={colors.black} />
                    </TouchableOpacity>
                    <View style={Styles.Space}></View>
                    <TouchableOpacity onPress={() => void OpenGlary()}>
                        <TextItem txt={'Choose from gallery'} variant='bodyMedium' color={colors.black} />
                    </TouchableOpacity> */}
        </Modal>
      </Portal>
      <View style={Styles.mainContainer}>
        <View>
          <Grid style={Styles.container}>
            <Row style={[Styles.input, Styles.centerAll]}>
              <TextItem
                txt={'Account Verification'}
                color={colors.darkGray}
                variant="titleMedium"
                fontWeight="bold"
              />
            </Row>

            <Row style={Styles.input}>
              <Text variant="titleSmall">
                Welcome Bono Carpentier,
                <TextItem
                  txt={'\nPlease upload your documents for account verification'}
                  color={colors.darkGray}
                  variant="bodyMedium"
                />
              </Text>
            </Row>
            <Row style={Styles.inputX}>
              <ButtonIconWithText value="Driver License/Government ID" status={true} />
              <ButtonIconWithText value="Motor Insurance" status={true} />
              <ButtonIconWithText value="Registration certificate" status={false} />
              <ButtonIconWithText value="Profile photo" status={true} />
              <ButtonIconWithText value="Add vehicle information" status={false} />
            </Row>
          </Grid>
        </View>
        <View style={Styles.Submit}>
          <Button txt="Submit" />
        </View>
      </View>
    </PaperProvider>
  );
};

export default AccountVerification;
