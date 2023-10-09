import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {moderateScale} from 'react-native-size-matters';
import {mode} from 'native-base/lib/typescript/theme/tools';
const MyCar = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.regpic}
            source={require('../assets/images/bike.png')}
          />
          <Text style={styles.CarText}>Bike</Text>
        </View>
        <View>
          <Text style={styles.DetailText}>Honda Civic</Text>
          <Text style={styles.DetailText1}>LEX 1234</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MyCar;

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(88),
    height: responsiveHeight(10),

    //flexDirection: 'row',
    flexDirection: 'row',
    // backgroundColor: 'red',
    // alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(34),
    marginBottom: moderateScale(1),
    // marginTop: moderateScale(8),
    marginLeft: moderateScale(20),
  },
  regpic: {
    width: moderateScale(55),
    height: moderateScale(40),
    marginTop: moderateScale(7),
  },
  CarText: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '700',
    paddingHorizontal: moderateScale(10),
  },
  DetailText: {
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
    paddingHorizontal: moderateScale(10),
    marginRight: moderateScale(30),
    marginTop: moderateScale(15),
  },
  DetailText1: {
    fontSize: responsiveFontSize(2),
    fontWeight: '500',
    paddingHorizontal: moderateScale(10),
    marginRight: moderateScale(30),
  },
});
