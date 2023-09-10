import {Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Button = props => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      {/* <Image
        style={styles.logo}
        source={require('../assets/images/metalogow.png')}
      /> */}
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    width: responsiveWidth(80),
    height: responsiveHeight(7.5),
    borderRadius: moderateScale(35),

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
