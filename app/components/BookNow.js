import {Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Button = props => {
  // const confirm
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer}>
        {/* <Image
        style={styles.logo}
        source={require('../assets/images/metalogow.png')}
      /> */}
        <Text style={styles.buttonText}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    zIndex: 0,
  },
  buttonContainer: {
    width: responsiveWidth(40),
    height: responsiveHeight(8.5),
    borderRadius: moderateScale(20),
    zIndex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#50478f',
  },
  buttonText: {
    color: '#ebebeb',
    fontSize: responsiveFontSize(2.7),

    fontWeight: 'bold',
  },
  logo: {
    width: '20%',
    height: '80%',
    resizeMode: 'contain',
  },
});
export default Button;
