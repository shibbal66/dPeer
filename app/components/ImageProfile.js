import {StyleSheet, Text, View, Image} from 'react-native';
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
const ImageProfile = () => {
  return (
    <View style={styles.centerView}>
      <Image
        style={styles.Onboarding1Child}
        source={require('../assets/images/ellipse-2.png')}
      />

      <Image
        style={styles.screenshot1471}
        source={require('../assets/images/profile3.png')}
      />
      <View style={styles.TextView}>
        <Text style={styles.TextStyle}>Shibbal Farooq</Text>
      </View>
      <Image
        style={styles.rating}
        source={require('../assets/images/rating.png')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  centerView: {
    width: responsiveWidth(100),
    height: responsiveHeight(24),
    justifyContent: 'flex-start',
    // backgroundColor: 'brown',
  },
  Onboarding1Child: {
    resizeMode: 'contain',

    position: 'relative',
    width: responsiveWidth(32), // 80% of screen width
    height: responsiveWidth(32), // 30% of screen height
    alignSelf: 'center',
  },
  screenshot1471: {
    resizeMode: 'contain',
    position: 'absolute',
    // Adjust the vertical position of the second image as per your requirement
    width: responsiveWidth(28), // Adjust the width of the second image as per your requirement
    height: responsiveWidth(28),
    alignSelf: 'center',
    top: responsiveHeight(0.9),
  },
  rating: {
    resizeMode: 'contain',
    position: 'absolute',
    // Adjust the vertical position of the second image as per your requirement
    width: responsiveWidth(28), // Adjust the width of the second image as per your requirement
    height: responsiveWidth(28),
    alignSelf: 'center',
    top: responsiveHeight(13),
  },
  TextView: {},
  TextStyle: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: '500',
    alignSelf: 'center',
  },
});
export default ImageProfile;
