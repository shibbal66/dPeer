import 'react-native-gesture-handler';
import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens

import Onboarding1 from './app/screens/OnBoarding/Onboarding1';
import Onboarding2 from './app/screens/OnBoarding/Onboarding2';
import Onboarding3 from './app/screens/OnBoarding/Onboarding3';
// import HomeScreen from './app/screens/HomeScreen';

import Register from './app/screens/Register';
import SignIn from './app/screens/SignIn';
import AuthStack from './app/Navigation/AuthStack';
import OnboardingStack from './app/Navigation/OnboardingStack';
import Routes from './app/Navigation/Routes';

// screen for stack & tabs
const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <Routes />
    </>
  );
};
export default App;
