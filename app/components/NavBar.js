import React, {useState, useEffect} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  TouchableOpacity,
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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
const icon = <FontAwesome6 name={'comments'} />;
const Tab = createBottomTabNavigator();
var iconHeight = 26;
var iconWidth = 29;

const NavBar = () => {
  const [screenText, setScreenText] = useState('Press a button');
  const [Bottomtab, setBottomTab] = useState(0);
  const changeText = text => {
    console.log(text + ' has been pressed');
    setScreenText(text);
  };
  return (
    <View style={styles.NavBar}>
      <Pressable
        onPress={() => changeText('Home')}
        style={styles.IconBehaviour}
        android_ripple={{borderless: true, radius: 50}}>
        <AntDesign
          name="car"
          height={moderateVerticalScale(25)}
          width={moderateScale(28)}
          color="#50478f"
          style={{fontSize: moderateScale(29.4)}}
        />
        <Text style={styles.IconText}>Home</Text>
      </Pressable>
      <Pressable
        onPress={() => changeText('Trips')}
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
      {/* <Pressable
            onPress={() => changeText('Help')}
            style={styles.IconBehaviour}
            android_ripple={{borderless: true, radius: 50}}>
            <AntDesign
              name="customerservice"
              height={iconHeight}
              width={iconWidth}
              color="#50478f"
              style={{fontSize: 30}}
            />
            <Text style={styles.IconText}>Help</Text>
          </Pressable> */}

      <Pressable
        onPress={() => changeText('More')}
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
  container: {
    flex: 1,
    backgroundColor: '#3962FF',
  },

  NavBar: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    width: responsiveWidth(82),
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
  //   bootomSheet: {
  //     width: responsiveWidth(87),
  //     height: responsiveHeight(40),
  //     top: '90%',
  //     backgroundColor: 'red',
  //     position: 'absolute',
  //     borderRadius: 35,
  //   },
  //   upperBotm: {
  //     width: '100%',

  //     height: '22%',
  //     backgroundColor: '#50478f',
  //     borderRadius: 35,
  //   },
  tabBtn: {
    width: '100%',
    height: 60,
    borderWidth: 0.3,
    borderRadius: 35,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 22,
    paddingTop: 19,
  },
});
export default NavBar;
