import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Help = () => {
  return (
    <ScrollView>
      <Text
        style={{
          fontSize: responsiveFontSize(3),
          textAlign: 'center',
          marginTop: responsiveHeight(6),
          marginBottom: responsiveHeight(4),
          color: 'purple',
        }}>
        Contact Us
      </Text>
      <Text
        style={{
          marginLeft: responsiveWidth(10),
          marginRight: responsiveWidth(10),
          justifyContent: 'center',
          fontSize: responsiveFontSize(3),
        }}>
        Email: destinationpeer@gmail.com{'\n'}Phone #: 0331-1144446
      </Text>
    </ScrollView>
  );
};

export default Help;

const styles = StyleSheet.create({});
