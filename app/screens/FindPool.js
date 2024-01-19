import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NavigationStrings from '../constants/NavigationStrings';
import {useNavigation} from '@react-navigation/native';

const FindPool = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>FindPool</Text>
    </View>
  );
};

export default FindPool;

const styles = StyleSheet.create({});
