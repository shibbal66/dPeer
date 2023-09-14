import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {moderateScale} from 'react-native-size-matters';
const CarTypes = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View>
          <Image
            style={styles.regpic}
            source={require('../assets/images/bike.png')}
          />
          <Text style={styles.CarText}>Bike</Text>
        </View>
      </TouchableOpacity>

      <View>
        <Image
          style={styles.regpic}
          source={require('../assets/images/car.png')}
        />
        <Text style={styles.CarText}>Car</Text>
      </View>
      <View>
        <Image
          style={styles.regpic}
          source={require('../assets/images/car.png')}
        />
        <Text style={styles.CarText}>Car Ac</Text>
      </View>
    </View>
  );
};

export default CarTypes;

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(88),
    height: responsiveHeight(10),

    flexDirection: 'row',

    // backgroundColor: 'red',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(34),
    marginBottom: moderateScale(12),
  },
  regpic: {
    width: moderateScale(65),
    height: moderateScale(52),
  },
  CarText: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '600',
    paddingHorizontal: moderateScale(13),
  },
});
