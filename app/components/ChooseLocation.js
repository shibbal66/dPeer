import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAP_KEY} from '../constants/mapkey';
import AddressPickUp from './AddressPickUp';
//import {ScrollView} from 'react-native-gesture-handler';
AddressPickUp;
const ChooseLocation = () => {
  return (
    <SafeAreaView>
      {/* <AddressPickUp placeholderText="Enter Pickup Location" /> */}

      <AddressPickUp placeholderText="Enter Destination Location" />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});
export default ChooseLocation;
