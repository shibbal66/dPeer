import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAP_KEY} from '../constants/mapkey';
import DestinationSearch from './DestinationSearch';
//import {ScrollView} from 'react-native-gesture-handler';

const ChooseLocation = () => {
  return <DestinationSearch />;
};
const styles = StyleSheet.create({});
export default ChooseLocation;
