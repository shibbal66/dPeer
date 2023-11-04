import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  useResponsiveHeight,
} from 'react-native-responsive-dimensions';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import NavigationStrings from '../constants/NavigationStrings';
import {mode} from 'native-base/lib/typescript/theme/tools';
import Popup from '../components/Popup';
const MyTrips = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Popup />
    </SafeAreaView>
  );
};

export default MyTrips;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  upperView: {
    width: responsiveWidth(100),
    height: responsiveHeight(30),
    // backgroundColor: 'red',
  },
  bottomView: {
    width: responsiveWidth(100),
    height: responsiveHeight(65),
    borderRadius: moderateScale(35),
    // backgroundColor: 'green',
    padding: moderateScale(25),
  },
  tabView: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    paddingHorizontal: responsiveWidth(2),
    paddingVertical: responsiveHeight(1),
    width: responsiveWidth(90),
    height: responsiveHeight(10),
    borderRadius: moderateScale(15),
    alignItems: 'center',
  },
  text1: {
    fontSize: responsiveFontSize(2.4),
    marginBottom: responsiveHeight(1.5),
    fontWeight: '600',
  },
  text2: {
    marginTop: responsiveHeight(4.5),
    marginLeft: -responsiveWidth(22),
  },
});
