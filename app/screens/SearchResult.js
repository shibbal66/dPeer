import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ChooseLocation from '../components/ChooseLocation';
import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import NavigationStrings from '../constants/NavigationStrings';
const SearchResult = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ChooseLocation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
});
export default SearchResult;
