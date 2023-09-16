import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DateTimePick = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setselecteddate] = useState('Select Date');
  const [selectedTime, setselectedtime] = useState('Select Time');
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = date => {
    //console.warn('A date has been picked: ', date);
    const dt = new Date(date);
    const x1 = `${dt.getDate()}/${dt.getMonth() + 1}/${dt.getFullYear()}`;
    setselecteddate(x1);
    hideDatePicker();
    showTimePicker();
  };

  const showTimePicker = () => {
    // Show the time picker when the date is selected
    if (selectedDate !== 'Select Date') {
      setDatePickerVisibility(false); // Hide the date picker
      setTimePickerVisibility(true); // Show the time picker
    }
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = date => {
    console.warn('A time has been picked: ', date);
    const tm = new Date(date);

    // Define options to format the time in 12-hour format with 'am/pm'
    const formattedTime = tm.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    setselectedtime(formattedTime);
    hideTimePicker();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          showDatePicker();
        }}>
        <Text>{selectedDate}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          showTimePicker();
        }}>
        <Text>{selectedTime}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />
    </View>
  );
};

export default DateTimePick;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  btn: {
    padding: 10,
    backgroundColor: '#eee',
    marginVertical: 5,
    marginLeft: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
