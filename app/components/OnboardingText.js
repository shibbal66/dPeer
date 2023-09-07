import {View, Text, StyleSheet} from 'react-native';
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
import {FontSize, FontFamily, FontFamily2} from '../components/GlobalStyles';

const OnboardingText = props => {
  return (
    <View style={styles.TextView}>
      <Text style={styles.confirmYourRide}>{props.text1}</Text>

      <Text style={[styles.withConfirmYourride]}>{props.text2}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  TextView: {
    width: responsiveWidth(100),
    height: responsiveHeight(20),
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  confirmYourRide: {
    top: responsiveWidth(8),

    fontSize: responsiveFontSize(3.8),
    color: 'rgba(0, 0, 0, 0.84)',

    fontFamily: FontFamily.ponnala,
  },
  withConfirmYourride: {
    width: responsiveWidth(73),
    top: responsiveWidth(9),

    fontSize: responsiveFontSize(2.5),
    color: 'rgba(0, 0, 0, 0.62)',
    textAlign: 'center',

    fontFamily: FontFamily.ponnala,
  },
});
export default OnboardingText;
