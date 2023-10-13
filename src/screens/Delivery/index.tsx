import React, { type FC, useCallback, useRef, useState } from 'react';
import { Alert, Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { type BottomSheetModal } from '@gorhom/bottom-sheet';
import { type StackScreenProps } from '@react-navigation/stack';

import { EButtonType, ETitleAlignment } from '@/app-enum';
import { ArrowDown, ArrowUP, CalendarBlank, MapPin } from '@/assets';
import { FilterBottomSheet, TextItem } from '@/components';
import CustomButtonItem from '@/components/Button';
import CustomCheckBox from '@/components/CheckBox';
import TopBar from '@/components/TopBar/TopBar';
import { type HomePageTopStackParamList } from '@/models';
import { colors } from '@/theme/colors';

import Styles from './Style';

type Props = StackScreenProps<HomePageTopStackParamList>;
const DeliveryScreen: FC<Props> = ({ navigation, route }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const [expandedTwo, setExpandedTwo] = useState(false);
  const [isSelected, setSelection] = useState(false);

  const toggleExpanded = (): void => {
    setExpanded(!expanded);
  };
  const toggleExpandedTwo = (): void => {
    Alert.alert('call');
    setExpandedTwo(!expandedTwo);
  };

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none'
      }
    });
  }, [navigation]);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const dismissOccur = (): void => {
    navigation.getParent()?.setOptions({
      tabBarStyle: undefined
    });
  };

  return (
    <View>
      <View style={Styles.appBarActionStyle}>
        <TouchableOpacity onPress={handlePresentModalPress}>
          <Image source={require('../../assets/img/Funnel.png')} />
        </TouchableOpacity>
      </View>
      <TopBar navigation={navigation} route={route} />

      <View style={Styles.bottomSheet}>
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
            <CustomCheckBox
              textColSize={10}
              checkBoxColSize={2}
              status={isSelected}
              setCheck={() => {
                setSelection(!isSelected);
              }}
              title="Morning deliveries (8-12pm)"
              titleAlignment={ETitleAlignment.LEFT}
            />
            <CustomCheckBox
              textColSize={10}
              checkBoxColSize={2}
              status={isSelected}
              setCheck={() => {
                setSelection(!isSelected);
              }}
              title="Afternoon deliveries (12-18h)"
              titleAlignment={ETitleAlignment.LEFT}
            />
            <CustomCheckBox
              textColSize={10}
              checkBoxColSize={2}
              status={isSelected}
              setCheck={() => {
                setSelection(!isSelected);
              }}
              title="Evening deliveries (18-12am)"
              titleAlignment={ETitleAlignment.LEFT}
            />
            <CustomCheckBox
              textColSize={10}
              checkBoxColSize={2}
              status={isSelected}
              setCheck={() => {
                setSelection(!isSelected);
              }}
              title="Deliveries"
              titleAlignment={ETitleAlignment.LEFT}
            />
          </Grid>
          <CustomButtonItem txt="Apply" />
        </FilterBottomSheet>
      </View>

      <ScrollView>
        <Grid style={Styles.container}>
          <Row style={[Styles.centerAll, Styles.txtRow]}>
            <Col size={1}>
              <Image source={require('../../assets/img/order-logo.png')} />
            </Col>
            <Col size={10}>
              <TextItem txt={'Pharmacie Sonia Boutin inc'} variant="bodyMedium" />
            </Col>
            <Col size={1}>
              <TouchableOpacity key={1} onPress={toggleExpanded}>
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
              <TextItem
                txt={'9320 Boul St-Laurent, Montréal, QC, H2N 1N7, CA '}
                variant="bodyMedium"
              />
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
            <CustomButtonItem txt="Accept All" type={EButtonType.GreenBtn} />
          </Row>

          {expanded && (
            <>
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
            </>
          )}
          <Row style={[Styles.centerAll, Styles.txtRow]}>
            <Col size={1}>
              <Image source={require('../../assets/img/order-logo.png')} />
            </Col>
            <Col size={10}>
              <TextItem txt={'Pharmacie Proxim Chadi Kabak'} variant="bodyMedium" />
            </Col>
            <Col size={1}>
              <TouchableOpacity onPress={toggleExpandedTwo}>
                {expandedTwo && <ArrowUP />}
                {!expandedTwo && <ArrowDown />}
              </TouchableOpacity>
            </Col>
          </Row>
          <Row style={[Styles.centerAll, Styles.txtRow]}>
            <Col size={1}>
              <Image source={require('../../assets/img/MapPin.png')} />
            </Col>
            <Col size={11}>
              <TextItem
                txt={'9320 Boul St-Laurent, Montréal, QC, H2N 1N7, CA '}
                variant="bodyMedium"
              />
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
            <CustomButtonItem txt="Accept All" type={EButtonType.GreenBtn} />
          </Row>
          {expandedTwo && (
            <>
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
            </>
          )}
        </Grid>
      </ScrollView>
    </View>
  );
};

export default DeliveryScreen;
