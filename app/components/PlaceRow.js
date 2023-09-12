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
        {data.description === 'Home' ? (
          <MaterialIcons
            name="home"
            color={'white'}
            width={responsiveWidth(7)}
            height={responsiveHeight(4.5)}
            style={{fontSize: moderateScale(23)}}
          />
        ) : (
          <MaterialIcons
            name="location-pin"
            color={'white'}
            width={responsiveWidth(7)}
            height={responsiveHeight(4.5)}
            style={{fontSize: moderateScale(23)}}
          />
        )}
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
    marginVertical: 10,
  },
  iconContainer: {
    backgroundColor: '#a2a2a2',
    padding: 5,
    borderRadius: 50,
    marginRight: 15,
  },
  locationText: {},
});
export default PlaceRow;
