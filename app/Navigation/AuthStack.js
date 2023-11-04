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
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
