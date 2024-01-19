import React, {useState, useEffect} from 'react';
import {View, TextInput, SafeAreaView, StyleSheet, Modal} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import NavigationStrings from '../constants/NavigationStrings';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CustomBtn from '../components/CustomBtn';

import {moderateScale} from 'react-native-size-matters';
import PlaceRow from '../components/PlaceRow';
import {mode} from 'native-base/lib/typescript/theme/tools';

const homePlace = {
  description: 'Home',
  geometry: {location: {lat: 48.8152937, lng: 2.4597668}},
};
const workPlace = {
  description: 'Work',
  geometry: {location: {lat: 48.8496818, lng: 2.2940881}},
};

const DestinationSearch = ({placheholderText, fetchAddress}) => {
  const onPressAddress = (data, details) => {
    // console.log("details==>>>>", details)

    // let resLength = details.address_components
    // let zipCode = ''

    // let filtersResCity = details.address_components.filter(val => {
    //     if (val.types.includes('locality') || val.types.includes('sublocality')) {
    //         return val
    //     }
    //     if (val.types.includes('postal_code')) {
    //         let postalCode = val.long_name
    //         zipCode = postalCode
    //     }
    //     return false
    // })

    // let dataTextCityObj = filtersResCity.length > 0
    //     ? filtersResCity[0] :
    //     details.address_components[
    //     resLength > 1 ? resLength - 2 : resLength - 1
    //     ];

    // let cityText =
    //     dataTextCityObj.long_name && dataTextCityObj.long_name.length > 17
    //         ? dataTextCityObj.short_name
    //         : dataTextCityObj.long_name;

    // // console.log("zip cod found", zipCode)
    // console.log('details=========>', details);
    fetchAddress();
    const lat = details.geometry.location.lat;
    const lng = details.geometry.location.lng;
    fetchAddress(lat, lng);
  };

  // useEffect(() => {
  //   checkNavigation();
  // }, [originPlace, destinationPlace]);

  return (
    // <SafeAreaView style={styles.container}>
    <View style={styles.autocompleteContainer}>
      <GooglePlacesAutocomplete
        placeholder={placheholderText}
        onPress={onPressAddress}
        fetchDetails={true}
        enablePoweredByContainer={false}
        suppressDefaultStyles
        currentLocation={true}
        // currentLocationLabel="Current location"
        styles={{
          textInput: styles.textInput,

          listView: styles.listView,
          separator: styles.separator,
        }}
        // query={{
        //   key: 'AIzaSyAil4JimP2Tu2dVjgAFOX3A_dNre9d1W5Y',
        //   language: 'en',
        // }}
        query={{
          key: 'AIzaSyAil4JimP2Tu2dVjgAFOX3A_dNre9d1W5Y', // Replace with your Google Maps API key
          language: 'en',
          location: '31.51327943796107, 74.38381542677314', // Replace with the latitude and longitude of your specific area
          radius: 30000, // Adjust the radius (in meters) as needed
        }}
        renderRow={data => <PlaceRow data={data} />}
        renderDescription={data => data.description || data.vicinity}
        // predefinedPlaces={[homePlace, workPlace]}
      />
    </View>
    //</SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(99),
    width: responsiveWidth(94),
    backgroundColor: 'red',

    //backgroundColor: 'black',
    zIndex: 1,
    borderRadius: 10,
    marginTop: 60,
    //position: 'absolute',
  },
  textInput: {
    padding: moderateScale(7),
    //backgroundColor: 'green',
    marginVertical: moderateScale(1),
    marginLeft: moderateScale(10),
  },

  separator: {
    backgroundColor: '#efefef',
    height: 1,
  },
  listView: {
    marginTop: responsiveHeight(8),

    height: responsiveHeight(32),
    // backgroundColor: '#eee',
    // position: 'absolute',
    width: responsiveWidth(87),
    //backgroundColor: 'yellow',
  },
  listView2: {
    width: responsiveWidth(83),
    marginTop: responsiveHeight(8),
    height: responsiveHeight(30),
    // backgroundColor: 'blue',
    position: 'absolute',
    //backgroundColor: 'blue',
  },
  autocompleteContainer: {
    marginTop: responsiveHeight(1),
    marginLeft: responsiveWidth(6),
    marginRight: responsiveWidth(6),
    width: responsiveWidth(84),
    height: responsiveHeight(6),
    borderRadius: moderateScale(15),
    // backgroundColor: 'blue',
  },
});
export default DestinationSearch;
