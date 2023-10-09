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
const RegLogo = () => {
  return (
    <View style={styles.logoView}>
      <Image
        style={{
          justifyContent: 'center',
          width: responsiveWidth(110),
          height: responsiveHeight(19),
        }}
        source={require('../assets/images/dpeer-main-logo-2400x1800-1.png')}
        resizeMode="contain"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  logoView: {
    width: responsiveWidth(100),
    height: responsiveHeight(12),
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'black',
  },
});
export default RegLogo;
