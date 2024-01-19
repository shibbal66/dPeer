import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  useResponsiveHeight,
} from 'react-native-responsive-dimensions';
const FindingPool = () => {
  return (
    <View>
      <View style={styles.mapImg}></View>
      <Image
        style={{
          width: responsiveWidth(100),
          height: responsiveWidth(210),
          // marginLeft: responsiveWidth(),
        }}
        resizeMode="contain"
        source={require('../assets/images/mapimg.png')}
      />
      <View style={styles.findingDrivers}>
        <View
          style={{
            backgroundColor: '#50478F',
            width: responsiveWidth(15),
            height: responsiveHeight(0.5),
            marginHorizontal: responsiveWidth(2),
          }}></View>
        <View
          style={{
            backgroundColor: '#50478F',
            width: responsiveWidth(40),
            height: responsiveHeight(0.5),
            marginHorizontal: responsiveWidth(88),
          }}></View>
        <View
          style={{
            backgroundColor: '#50478F',
            width: responsiveWidth(38),
            height: responsiveHeight(0.5),
            marginHorizontal: responsiveWidth(38),
            bottom: 6,
          }}></View>
        <Text
          style={{
            color: '#50478F',
            fontSize: 28,
            textAlign: 'center',
            marginTop: responsiveHeight(6),
          }}>
          Finding Nearby Drivers
        </Text>
      </View>
    </View>
  );
};

export default FindingPool;

const styles = StyleSheet.create({
  mapImg: {
    width: responsiveWidth(100),
    // height: responsiveHeight(),
  },
  findingDrivers: {
    backgroundColor: 'white',
    width: responsiveWidth(100),
    height: responsiveHeight(15),
    position: 'absolute',
    marginTop: responsiveHeight(83),
  },
});
