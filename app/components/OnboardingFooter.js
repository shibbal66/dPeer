import React from 'react';
import {Text, Image, View, TouchableOpacity, StyleSheet} from 'react-native';

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
import {FontSize, FontFamily, FontFamily2} from '../components/GlobalStyles';

import NavigationStrings from '../constants/NavigationStrings';

const OnboardingFooter = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.FooterBtns}>
      <View style={styles.rightFooter}>
        <TouchableOpacity
          onPress={() => navigation.navigate(NavigationStrings.ONBOARDING2)}
          style={styles.EllipseIcon}>
          <Image
            style={{width: responsiveWidth(16), height: responsiveWidth(18)}}
            resizeMode="contain"
            source={require('../assets/images/ellipse-3.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(props.screen)}
          style={styles.iconPosition}>
          <Image
            style={{
              width: responsiveWidth(12),

              height: responsiveWidth(12),
            }}
            resizeMode="contain"
            source={require('../assets/images/double-right.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.leftFooter}>
        <TouchableOpacity
          style={[styles.closeIcon]}
          onPress={() => navigation.navigate(props.screen2)}>
          <Image
            style={{width: responsiveWidth(6), height: responsiveWidth(8)}}
            resizeMode="contain"
            source={require('../assets/images/close.png')}
          />
          <Text style={[styles.skip]}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  FooterBtns: {
    width: responsiveWidth(100),
    height: responsiveHeight(10),
    flexDirection: 'row-reverse',
    alignItems: 'center',

    justifyContent: 'space-evenly',
  },
  rightFooter: {
    width: '50%',
    height: moderateVerticalScale(99),
    alignItems: 'center',
  },
  leftFooter: {
    width: '50%',
    height: moderateVerticalScale(99),
    alignItems: 'center',

    // backgroundColor: 'green',
  },
  skip: {
    color: 'grey',
    fontSize: responsiveFontSize(2.5),
    marginLeft: moderateScale(7),
    paddingTop: moderateVerticalScale(2.2),
    fontFamily: FontFamily.ponnala,
  },
  closeIcon: {
    flexDirection: 'row',
    marginTop: moderateScale(40),
    marginRight: moderateScale(75),
  },
  EllipseIcon: {
    // width: responsiveWidth(23),
    // height: responsiveHeight(95),
    // top: responsiveHeight(2),
    marginRight: moderateScale(29),
    marginTop: moderateVerticalScale(20),
    alignSelf: 'flex-end',
  },
  iconPosition: {
    // width: moderateScale(10),
    // height: moderateVerticalScale(5), // 80% of screen width
    // left: responsiveWidth(32.4),
    alignSelf: 'flex-end',
    paddingHorizontal: moderateScale(34),
    marginTop: moderateVerticalScale(32),
    position: 'absolute',
  },
});
export default OnboardingFooter;
9;
