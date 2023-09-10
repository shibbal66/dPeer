//aa
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GOOGLE_MAP_KEY} from '../constants/mapkey';
import {TextInput} from 'react-native-gesture-handler';
import {moderateScale} from 'react-native-size-matters';
const AddressPickUp = ({placeholderText}) => {
  return (
    <GooglePlacesAutocomplete
      placeholder={placeholderText}
      nearbyPlacesAPI="GooglePlacesSearch"
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyAil4JimP2Tu2dVjgAFOX3A_dNre9d1W5Y',
        language: 'en',
      }}
      styles={{
        textInputContainer: styles.containerStyle,
        TextInput: styles.textinputt,
      }}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textinputt: {},
  containerStyle: {
    borderRadius: moderateScale(114),
    //borderStyle: 'dotted',
  },
});
export default AddressPickUp;
