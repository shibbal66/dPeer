import React, {useState, useEffect} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import NavigationStrings from '../constants/NavigationStrings';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
const icon = <FontAwesome6 name={'comments'} />;
const Tab = createBottomTabNavigator();

const NavBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.NavBar}>
      <Pressable
        onPress={() => navigation.navigate(NavigationStrings.HOMESCREEN)}
        style={styles.IconBehaviour}
        android_ripple={{borderless: true, radius: 50}}>
        <AntDesign
          name="car"
          height={moderateVerticalScale(25)}
          width={moderateScale(28)}
          color="#50478f"
          style={{fontSize: moderateScale(29.5)}}
        />
        <Text style={styles.IconText}>Home</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate(NavigationStrings.MYTRIPS)}
        style={styles.IconBehaviour}
        android_ripple={{borderless: true, radius: 50}}>
        <AntDesign
          name="caretup"
          height={moderateVerticalScale(24)}
          width={moderateScale(28)}
          color="#50478f"
          style={{fontSize: moderateScale(31.5)}}
        />
        <Text style={styles.IconText}>Trips</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate(NavigationStrings.PROFILE)}
        style={styles.IconBehaviour}
        android_ripple={{borderless: true, radius: 50}}>
        <AntDesign
          name="menuunfold"
          height={moderateVerticalScale(25)}
          width={moderateScale(28)}
          color="#50478f"
          style={{fontSize: moderateScale(28)}}
        />
        <Text style={styles.IconText}>More</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  NavBar: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    width: responsiveWidth(80),
    height: responsiveHeight(9),

    justifyContent: 'space-evenly',
    borderRadius: moderateScale(35),
  },
  IconBehaviour: {
    justifyContent: 'center',
  },
  IconText: {
    fontSize: responsiveFontSize(1.6),
    color: '#000', // Change this to the desired text color

    alignItems: 'center',
  },
});
export default NavBar;
