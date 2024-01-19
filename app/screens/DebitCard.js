import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
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
import ImageProfile from '../components/ImageProfile';
import {useNavigation} from '@react-navigation/native';
import NavigationStrings from '../constants/NavigationStrings';
import {mode} from 'native-base/lib/typescript/theme/tools';
import Button from '../components/Button';
import {SP_KEY} from '@env';

const Wallet = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = useState('first');
  const [selectedOption, setSelectedOption] = useState('first');

  const handleRadioSelect = option => {
    setSelectedOption(option);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperView}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate(NavigationStrings.PROFILE)}>
            <Text style={styles.mywallet}>My Wallet</Text>

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

          <Image
            style={styles.screenshot1471}
            source={require('../assets/images/WalletBg.png')}
          />
          <Image
            style={styles.screenshot1472}
            source={require('../assets/images/walletpic.png')}
          />
        </View>
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity>
          <View style={styles.tabView}>
            <Image
              style={{
                width: responsiveWidth(15),
                height: responsiveWidth(15),
                marginRight: responsiveWidth(5),
                marginLeft: responsiveWidth(7),
              }}
              resizeMode="contain"
              source={require('../assets/images/coin.png')}
            />
            <Text style={styles.text1}>PKR 250</Text>
            {/* <Text style={styles.text2}>Your Balance</Text> */}
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.tabView}>
            <View>
              <RadioButton
                selected={selectedOption === 'first'}
                onSelect={() => handleRadioSelect('first')}
              />
            </View>
            <Image
              style={{
                width: responsiveWidth(15),
                height: responsiveWidth(15),
                marginRight: responsiveWidth(5),
                marginLeft: responsiveWidth(3),
              }}
              resizeMode="contain"
              source={require('../assets/images/note.png')}
            />
            <Text style={styles.text1}>Cash</Text>
            {/* <Text
              style={{
                marginTop: responsiveHeight(4.5),
                marginLeft: -responsiveWidth(26),
              }}>
              Edit Account Information
            </Text> */}
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.tabView}>
            <RadioButton
              selected={selectedOption === 'second'}
              onSelect={() => handleRadioSelect('second')}
            />
            <Image
              style={{
                width: responsiveWidth(15),
                height: responsiveWidth(15),
                marginRight: responsiveWidth(5),
                marginLeft: responsiveWidth(3),
              }}
              resizeMode="contain"
              source={require('../assets/images/card.png')}
            />
            <Text style={styles.text1}>Credit Card</Text>
            {/* <Text
              style={{
                marginTop: responsiveHeight(4.5),
                marginLeft: -responsiveWidth(35),
              }}>
              Learn How we Protect Your Privacy
            </Text> */}
          </View>
        </TouchableOpacity>
        <View style={{marginTop: responsiveHeight(4)}}>
          <Button text="Continue" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenshot1471: {
    resizeMode: 'contain',
    position: 'relative',
    // Adjust the vertical position of the second image as per your requirement
    width: responsiveWidth(100), // Adjust the width of the second image as per your requirement
    height: responsiveWidth(100),
    alignSelf: 'center',
    bottom: responsiveHeight(8),
  },
  screenshot1472: {
    resizeMode: 'contain',
    position: 'absolute',
    // Adjust the vertical position of the second image as per your requirement
    width: responsiveWidth(80), // Adjust the width of the second image as per your requirement
    height: responsiveWidth(80),
    alignSelf: 'center',
    top: responsiveHeight(8),
  },
  upperView: {
    width: responsiveWidth(100),
    height: responsiveHeight(45),
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
    fontSize: responsiveFontSize(3.4),
    marginBottom: responsiveHeight(1),
    fontWeight: '600',
    marginLeft: responsiveWidth(4),
  },
  mywallet: {
    fontSize: responsiveFontSize(3.4),
    marginTop: responsiveHeight(1),
    marginRight: responsiveWidth(32),
    marginTop: responsiveHeight(1),

    fontWeight: '600',
    marginLeft: responsiveWidth(36),
    color: '#50478F',
    position: 'absolute',
  },
  text2: {
    fontSize: responsiveFontSize(2.4),

    marginTop: responsiveHeight(6),
    marginLeft: -responsiveWidth(25),
  },
});
