import React, { useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { Text } from 'react-native-paper';

import { Camera, GreenCheck, LeftArrow } from '@/assets';
import { Button, TextItem } from '@/components';
import { colors } from '@/theme/colors';

import useImagePicker from './Permission.android';
import Styles from './Styles';

interface IButtonIconWithText {
  value: string;
  status: boolean;
}

const AccountVerification: React.FC = () => {
  useEffect(() => {
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
  }, []);

  const OnButtonPress = (): void => {
    useImagePicker();

    // if (type === 'capture') {

    // } else {
    //     ImagePicker.launchImageLibrary(options, setResponse);
    // }
    // };
    // }
  };

  // {actions.map(({ title, type, options }) => {

  //

  const ButtonIconWithText = (props: IButtonIconWithText): JSX.Element => {
    return (
      <TouchableOpacity
        style={Styles.button}
        onPress={() => {
          OnButtonPress();
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
  );
};

export default AccountVerification;
