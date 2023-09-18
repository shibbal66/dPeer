import {View, Text, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {moderateScale} from 'react-native-size-matters';
const PlaceRow = ({data}) => {
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        <MaterialIcons
          name="location-pin"
          color={'#50478f'}
          width={responsiveWidth(7)}
          height={responsiveHeight(4.5)}
          style={{fontSize: moderateScale(23)}}
        />
      </View>
      <Text style={styles.locationText}>
        {data.description || data.vicinity}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: responsiveHeight(0.2),
    //position: 'absolute',
    // backgroundColor: 'red',
  },
  iconContainer: {
    backgroundColor: 'white',
    padding: 2,
    borderRadius: moderateScale(10),
    marginRight: 15,
  },
  locationText: {},
});
export default PlaceRow;
