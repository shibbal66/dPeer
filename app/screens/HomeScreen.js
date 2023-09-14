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

const HomeScreen = () => {
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
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS == 'ios' ? -100 : 21}
      enabled={Platform.OS === 'ios' ? true : true}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={{flex: 1}}
        bounces={false}>
        <View style={styles.container}>
          <Maps />
          <View style={styles.ViewPool}>
            <PoolView />
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
