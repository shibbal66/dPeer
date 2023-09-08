// Onboarding 1
import * as React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import {useNavigation} from '@react-navigation/native';

import NavigationStrings from '../../constants/NavigationStrings';
import Logo from '../../components/Logo';
import OnbordingCenter from '../../components/OnboardingCenter';
import OnboardingFooter from '../../components/OnboardingFooter';
import OnboardingText from '../../components/OnboardingText';

const Onboarding1 = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.Onboarding1}>
      <Logo />

      <OnbordingCenter
        centerImage={require('../../assets/images/screenshot-147-1.png')}
      />

      <OnboardingText
        text1={'Carpool with Neighbours'}
        text2={'Find neighbours from your area and carpool with them'}
      />
      <OnboardingFooter
        screen={NavigationStrings.ONBOARDING2}
        screen2={NavigationStrings.REGISTER}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Onboarding1: {
    flex: 1,
    justifyContent: 'center',
    height: responsiveHeight(110), // 50% of window height
    width: responsiveWidth(100), // 50% of window width
    alignItems: 'center',
  },
});
export default Onboarding1;
