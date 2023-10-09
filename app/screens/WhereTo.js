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
    navigation.navigate(NavigationStrings.SEARCHRESULT);
  };

  return (
    <View>
      {/*  Input Box */}
      <Pressable style={styles.inputBox} onPress={goToSearch}>
        <Text style={styles.inputText}>Where To?</Text>

        {/* <View style={styles.timeContainer}>
          <AntDesign name={'clockcircle'} size={16} color={'#535353'} />
          <Text>Now</Text>
          <MaterialIcons name={'keyboard-arrow-down'} size={16} />
        </View> */}
      </Pressable>

      {/* <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name={'clockcircle'} size={20} color={'#ffffff'} />
        </View>
        <Text style={styles.destinationText}>Spin Nightclub</Text>
      </View>

      {/* Home destination */}
      {/* <View style={styles.row}>
        <View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
          <Entypo name={'home'} size={20} color={'#ffffff'} />
        </View>
        <Text style={styles.destinationText}>Spin Nightclub</Text>
      </View>  */}
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
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 50,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#dbdbdb',
  },
  iconContainer: {
    backgroundColor: '#b3b3b3',
    padding: 10,
    borderRadius: 25,
  },
  destinationText: {
    marginLeft: 10,
    fontWeight: '500',
    fontSize: 16,
  },
});
export default WhereTo;
