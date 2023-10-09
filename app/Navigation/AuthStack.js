import 'react-native-gesture-handler';
import * as React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SearchResult,
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
const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={NavigationStrings.ONBOARDING1}
        component={Onboarding1}
      />
      <Stack.Screen
        name={NavigationStrings.HOMESCREEN}
        component={HomeScreen}
      />
      <Stack.Screen name={NavigationStrings.PROFILE} component={Profile} />
      <Stack.Screen
        name={NavigationStrings.ONBOARDING2}
        component={Onboarding2}
      />
      <Stack.Screen
        name={NavigationStrings.ONBOARDING3}
        component={Onboarding3}
      />
      {/* <Stack.Screen
        name={NavigationStrings.SEARCHRESULT}
        component={SearchResult}
      /> */}

      <Stack.Screen name={NavigationStrings.REGISTER} component={Register} />

      <Stack.Screen name={NavigationStrings.SIGNIN} component={SignIn} />
    </Stack.Navigator>
  );
}
