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
              style={{width: responsiveWidth(16), height: responsiveWidth(18)}}
              resizeMode="contain"
              source={require('../assets/images/goBack.png')}
            />
          </TouchableOpacity>
          <ImageProfile />
        </View>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.tabView}>
          <Image
            style={{
              width: responsiveWidth(22),
              height: responsiveWidth(16),
            }}
            resizeMode="contain"
            source={require('../assets/images/Wallet.png')}
          />
        </View>
        <View style={styles.tabView}>
          <Image
            style={{
              width: responsiveWidth(21),
              height: responsiveWidth(14),
            }}
            resizeMode="contain"
            source={require('../assets/images/Registration.png')}
          />
        </View>
        <View style={styles.tabView}>
          <Image
            style={{
              width: responsiveWidth(21),
              height: responsiveWidth(14),
            }}
            resizeMode="contain"
            source={require('../assets/images/Language.png')}
          />
        </View>
        <View style={styles.tabView}>
          <Image
            style={{
              width: responsiveWidth(21),
              height: responsiveWidth(15),
            }}
            resizeMode="contain"
            source={require('../assets/images/Security.png')}
          />
        </View>
        <View style={styles.tabView}>
          <Image
            style={{
              width: responsiveWidth(20),
              height: responsiveWidth(14),
            }}
            resizeMode="contain"
            source={require('../assets/images/Help.png')}
          />
        </View>
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
    backgroundColor: 'green',
    padding: moderateScale(25),
  },
  tabView: {
    backgroundColor: 'red',
    paddingHorizontal: responsiveWidth(2),
    paddingVertical: responsiveHeight(2),
    width: responsiveWidth(90),
    height: responsiveHeight(10),
  },
});
