import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Language = () => {
  const [selectedOption, setSelectedOption] = useState('first');

  const handleRadioSelect = option => {
    setSelectedOption(option);
  };

  const RadioButton = ({label, selected, onSelect}) => {
    return (
      <TouchableOpacity onPress={onSelect}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: selected ? 'blue' : 'gray',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {selected && (
              <View
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  backgroundColor: 'blue',
                }}
              />
            )}
          </View>
          <Text style={{marginLeft: 8}}>{label}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text
        style={{
          color: 'purple',
          fontSize: responsiveFontSize(3),
          textAlign: 'center',
          marginTop: responsiveHeight(7),
        }}>
        Selected Language
      </Text>
      <View
        style={{
          marginLeft: responsiveWidth(15),
          marginTop: responsiveHeight(6),
        }}>
        <RadioButton
          label="English Language"
          selected={selectedOption === 'first'}
          onSelect={() => handleRadioSelect('first')}
        />
      </View>

      {/* Add more RadioButton components for other options as needed */}
    </View>
  );
};

export default Language;

const styles = StyleSheet.create({});
