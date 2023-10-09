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
import {useNavigation} from '@react-navigation/native';
import NavigationStrings from '../constants/NavigationStrings';

const SignIn = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperView}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate(NavigationStrings.PROFILE)}>
            <Image
              style={{width: responsiveWidth(16), height: responsiveWidth(18)}}
              resizeMode="contain"
              source={require('../assets/images/goBack.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomView}></View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperView: {
    width: responsiveWidth(100),
    height: responsiveHeight(35),
    backgroundColor: 'red',
  },
  bottomView: {
    width: responsiveWidth(100),
    height: responsiveHeight(65),
    backgroundColor: 'green',
  },
});
