import React, {useState, useEffect} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  useResponsiveHeight,
} from 'react-native-responsive-dimensions';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import NavBar from '../components/NavBar';
const icon = <FontAwesome6 name={'comments'} />;
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Maps from '../components/Maps';
import PoolView from '../components/PoolView';
const Tab = createBottomTabNavigator();
var iconHeight = 26;
var iconWidth = 29;

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Maps />
      <View style={styles.ViewPool}>
        <PoolView />
      </View>
      <View style={styles.NavView}>
        <NavBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
  },
  NavView: {
    position: 'absolute',
  },
  ViewPool: {
    position: 'absolute',
    bottom: responsiveHeight(9),
  },
});

export default HomeScreen;
