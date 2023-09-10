import React, {useState, useEffect} from 'react';
import {StyleSheet, View, PermissionsAndroid} from 'react-native';
// import Geolocation from '@react-native-community/geolocation';

import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

const Maps = () => {
  const [mLat, setmLat] = useState(0);
  const [mLong, setmLong] = useState(0);
  const [screenText, setScreenText] = useState('Press a button');
  const [Bottomtab, setBottomTab] = useState(0);
  const changeText = text => {
    console.log(text + ' has been pressed');
    setScreenText(text);
  };
  useEffect(() => {
    requestCameraPermission();
  }, []);
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
        setmLat(position.coords.latitude);
        setmLong(position.coords.longitude);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };
  return (
    // <View style={styles.Mapscontainer}>
    <MapView
      provider={PROVIDER_GOOGLE}
      style={{width: '100%', height: '100%'}}
      initialRegion={{
        latitude: 30.230722255105633,
        longitude: 71.5174780752946,
        latitudeDelta: 0.5,
        longitudeDelta: 0.4,
      }}
      zoomEnabled={true}
      showsUserLocation={true}>
      {/* showsMyLocationButton={true} */}
      <Marker coordinate={{latitude: mLat, longitude: mLong}} />
    </MapView>
    //</View>
    // </View>
  );
};

const styles = StyleSheet.create({
  Mapscontainer: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
});

export default Maps;
