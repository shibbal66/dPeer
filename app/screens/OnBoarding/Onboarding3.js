// Onboarding 3
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

const Onboarding3 = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.Onboarding3}>
      <Logo />

      <OnbordingCenter
        centerImage={require('../../assets/images/kisspngpasswordmanagercomputericonscomputersecurityforgotpasswordsvgfree5ab10cc4025fc1-1.png')}
      />

      <OnboardingText
        text1={'Safe and Secure'}
        text2={
          'Get driver details and share your trip status with loved ones. Powered by BlockChain'
        }
      />
      <OnboardingFooter
        screen={NavigationStrings.HOMESCREEN}
        screen2={NavigationStrings.REGISTER}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Onboarding3: {
    flex: 1,
    justifyContent: 'center',
    height: responsiveHeight(110), // 50% of window height
    width: responsiveWidth(100), // 50% of window width
    alignItems: 'center',
  },
});
export default Onboarding3;
