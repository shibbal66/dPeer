import 'react-native-gesture-handler';
import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Onboarding1, Onboarding2, Onboarding3} from '../screens';
const Stack = createNativeStackNavigator();

export default function OnboardingStack() {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <NavigationContainer>
      {hideSplashScreen ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Onboarding1"
            component={Onboarding1}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Onboarding2"
            component={Onboarding2}
            options={{headerShown: false}}
          />{' '}
          <Stack.Screen
            name="Onboarding3"
            component={Onboarding3}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : null}
    </NavigationContainer>
  );
}
