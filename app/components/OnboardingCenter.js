import {View, Image, StyleSheet} from 'react-native';
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
const OnbordingCenter = props => {
  return (
    <View style={styles.centerView}>
      <Image
        style={styles.Onboarding1Child}
        source={require('../assets/images/ellipse-2.png')}
      />
      <Image
        style={styles.Onboarding1Item}
        source={require('../assets/images/ellipse-1.png')}
      />
      <Image style={styles.screenshot1471} source={props.centerImage} />
    </View>
  );
};
const styles = StyleSheet.create({
  centerView: {
    width: responsiveWidth(100),
    height: responsiveHeight(43),
    alignItems: 'center',
    // backgroundColor: 'red',
    justifyContent: 'center',
  },
  Onboarding1Child: {
    resizeMode: 'contain',
    position: 'relative',
    width: responsiveWidth(85), // 80% of screen width
    height: responsiveWidth(85), // 30% of screen height
  },
  Onboarding1Item: {
    position: 'absolute',
    // Adjust the vertical position of the second image as per your requirement
    width: responsiveWidth(71.5), // Adjust the width of the second image as per your requirement
    height: responsiveWidth(70.5),
  },
  screenshot1471: {
    position: 'absolute',
    // Adjust the vertical position of the second image as per your requirement
    width: responsiveWidth(60), // Adjust the width of the second image as per your requirement
    height: responsiveWidth(60),
  },
});
export default OnbordingCenter;
