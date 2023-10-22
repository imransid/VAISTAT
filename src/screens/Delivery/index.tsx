import React, { type FC, useCallback, useRef, useState } from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { Divider } from 'react-native-paper';
import { type BottomSheetModal } from '@gorhom/bottom-sheet';
import { type StackScreenProps } from '@react-navigation/stack';

import { EButtonType, ETitleAlignment } from '@/app-enum';
import { ArrowDown, ArrowUP, CalendarBlank, MapPin } from '@/assets';
import { FilterBottomSheet, TextItem } from '@/components';
import CustomButtonItem from '@/components/Button';
import CustomCheckBox from '@/components/CheckBox';
import TopBar from '@/components/TopBar/TopBar';
import { type HomePageTopStackParamList } from '@/models';
import { Routes } from '@/navigators/ROUTES';
import { colors } from '@/theme/colors';

import Styles from './Style';

interface ItemType {
  id: number;
  name: string;
  location: string;
}

interface DeliveryDetailistProps {
  item: ItemType;
  navigation: StackScreenProps<HomePageTopStackParamList>;
}
const DeliveryDetailist: FC<DeliveryDetailistProps> = ({
  item,
  navigation
}: DeliveryDetailistProps) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = (): void => {
    setExpanded(!expanded);
  };
  return (
    <View>
      <Row style={[Styles.centerAll, Styles.txtRow]}>
        <Col size={1}>
          <Image source={require('../../assets/img/order-logo.png')} />
        </Col>
        <Col size={10}>
          <TextItem txt={item.name} variant="bodyMedium" />
        </Col>
        <Col size={1}>
          <TouchableOpacity onPress={toggleExpanded}>
            {expanded && <ArrowUP />}
            {!expanded && <ArrowDown />}
          </TouchableOpacity>
        </Col>
      </Row>
      <Row style={[Styles.centerAll, Styles.txtRow]}>
        <Col size={1}>
          <Image source={require('../../assets/img/MapPin.png')} />
        </Col>
        <Col size={11}>
          <TextItem txt={item.location} variant="bodyMedium" />
        </Col>
      </Row>
      <Row style={[Styles.centerAll, Styles.txtRow]}>
        <Col size={3}>
          <TextItem txt={'4 Deliveries '} color={colors.blue} variant="bodyMedium" />
        </Col>
        <Col size={9}>
          <TextItem txt={'0 Pickup'} color={colors.pink} variant="bodyMedium" />
        </Col>
      </Row>
      <Row style={Styles.btnRow}>
        <CustomButtonItem
          txt="Accept All"
          type={EButtonType.GreenBtn}
          pressFunction={() => {
            navigation.navigation.navigate(Routes.DELIVERYJOBS);
          }}
        />
      </Row>
      <Divider />

      {expanded && (
        <View style={Styles.expandedContainer}>
          <Row style={[Styles.centerAll, Styles.txtRow]}>
            <Col size={2}>
              <View style={[Styles.badgeStyle, Styles.centerAll]}>
                <TextItem txt={'Delivery'} color={colors.white} />
              </View>
            </Col>

            <Col size={8}>
              <View style={[Styles.badgeStyleOrange, Styles.centerAll]}>
                <TextItem txt={'SAFE DROP'} color={colors.white} />
              </View>
            </Col>

            <Col size={2}>
              <View style={[Styles.badgeStyleGreen, Styles.centerAll]}>
                <TextItem txt={'$1.10'} color={colors.white} />
              </View>
            </Col>
          </Row>
          <Row style={[Styles.centerAll, Styles.txtRow]}>
            <Col size={1}>
              <MapPin />
            </Col>
            <Col size={11}>
              <TextItem
                txt={'9320 Boul St-Laurent, Montréal, QC, H2N 1N7, CA '}
                variant="bodyMedium"
              />
            </Col>
          </Row>
          <Row style={[Styles.centerAll, Styles.txtRow]}>
            <Col size={1}>
              <CalendarBlank />
            </Col>
            <Col size={11}>
              <TextItem
                txt={'Wed 19 Jul 2023, before 11:00am '}
                fontWeight="bold"
                variant="bodyMedium"
              />
            </Col>
          </Row>
          <Row style={Styles.btnRow}>
            <CustomButtonItem txt="Accept. 11.80 km Away" type={EButtonType.WhiteBtn} />
          </Row>
          <Divider style={Styles.dividerShortStyle} />

          <Row style={[Styles.centerAll, Styles.txtRow]}>
            <Col size={10}>
              <View style={[Styles.badgeStyle, Styles.centerAll]}>
                <TextItem txt={'Delivery'} color={colors.white} />
              </View>
            </Col>
            <Col size={2}>
              <View style={[Styles.badgeStyleGreen, Styles.centerAll]}>
                <TextItem txt={'$1.10'} color={colors.white} />
              </View>
            </Col>
          </Row>
          <Row style={[Styles.centerAll, Styles.txtRow]}>
            <Col size={1}>
              <MapPin />
            </Col>
            <Col size={11}>
              <TextItem
                txt={'9320 Boul St-Laurent, Montréal, QC, H2N 1N7, CA '}
                variant="bodyMedium"
              />
            </Col>
          </Row>
          <Row style={[Styles.centerAll, Styles.txtRow]}>
            <Col size={1}>
              <CalendarBlank />
            </Col>
            <Col size={11}>
              <TextItem
                txt={'Wed 19 Jul 2023, before 11:00am '}
                fontWeight="bold"
                variant="bodyMedium"
              />
            </Col>
          </Row>
          <Row style={Styles.btnRow}>
            <CustomButtonItem txt="Accept. 9 km Away" type={EButtonType.WhiteBtn} />
          </Row>
          <Divider style={Styles.dividerShortStyle} />

          <Row style={[Styles.centerAll, Styles.txtRow]}>
            <Col size={10}>
              <View style={[Styles.badgeStyle, Styles.centerAll]}>
                <TextItem txt={'Delivery'} color={colors.white} />
              </View>
            </Col>
            <Col size={2}>
              <View style={[Styles.badgeStyleGreen, Styles.centerAll]}>
                <TextItem txt={'$1.10'} color={colors.white} />
              </View>
            </Col>
          </Row>
          <Row style={[Styles.centerAll, Styles.txtRow]}>
            <Col size={1}>
              <MapPin />
            </Col>
            <Col size={11}>
              <TextItem
                txt={'9320 Boul St-Laurent, Montréal, QC, H2N 1N7, CA '}
                variant="bodyMedium"
              />
            </Col>
          </Row>
          <Row style={[Styles.centerAll, Styles.txtRow]}>
            <Col size={1}>
              <CalendarBlank />
            </Col>
            <Col size={11}>
              <TextItem
                txt={'Wed 19 Jul 2023, before 11:00am '}
                fontWeight="bold"
                variant="bodyMedium"
              />
            </Col>
          </Row>
          <Row style={Styles.btnRow}>
            <CustomButtonItem txt="Accept. 9 km Away" type={EButtonType.WhiteBtn} />
          </Row>
          <Divider style={Styles.dividerShortStyle} />

          <Row style={[Styles.centerAll, Styles.txtRow]}>
            <Col size={10}>
              <View style={[Styles.badgeStyle, Styles.centerAll]}>
                <TextItem txt={'Delivery'} color={colors.white} />
              </View>
            </Col>
            <Col size={2}>
              <View style={[Styles.badgeStyleGreen, Styles.centerAll]}>
                <TextItem txt={'$1.10'} color={colors.white} />
              </View>
            </Col>
          </Row>
          <Row style={[Styles.centerAll, Styles.txtRow]}>
            <Col size={1}>
              <MapPin />
            </Col>
            <Col size={11}>
              <TextItem
                txt={'9320 Boul St-Laurent, Montréal, QC, H2N 1N7, CA '}
                variant="bodyMedium"
              />
            </Col>
          </Row>
          <Row style={[Styles.centerAll, Styles.txtRow]}>
            <Col size={1}>
              <CalendarBlank />
            </Col>
            <Col size={11}>
              <TextItem
                txt={'Wed 19 Jul 2023, before 11:00am '}
                fontWeight="bold"
                variant="bodyMedium"
              />
            </Col>
          </Row>
          <Row style={Styles.btnRow}>
            <CustomButtonItem txt="Accept. 9 km Away" type={EButtonType.WhiteBtn} />
          </Row>
        </View>
      )}
      <Divider />
    </View>
  );
};

