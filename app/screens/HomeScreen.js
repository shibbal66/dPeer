import React, {useState, useEffect, useRef} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  PermissionsAndroid,
  Platform,
  Image,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import CarTypes from '../components/CarTypes';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import NavigationStrings from '../constants/NavigationStrings';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MapViewDirections from 'react-native-maps-directions';
import {locationPermission, getCurrentLocation} from '../helper/helperFunction';
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
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import NavBar from '../components/NavBar';
const icon = <FontAwesome6 name={'comments'} />;
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Maps from '../components/Maps';
import DateTimePick from '../components/DateTimePick';
import WhereTo from '../screens/WhereTo';
import MyCar from '../components/MyCar';
import Popup from '../components/Popup';
const Tab = createBottomTabNavigator();

const HomeScreen = ({navigation}) => {
  const GOOGLE_MAPS_APIKEY = 'AIzaSyAil4JimP2Tu2dVjgAFOX3A_dNre9d1W5Y';

  useEffect(() => {
    getLiveLocation();
  }, []);
  const getLiveLocation = async () => {
    const locPermissionDenied = await locationPermission();
    if (locPermissionDenied) {
      const {latitude, longitude, heading} = await getCurrentLocation();
      console.log('get live location after 4 second', heading);
      animate(latitude, longitude);
      updateState({
        heading: heading,
        curLoc: {latitude, longitude},
        coordinate: new AnimatedRegion({
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }),
      });
      console.log('location h re', res);
    }
  };
  const origin = {
    latitude: 31.40349,
    longitude: 74.235468,
  };
  const destination = {
    latitude: 31.46411802593727,
    longitude: 74.4119759443327,
  };
  const [mLat, setmLat] = useState(0);
  const [mLong, setmLong] = useState(0);
  const [screenText, setScreenText] = useState('Press a button');
  const [Bottomtab, setBottomTab] = useState(0);
  const [showPopup, setShowPopup] = useState(true); // State variable for Popup visibility

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
  useEffect(() => {
    if (Platform.OS === 'android') {
      requestCameraPermission();
    } else {
      Geolocation.requestAuthorization();
    }
  }, []);

  // const getLocation = () => {
  //   Geolocation.getCurrentPosition(
  //     position => {
  //       console.log(position);
  //       setmLat(position.coords.latitude);
  //       setmLong(position.coords.longitude);
  //     },
  //     error => {
  //       // See error code charts below.
  //       console.log(error.code, error.message);
  //     },
  //     {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  //   );
  // };
  const mapRef = useRef(null);
  const [state, setstate] = useState({
    startingCords: {
      latitude: 0,
      longitude: 0,
    },
    destinationCords: {
      latitude: 0,
      longitude: 0,
    },
  });
  const {startingCords, destinationCords} = state;

  const goToSearch = () => {
    navigation.navigate(NavigationStrings.CHOOSELOCATION, {
      getCordinates: fetchValue,
    });
  };
  const handleFindPoolPress = () => {
    navigation.navigate(NavigationStrings.FINDINGPOOL);
  };

  //const Tab = createBottomTabNavigator();
  const handleFindpool = () => {
    {
    }
    console.warn('shibbal');
  };
  const fetchValue = data => {
    setstate({
      ...state,
      startingCords: {
        latitude: data.pickupCords.latitude,
        longitude: data.pickupCords.longitude,
      },
      destinationCords: {
        latitude: data.destinationCords.latitude,
        longitude: data.destinationCords.longitude,
      },
    });
    console.log('fetchValue======>', data);
  };
  const [heightTop, setHeightTop] = useState(260);
  const scrollViewRef = useRef(null);

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS == 'ios' ? -100 : 21}
      enabled={Platform.OS === 'ios' ? true : true}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={{flex: 1}}
        bounces={false}
        keyboardShouldPersistTaps="handled" // Add this line
      >
        <View style={styles.container}>
          <MapView
            ref={mapRef}
            style={{width: responsiveWidth(100), height: responsiveHeight(38)}}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: 31.40349,
              longitude: 74.235468,
              latitudeDelta: 0.5,
              longitudeDelta: 0.4,
            }}
            zoomEnabled={true}
            showsCompass={true}
            showsMyLocationButton={true}>
            <Marker coordinate={startingCords}>
              <Image
                style={{width: 50, height: 50, resizeMode: 'contain'}}
                source={require('../assets/images/topcar2.png')}
              />
            </Marker>
            {Object.keys(destination).length > 0 && (
              <Marker coordinate={startingCords}>
                <Image
                  style={{width: 50, height: 50, resizeMode: 'contain'}}
                  source={require('../assets/images/greenMarker.png')}
                />
              </Marker>
            )}
            <Marker coordinate={destination} />
            <Marker
              coordinate={startingCords}
              title="Starting Point"
              description="Your starting location">
              <Image
                style={{width: 50, height: 50, resizeMode: 'contain'}}
                source={require('../assets/images/topcar2.png')}
              />
            </Marker>
            {/* <Marker
              coordinate={destination}
              title="Ending Point"
              description="Your destination location">
              <Image
                style={{width: 50, height: 50, resizeMode: 'contain'}}
                source={require('../assets/images/Oval.png')}
              />
            </Marker> */}

            {Object.keys(destinationCords).length > 0 && (
              <MapViewDirections
                origin={startingCords}
                destination={destinationCords}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={4}
                strokeColor="#50478f"
                optimizeWaypoints={true}
                // waypoints={['31.4204,74.2587']}
                onReady={result => {
                  // console.log(`Distance: ${result.distance} km`);
                  // console.log(`Duration: ${result.duration} min.`);
                  mapRef.current.fitToCoordinates(result.coordinates, {
                    edgePadding: {
                      right: 30,
                      bottom: 200,
                      left: 40,
                      top: 100,
                    },
                    animated: true, // You can set animated to false if you don't want a smooth animation
                    zoom: 7,
                  });
                }}
              />
            )}
          </MapView>
          <Image source={require('../assets/images/mapimg.png')} />
          <View style={styles.ViewPool}>
            <View style={styles.bootomSheet}>
              <View style={styles.upperBotm}>
                <TouchableOpacity
                  style={{
                    width: responsiveWidth(39),
                    height: responsiveHeight(6.5),
                    borderRadius: moderateScale(35),
                    backgroundColor: Bottomtab == 0 ? '#eee' : '#50478f',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    setBottomTab(0);
                  }}>
                  <AntDesign
                    name="car"
                    color={Bottomtab == 0 ? '#50478f' : '#edebebf5'}
                    width={responsiveWidth(8)}
                    height={responsiveHeight(3.2)}
                    style={{fontSize: moderateScale(21)}}
                  />
                  <Text
                    style={{
                      color: Bottomtab == 0 ? '#50478f' : '#edebebf5',
                      fontSize: responsiveFontSize(2),
                      fontWeight: 700,
                    }}>
                    Find Pool
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: responsiveWidth(39),
                    height: responsiveHeight(6.5),
                    borderRadius: moderateScale(35),
                    backgroundColor: Bottomtab == 1 ? '#eee' : '#50478f',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    setBottomTab(1);
                  }}>
                  <MaterialIcons
                    name="emergency-share"
                    color={Bottomtab == 1 ? '#50478f' : '#edebebf5'}
                    width={responsiveWidth(7)}
                    height={responsiveHeight(4.5)}
                    style={{fontSize: moderateScale(23)}}
                  />
                  <Text
                    style={{
                      color: Bottomtab == 1 ? '#50478f' : '#edebebf5',
                      fontSize: responsiveFontSize(2),
                      fontWeight: 700,
                    }}>
                    Offer Pool
                  </Text>
                </TouchableOpacity>
              </View>
              {Bottomtab == 0 ? (
                <View
                  style={{
                    zIndex: 0,
                    backgroundColor: '#edebebf5',
                    borderRadius: moderateScale(35),
                    width: responsiveWidth(88),
                  }}>
                  <CarTypes />
                  <View>
                    {/*  Input Box */}
                    <Pressable style={styles.inputBox} onPress={goToSearch}>
                      <Text style={styles.inputText}>
                        {destinationCords.latitude && destinationCords.longitude
                          ? 'Now Choose Date & Time'
                          : 'Where To?'}
                      </Text>
                    </Pressable>
                  </View>
                  <DateTimePick />
                  {/* {showPopup && <Popup />} */}
                  <View style={{marginTop: responsiveHeight(4)}}>
                    <Button text="Find Pool" handleFunc={handleFindPoolPress} />
                  </View>
                </View>
              ) : (
                <View
                  style={{
                    zIndex: 0,
                    backgroundColor: '#edebebf5',
                    borderRadius: moderateScale(35),
                  }}>
                  {/* <CarTypes /> */}
                  <MyCar />
                  <View>
                    {/*  Input Box */}
                    <Pressable style={styles.inputBox} onPress={goToSearch}>
                      <Text style={styles.inputText}>
                        {destinationCords.latitude && destinationCords.longitude
                          ? 'Now Choose Date & Time'
                          : 'Where To?'}
                      </Text>
                    </Pressable>
                  </View>
                  <DateTimePick />
                  <View style={{marginTop: responsiveHeight(4)}}>
                    <Button text={'Offer Pool'} handlefunc={handleFindpool} />
                  </View>
                </View>
              )}
            </View>
          </View>
          <View style={styles.NavView}>
            <NavBar />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    position: 'relative',
  },
  Mapscontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  NavView: {
    position: 'absolute',
    bottom: responsiveHeight(2),
  },
  ViewPool: {
    position: 'absolute',
    bottom: responsiveHeight(11.3),
  },
  bootomSheet: {
    width: responsiveWidth(88),
    height: responsiveHeight(50),
    zIndex: 0,
    backgroundColor: '#eee',

    borderRadius: moderateScale(35),
  },
  upperBotm: {
    zIndex: 0,
    width: responsiveWidth(88),
    alignItems: 'center',
    height: responsiveHeight(8.5),
    backgroundColor: '#50478f',
    justifyContent: 'center',
    borderRadius: moderateScale(35),
    flexDirection: 'row',
  },
  inputBox: {
    // backgroundColor: 'grey',
    margin: moderateScale(14),
    padding: moderateScale(10),
    borderRadius: moderateScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputText: {
    marginLeft: moderateScale(15),
    fontSize: 17,
    fontWeight: '600',
    color: '#434343',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#dbdbdb',
  },
});

export default HomeScreen;
