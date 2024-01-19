import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {moderateScale} from 'react-native-size-matters';
const CarTypes = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionPress = option => {
    setSelectedOption(option);
    // Perform any other actions based on the selected option
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleOptionPress('bike')}>
        <View
          style={
            selectedOption === 'bike' ? styles.selectedOption : styles.option
          }>
          <Image
            style={styles.regpic}
            source={require('../assets/images/bike.png')}
          />
          <Text style={styles.CarText}>Bike</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleOptionPress('car')}>
        <View
          style={
            selectedOption === 'car' ? styles.selectedOption : styles.option
          }>
          <Image
            style={styles.regpic}
            source={require('../assets/images/car.png')}
          />
          <Text style={styles.CarText}> Car</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleOptionPress('carAc')}>
        <View
          style={
            selectedOption === 'carAc' ? styles.selectedOption : styles.option
          }>
          <Image
            style={styles.regpic}
            source={require('../assets/images/car.png')}
          />
          <Text style={styles.CarText}>Car Ac</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CarTypes;

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(90),
    height: responsiveHeight(10),

    flexDirection: 'row',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(34),
    marginBottom: moderateScale(1),
    marginTop: moderateScale(8),
  },
  option: {
    backgroundColor: '#edebebf5', // Change to the background color you want for selected option
    borderRadius: moderateScale(10),
    // Change to the background color you want for unselected option
  },
  selectedOption: {
    borderRadius: moderateScale(10),

    backgroundColor: '#8f87c4', // Change to the background color you want for selected option
  },
  regpic: {
    width: moderateScale(60),
    height: moderateScale(45),
  },
  CarText: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '700',
    paddingHorizontal: moderateScale(10),
    justifyContent: 'center',
  },
});