interface BottomSheetCheckboxProps {
  checkBoxTitle: string;
}
const BottomSheetCheckbox: FC<BottomSheetCheckboxProps> = ({
  checkBoxTitle
}: BottomSheetCheckboxProps) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <CustomCheckBox
      textColSize={10}
      checkBoxColSize={2}
      status={isSelected}
      setCheck={() => {
        setSelection(!isSelected);
      }}
      title={checkBoxTitle}
      titleAlignment={ETitleAlignment.LEFT}
    />
  );
};

type DeliveryScreenProps = StackScreenProps<HomePageTopStackParamList>;
const DeliveryScreen: FC<DeliveryScreenProps> = ({ navigation, route }: DeliveryScreenProps) => {
  const data: ItemType[] = [
    {
      id: 1,
      name: 'Pharmacie Sonia Boutin inc',
      location: '9320 Boul St-Laurent, Montréal, QC, H2N 1N7, CA '
    },
    {
      id: 2,
      name: 'Pharmacie Proxim Chadi Kabak',
      location: '9320 Boul St-Laurent, Montréal, QC, H2N 1N7, CA '
    },
    {
      id: 3,
      name: 'Pharmacie Proxim Chadi Kabak',
      location: '9320 Boul St-Laurent, Montréal, QC, H2N 1N7, CA '
    },
    {
      id: 4,
      name: 'Pharmacie Proxim Chadi Kabak',
      location: '9320 Boul St-Laurent, Montréal, QC, H2N 1N7, CA '
    }
  ];

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    navigation
      .getParent()
      ?.getParent()
      ?.setOptions({
        tabBarStyle: {
          display: 'none'
        }
      });
  }, [navigation]);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const dismissOccur = (): void => {
    navigation.getParent()?.getParent()?.setOptions({
      tabBarStyle: undefined
    });
  };

  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.appBarActionStyle}>
        <TouchableOpacity onPress={handlePresentModalPress}>
          <Image source={require('../../assets/img/Funnel.png')} />
        </TouchableOpacity>
      </View>
      <TopBar navigation={navigation} route={route} />
      <Divider />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Grid style={Styles.container}>
            <DeliveryDetailist item={item} navigation={{ navigation, route }} />
          </Grid>
        )}
        keyExtractor={item => `${item.id}`}
      />
      <FilterBottomSheet bottomSheetModalRef={bottomSheetModalRef} handleOnDismiss={dismissOccur}>
        <Grid>
          <Row style={Styles.bottomSheetHeader}>
            <Col size={10} style={Styles.centerAll}>
              <TextItem txt="Filter pharmacies" color={colors.black} />
            </Col>
            <Col size={2}>
              <TextItem txt="Clear" color={colors.black} />
            </Col>
          </Row>
          <BottomSheetCheckbox checkBoxTitle="Morning deliveries (8-12pm)" />
          <BottomSheetCheckbox checkBoxTitle="Afternoon deliveries (12-18h)" />
          <BottomSheetCheckbox checkBoxTitle="Evening deliveries (18-12am)" />
          <BottomSheetCheckbox checkBoxTitle="Deliveries" />
        </Grid>
        <CustomButtonItem txt="Apply" />
      </FilterBottomSheet>
      <Divider />
    </View>
  );
};

export default DeliveryScreen;
