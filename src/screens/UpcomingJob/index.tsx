/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { type FC, useState } from 'react';
import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { Divider } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { type StackScreenProps } from '@react-navigation/stack';
import Moment from 'moment';

import { EButtonType } from '@/app-enum';
import { ArrowDown, ArrowUP, CalendarBlank, MapPin } from '@/assets';
import { TextItem } from '@/components';
import CustomButtonItem from '@/components/Button';
import {
  type HomePageTopStackParamList,
  type IUpcomingJob,
  type IUpcomingJobExpandedListItem
} from '@/models';
import { type RootState } from '@/store';
import {
  useGetUpcomingJobListingByDriverIdQuery,
  useGetUpcomingJobsByDriverIdQuery
} from '@/store/apis/UpcomingJobApi';
import { colors } from '@/theme/colors';

import Styles from './Style';

interface UpcomingJobExpandedListProps {
  item: IUpcomingJobExpandedListItem;
  // navigation: StackScreenProps<HomePageTopStackParamList>;
}

interface UpcomingJobDetaiListProps {
  item: IUpcomingJob;
  // navigation: StackScreenProps<HomePageTopStackParamList>;
}

const UpcomingJobExpandedList: FC<UpcomingJobExpandedListProps> = ({
  item
}: UpcomingJobExpandedListProps) => {
  return (
    <View>
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
            <TextItem txt={`$ ${item.ride_fare}`} color={colors.white} />
          </View>
        </Col>
      </Row>
      <Row style={[Styles.centerAll, Styles.txtRow]}>
        <Col size={1}>
          <MapPin />
        </Col>
        <Col size={11}>
          <TextItem txt={`${item?.pick_up_location}`} variant="bodyMedium" />
        </Col>
      </Row>
      <Row style={[Styles.centerAll, Styles.txtRow]}>
        <Col size={1}>
          <CalendarBlank />
        </Col>
        <Col size={11}>
          <TextItem
            txt={`${Moment(item?.jobTimingObj?.endDateTime).format('d MMM, yyy')}, before ${Moment(
              item?.jobTimingObj?.endDateTime
            ).format('hh:mm A')} `}
            fontWeight="bold"
            variant="bodyMedium"
          />
        </Col>
      </Row>
      <Row style={Styles.btnRow}>
        <CustomButtonItem
          txt={`Take Ownership. ${item.estimate_distance} km Away`}
          type={EButtonType.WhiteBtn}
        />
      </Row>
    </View>
  );
};

const UpcomingJobDetaiList: FC<UpcomingJobDetaiListProps> = ({
  item
}: UpcomingJobDetaiListProps) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = (): void => {
    setExpanded(!expanded);
  };
  const id = useSelector((state: RootState) => state.users.user.data?._id);
  const { data, isLoading, isError } = useGetUpcomingJobListingByDriverIdQuery({
    driverId: id ?? '',
    userId: item?._id
  });

  let renderEl;

  if (isError) {
    // Alert.alert(`${error}`)
    // console.log(error)
    renderEl = (
      <View>
        <Text>Error</Text>
      </View>
    );
  } else if (isLoading) {
    // Alert.alert('Loading...');
  } else {
    if (data?.code === 400) {
      Alert.alert(`${data?.message ?? ''}`);
      // console.log('Error', data);
    } else {
      // Alert.alert(`${data?.result}`);
      // console.log('Upcoming jobs listing', data);
      renderEl = (
        <FlatList
          data={data?.result}
          renderItem={({ item }) => (
            <View>
              <UpcomingJobExpandedList item={item} />
              <Divider style={Styles.dividerShortStyle} />
            </View>
          )}
          keyExtractor={item => `${item._id}`}
        />
      );
    }
  }
  return (
    <View>
      <Row style={[Styles.centerAll, Styles.txtRow]}>
        <Col size={1}>
          <CalendarBlank />
        </Col>
        <Col size={10}>
          <TextItem txt={item?.pharmacy_name} variant="bodyMedium" fontWeight="bold" />
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
          <MapPin />
          {/* <Image source={item.profile_img}/> */}
          {/* <Image source={{
            uri: item.profile_img,
          }} /> */}
        </Col>
        <Col size={11}>
          <TextItem txt={item?.location} variant="bodyMedium" />
        </Col>
      </Row>
      <Row style={[Styles.centerAll, Styles.txtRow]}>
        <Col size={3}>
          <TextItem
            txt={`${item.delivery_count} Deliveries `}
            color={colors.blue}
            variant="bodyMedium"
          />
        </Col>
        <Col size={9}>
          <TextItem txt={`${item.pickup_count} Pickup`} color={colors.pink} variant="bodyMedium" />
        </Col>
      </Row>
      <Row style={Styles.btnRow}>
        <CustomButtonItem
          txt="Take All Ownership"
          type={EButtonType.GreenBtn}
          // pressFunction={() => {
          //   //navigation.navigation.navigate(Routes.DELIVERYJOBS);
          // }}
        />
      </Row>
      <Divider />

      {expanded && <View style={Styles.expandedContainer}>{renderEl}</View>}
    </View>
  );
};

// interface IUpcomingJobsdata{

// }

type UpcommingJobScreenProps = StackScreenProps<HomePageTopStackParamList>;
const UpcomingJob: FC<UpcommingJobScreenProps> = () => {
  const id = useSelector((state: RootState) => state.users.user.data?._id);
  const { data, isLoading, isError } = useGetUpcomingJobsByDriverIdQuery(id ?? '');

  let renderEl;
  if (isError) {
    // Alert.alert(`${error}`)
    renderEl = (
      <View>
        <Text>Error</Text>
      </View>
    );
  } else if (isLoading) {
    Alert.alert('Loading...');
    // renderEl = <View><Text>Error</Text></View>
  } else {
    if (data?.code === 400) {
      Alert.alert(`${data?.message ?? 'No message'}`);
      // console.log('Upcoming jobs', data);
    } else {
      // Alert.alert(`${data != null || []}`);
      // console.log('Upcoming jobs', data);
      renderEl = (
        <FlatList
          data={data?.result}
          renderItem={({ item }) => (
            <Grid style={Styles.container}>
              <UpcomingJobDetaiList item={item} />
            </Grid>
          )}
          keyExtractor={item => `${item._id}`}
        />
      );
    }
  }

  return <View style={Styles.mainContainer}>{renderEl}</View>;
};

export default UpcomingJob;
