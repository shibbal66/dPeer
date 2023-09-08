// Onboarding 2
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

const Onboarding2 = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.Onboarding2}>
      <Logo />

      <OnbordingCenter
        centerImage={require('../../assets/images/ridesharingbanner-1.png')}
      />

      <OnboardingText
        text1={'Split cost, Share fun'}
        text2={' Save your cost by splitting seats and have fun with co-ryders'}
      />
      <OnboardingFooter
        screen={NavigationStrings.ONBOARDING3}
        screen2={NavigationStrings.REGISTER}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Onboarding2: {
    flex: 1,
    justifyContent: 'center',
    height: responsiveHeight(110), // 50% of window height
    width: responsiveWidth(100), // 50% of window width
    alignItems: 'center',
  },
});
export default Onboarding2;
