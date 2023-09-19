import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChooseLocation from './ChooseLocation';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import CarTypes from './CarTypes';
import React, {useState} from 'react';
import Button from './Button';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {moderateScale} from 'react-native-size-matters';
import DateTimePick from './DateTimePick';
const Tab = createBottomTabNavigator();

const PoolView = () => {
  const [Bottomtab, setBottomTab] = useState(0);
  //const Tab = createBottomTabNavigator();

  return (
    <View style={styles.bootomSheet}>
      <View style={styles.upperBotm}>
        <TouchableOpacity
          style={{
            width: responsiveWidth(39),
            height: responsiveHeight(6.5),
            borderRadius: moderateScale(35),
            backgroundColor: Bottomtab == 0 ? '#eee' : '#50478f',
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => {
            setBottomTab(0);
          }}>
          <AntDesign
            name="car"
            color={Bottomtab == 0 ? '#50478f' : '#edebebf5'}
            width={responsiveWidth(8)}
            height={responsiveHeight(3.2)}
            style={{fontSize: moderateScale(21)}}
          />
          <Text
            style={{
              color: Bottomtab == 0 ? '#50478f' : '#edebebf5',
              fontSize: responsiveFontSize(2),
              fontWeight: 700,
            }}>
            Find Pool
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: responsiveWidth(39),
            height: responsiveHeight(6.5),
            borderRadius: moderateScale(35),
            backgroundColor: Bottomtab == 1 ? '#eee' : '#50478f',
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => {
            setBottomTab(1);
          }}>
          <MaterialIcons
            name="emergency-share"
            color={Bottomtab == 1 ? '#50478f' : '#edebebf5'}
            width={responsiveWidth(7)}
            height={responsiveHeight(4.5)}
            style={{fontSize: moderateScale(23)}}
          />
          <Text
            style={{
              color: Bottomtab == 1 ? '#50478f' : '#edebebf5',
              fontSize: responsiveFontSize(2),
              fontWeight: 700,
            }}>
            Offer Pool
          </Text>
        </TouchableOpacity>
      </View>
      {Bottomtab == 0 ? (
        <View
          style={{
            zIndex: 0,
            backgroundColor: '#edebebf5',
            borderRadius: moderateScale(35),
            width: responsiveWidth(88),
          }}>
          <CarTypes />

          <ChooseLocation />
          <DateTimePick />

          <Button text={'Find Pool'} />
        </View>
      ) : (
        <View
          style={{
            zIndex: 0,
            backgroundColor: '#edebebf5',
            borderRadius: moderateScale(35),
          }}>
          {/* <CarTypes /> */}
          <ChooseLocation />
          <Button text={'Offer Pool'} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  bootomSheet: {
    width: responsiveWidth(88),
    height: responsiveHeight(50),
    zIndex: 0,
    backgroundColor: '#eee',

    borderRadius: moderateScale(35),
  },
  upperBotm: {
    zIndex: 0,
    width: responsiveWidth(88),
    alignItems: 'center',
    height: responsiveHeight(8.5),
    backgroundColor: '#50478f',
    justifyContent: 'center',
    borderRadius: moderateScale(35),
    flexDirection: 'row',
  },
});

export default PoolView;
