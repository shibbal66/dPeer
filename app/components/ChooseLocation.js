import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GOOGLE_MAP_KEY} from '../constants/mapkey';
import AddressPickUp from './AddressPickUp';
//import {ScrollView} from 'react-native-gesture-handler';
AddressPickUp;
const ChooseLocation = () => {
  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <AddressPickUp placeholderText="Enter Pickup Location" />
      <View style={{marginBottom: 16}} />
      <AddressPickUp placeholderText="Enter Destination Location" />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {padding: 24},
});
export default ChooseLocation;
