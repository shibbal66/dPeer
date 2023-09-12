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
          <Text>Bike</Text>
        </View>
      </TouchableOpacity>

      <View>
        <Image
          style={styles.regpic}
          source={require('../assets/images/car.png')}
        />
        <Text>Car</Text>
      </View>
      <View>
        <Image
          style={styles.regpic}
          source={require('../assets/images/car.png')}
        />
        <Text>Car Ac</Text>
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

    backgroundColor: 'red',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(30),
  },
  regpic: {
    width: moderateScale(70),
    height: moderateScale(),
  },
});
