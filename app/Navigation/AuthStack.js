import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeBaseProvider} from 'native-base';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Register,
  Onboarding1,
  Onboarding2,
  Onboarding3,
  SignIn,
  HomeScreen,
} from '../screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import NavigationStrings from '../constants/NavigationStrings';
import {platform} from 'process';
import Profile from '../screens/Profile';
import WhereTo from '../screens/WhereTo';
import MyTrips from '../screens/MyTrips';
import {NavigationContainer} from '@react-navigation/native';
import ChooseLocation from '../components/ChooseLocation';
import Wallet from '../screens/Wallet';
import AccountInfo from '../screens/AccountInfo';
import FindingPool from '../screens/FindingPool';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import Language from '../screens/Language';
import Help from '../screens/Help';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  const [appLaunched, setAppLaunched] = useState(false);

  useEffect(() => {
    // Check if the app has been launched before
    async function checkAppLaunched() {
      try {
        const appLaunchedFlag = await AsyncStorage.getItem('appLaunched');
        if (appLaunchedFlag !== null) {
          // App has been launched before
          setAppLaunched(true);
        } else {
          // First app launch, set the flag
          await AsyncStorage.setItem('appLaunched', 'true');
        }
      } catch (error) {
        // Handle error
        console.error('Error checking app launched:', error);
      }
    }

    checkAppLaunched();
  }, []);

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {appLaunched ? (
            <></>
          ) : (
            <>
              <Stack.Screen
                name={NavigationStrings.ONBOARDING1}
                component={Onboarding1}
              />
              <Stack.Screen
                name={NavigationStrings.ONBOARDING2}
                component={Onboarding2}
              />
              <Stack.Screen
                name={NavigationStrings.ONBOARDING3}
                component={Onboarding3}
              />
            </>
          )}
          <Stack.Screen
            name={NavigationStrings.REGISTER}
            component={Register}
          />
          <Stack.Screen
            name={NavigationStrings.HOMESCREEN}
            component={HomeScreen}
          />
          <Stack.Screen name={NavigationStrings.SIGNIN} component={SignIn} />
          <Stack.Screen name={NavigationStrings.PROFILE} component={Profile} />
          <Stack.Screen name={NavigationStrings.MYTRIPS} component={MyTrips} />
          <Stack.Screen
            name={NavigationStrings.CHOOSELOCATION}
            component={ChooseLocation}
          />
          <Stack.Screen name={NavigationStrings.WALLET} component={Wallet} />
          <Stack.Screen
            name={NavigationStrings.ACCOUNTINFO}
            component={AccountInfo}
          />
          <Stack.Screen
            name={NavigationStrings.FINDINGPOOL}
            component={FindingPool}
          />
          <Stack.Screen
            name={NavigationStrings.PRIVACYPOLICY}
            component={PrivacyPolicy}
          />
          <Stack.Screen
            name={NavigationStrings.LANGUAGE}
            component={Language}
          />
          <Stack.Screen name={NavigationStrings.HELP} component={Help} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
