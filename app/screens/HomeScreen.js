import React, {useState, useEffect, useRef} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import CarTypes from '../components/CarTypes';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import NavigationStrings from '../constants/NavigationStrings';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
const Tab = createBottomTabNavigator();

const HomeScreen = ({navigation}) => {
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
  const [Bottomtab, setBottomTab] = useState(0);

  const goToSearch = () => {
    navigation.navigate(NavigationStrings.CHOOSELOCATION, {
      getCordinates: fetchValue,
    });
  };
  //const Tab = createBottomTabNavigator();

  const fetchValue = data => {
    setstate({
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

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      _keyboardDidShow,
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      _keyboardDidHide,
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const _keyboardDidShow = () => {
    scrollViewRef.current.scrollTo({y: 220, animated: true});
    setHeightTop(260);
  };

  const _keyboardDidHide = () => {
    setHeightTop(30);
  };
  const dismissKeyboard = () => {
    // Dismiss the keyboard
  };
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
          <Maps />
          <Image source={require('../assets/images/mapImg.jpeg')} />
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
                      <Text style={styles.inputText}>Where To?</Text>
                    </Pressable>
                  </View>
                  <DateTimePick />

                  <Button text={'Find Pool'} />
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
                  <WhereTo />
                  <DateTimePick />

                  <Button text={'Offer Pool'} />
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
    fontSize: 20,
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

// ref={(ref) => (scrollView = ref)}
//  componentWillMount0 }
//    this.keyboardDidShowListener = Keyboard.addListener(
//     'keyboardDidShow;,
//     this_keyboardDidShow,
//    ):
//    this.keyboardDidHideListener = = Keyboard.addListener(
//     'keyboardDidHide;,
//     this_keyboardDidHide,
//   componentWillUnmount() {
//    this.keyboardDidShowListener.remove():
//    this.keyboardDidHideListener.remove();
//  _keyboardDidShow=0 =>
//    // scrollView.scrollToEnd(I) animated: true }):
//    scrollView.scrollTo(f y: DHeight(220), animated: true });
//    this.setState(f heightTop: DHeight(260) )):
//  _keyboardDidHide=00 =>
//    this.setState(f heightTop: DHeight(30) ));
