import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import NavigationStrings from '../constants/NavigationStrings';
import {moderateScale} from 'react-native-size-matters';
const WhereTo = props => {
  const navigation = useNavigation();

  const goToSearch = () => {
    navigation.navigate(NavigationStrings.WHERETO);
  };

  return (
    <View>
      {/*  Input Box */}
      <Pressable style={styles.inputBox} onPress={goToSearch}>
        <Text style={styles.inputText}>Where To?</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  inputBox: {
    // backgroundColor: 'grey',
    margin: moderateScale(14),
    padding: moderateScale(10),
    borderRadius: moderateScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputText: {
    marginLeft: moderateScale(15),
    fontSize: 20,
    fontWeight: '600',
    color: '#434343',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#dbdbdb',
  },
});
export default WhereTo;
