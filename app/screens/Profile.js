import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
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
import ImageProfile from '../components/ImageProfile';
import {useNavigation} from '@react-navigation/native';
import NavigationStrings from '../constants/NavigationStrings';
import {mode} from 'native-base/lib/typescript/theme/tools';

const Profile = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperView}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate(NavigationStrings.HOMESCREEN)}>
            <Image
              style={{
                width: responsiveWidth(12),
                height: responsiveWidth(12),
                marginLeft: responsiveWidth(5),
              }}
              resizeMode="contain"
              source={require('../assets/images/goBack.png')}
            />
          </TouchableOpacity>
          <ImageProfile />
        </View>
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity
          onPress={() => navigation.navigate(NavigationStrings.WALLET)}>
          <View style={styles.tabView}>
            <Image
              style={{
                width: responsiveWidth(10),
                height: responsiveWidth(10),
              }}
              resizeMode="contain"
              source={require('../assets/images/Wallet.png')}
            />
            <Text style={styles.text1}>My Wallet</Text>
            <Text style={styles.text2}>Securely Manage your Funds</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(NavigationStrings.ACCOUNTINFO)}>
          <View style={styles.tabView}>
            <Image
              style={{
                width: responsiveWidth(10),
                height: responsiveWidth(10),
              }}
              resizeMode="contain"
              source={require('../assets/images/Registration.png')}
            />
            <Text style={styles.text1}>My Account</Text>
            <Text
              style={{
                marginTop: responsiveHeight(4.5),
                marginLeft: -responsiveWidth(26),
              }}>
              Edit Account Information
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(NavigationStrings.PRIVACYPOLICY)}>
          <View style={styles.tabView}>
            <Image
              style={{
                width: responsiveWidth(10),
                height: responsiveWidth(10),
              }}
              resizeMode="contain"
              source={require('../assets/images/Security.png')}
            />
            <Text style={styles.text1}>Privacy & Policy</Text>
            <Text
              style={{
                marginTop: responsiveHeight(4.5),
                marginLeft: -responsiveWidth(35),
              }}>
              Learn How we Protect Your Privacy
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(NavigationStrings.LANGUAGE)}>
          <View style={styles.tabView}>
            <Image
              style={{
                width: responsiveWidth(10),
                height: responsiveWidth(10),
              }}
              resizeMode="contain"
              source={require('../assets/images/Language.png')}
            />
            <Text style={styles.text1}>Language</Text>
            <Text style={styles.text2}>Choose Your Preferred Language</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(NavigationStrings.HELP)}>
          <View style={styles.tabView}>
            <Image
              style={{
                width: responsiveWidth(10),
                height: responsiveWidth(10),
              }}
              resizeMode="contain"
              source={require('../assets/images/Help.png')}
            />
            <Text style={styles.text1}>Help</Text>
            <Text
              style={{
                marginTop: responsiveHeight(4.5),
                marginLeft: -responsiveWidth(11),
              }}>
              Get Assistance When You Need It
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  upperView: {
    width: responsiveWidth(100),
    height: responsiveHeight(30),
    // backgroundColor: 'red',
  },
  bottomView: {
    width: responsiveWidth(100),
    height: responsiveHeight(65),
    borderRadius: moderateScale(35),
    // backgroundColor: 'green',
    padding: moderateScale(25),
  },
  tabView: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    paddingHorizontal: responsiveWidth(2),
    paddingVertical: responsiveHeight(1),
    width: responsiveWidth(90),
    height: responsiveHeight(10),
    borderRadius: moderateScale(15),
    alignItems: 'center',
  },
  text1: {
    fontSize: responsiveFontSize(2.4),
    marginBottom: responsiveHeight(1.5),
    fontWeight: '600',
    marginLeft: responsiveWidth(4),
  },
  text2: {
    marginTop: responsiveHeight(4.5),
    marginLeft: -responsiveWidth(22),
  },
});
