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

const Tab = createBottomTabNavigator();
var iconHeight = 26;
var iconWidth = 29;

const HomeScreen = () => {
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
    <View style={styles.container}>
      {/* <MapView
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 30.230722255105633,
          longitude: 71.5174780752946,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
        zoomEnabled={true}
        showsUserLocation={true}>
        <Marker coordinate={{latitude: mLat, longitude: mLong}} />
      </MapView> */}
      {/* <View style={styles.bootomSheet}>
        <View style={styles.upperBotm}>
          <View style={styles.tabBtn}>
            <TouchableOpacity
              style={{
                width: '52.5%',
                height: 50,
                borderRadius: 35,
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
                width="17%"
                height="45%"
                style={{fontSize: 22}}
              />
              <Text
                style={{
                  color: Bottomtab == 0 ? '#50478f' : '#edebebf5',
                  fontSize: 15,
                  fontWeight: 600,
                  marginRight: '5%',
                }}>
                Find Pool
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '52.5%',
                height: 50,
                borderRadius: 35,
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
                width="15%"
                height="65%"
                style={{fontSize: 23}}
              />
              <Text
                style={{
                  color: Bottomtab == 1 ? '#50478f' : '#edebebf5',
                  fontSize: 15,
                  fontWeight: 700,
                  marginRight: '5%',
                }}>
                Offer Pool
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {Bottomtab == 0 ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'red',
              borderRadius: 10,
              width: '100%',
              bottom: '2%',
            }}>
            <GooglePlacesAutocomplete
              placeholder="Search"
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
              }}
              query={{
                key: 'AIzaSyAil4JimP2Tu2dVjgAFOX3A_dNre9d1W5Y',
                language: 'en',
              }}
            />
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'black',
              borderRadius: 12,
              bottom: '2%',
            }}>
            <Text>offer Pool</Text>
          </View>
        )}
      </View> */}

      {/* <View style={styles.NavContainer}> */}
      {/* <Pressable
          onPress={() => {
            getLocation();
          }}
          style={{padding: 14, top: '-280%', paddingLeft: '80%', left: '8%'}}
          android_ripple={{borderless: true, radius: 50}}>
          <FontAwesome6
            name={'location-crosshairs'}
            height={iconHeight}
            width={iconWidth}
            color="#50478f"
            style={{fontSize: 30}}
          />
        </Pressable> */}
      {/* <View style={styles.NavBar}>
          <Pressable
            onPress={() => changeText('Home')}
            style={styles.IconBehaviour}
            android_ripple={{borderless: true, radius: 50}}>
            <AntDesign
              name="car"
              height={iconHeight}
              width={iconWidth}
              color="#50478f"
              style={{fontSize: 30}}
            />
            <Text style={styles.IconText}>Home</Text>
          </Pressable>
          <Pressable
            onPress={() => changeText('Trips')}
            style={styles.IconBehaviour}
            android_ripple={{borderless: true, radius: 50}}>
            <AntDesign
              name="caretup"
              height={iconHeight}
              width={iconWidth}
              color="#50478f"
              style={{fontSize: 30}}
            />
            <Text style={styles.IconText}>Trips</Text>
          </Pressable>
          {/* <Pressable
            onPress={() => changeText('Help')}
            style={styles.IconBehaviour}
            android_ripple={{borderless: true, radius: 50}}>
            <AntDesign
              name="customerservice"
              height={iconHeight}
              width={iconWidth}
              color="#50478f"
              style={{fontSize: 30}}
            />
            <Text style={styles.IconText}>Help</Text>
          </Pressable> */}

      {/* <Pressable
            onPress={() => changeText('More')}
            style={styles.IconBehaviour}
            android_ripple={{borderless: true, radius: 50}}>
            <AntDesign
              name="menuunfold"
              height={iconHeight}
              width={iconWidth}
              color="#50478f"
              style={{fontSize: 30}}
            />
            <Text style={styles.IconText}>More</Text>
          </Pressable>
        </View> */}
      <NavBar />
    </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3962FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  NavContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 20,
  },
  NavBar: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    width: '90%',
    justifyContent: 'space-evenly',
    borderRadius: 35,
  },
  IconBehaviour: {
    padding: 14,
  },
  IconText: {
    fontSize: 12,
    color: '#000', // Change this to the desired text color
    marginTop: 2,
    alignItems: 'center',
  },
  bootomSheet: {
    width: '87%',
    height: '49%',
    top: '40%',
    backgroundColor: '#eee',
    position: 'absolute',
    borderRadius: 35,
  },
  upperBotm: {
    width: '100%',

    height: '22%',
    backgroundColor: '#50478f',
    borderRadius: 35,
  },
  tabBtn: {
    width: '100%',
    height: 60,
    borderWidth: 0.3,
    borderRadius: 35,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 22,
    paddingTop: 19,
  },
});

export default HomeScreen;
