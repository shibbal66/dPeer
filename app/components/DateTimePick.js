import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {moderateScale} from 'react-native-size-matters';

const DateTimePick = () => {
  const currentDate = new Date();
  const maxDate = new Date();
  maxDate.setDate(currentDate.getDate() + 10);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setselecteddate] = useState('Select Date');
  const [selectedTime, setselectedtime] = useState('Select Time');
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [minimumTime, setMinimumTime] = useState(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = date => {
    const dt = new Date(date);

    if (!isNaN(dt)) {
      const x1 = `${dt.getDate()}/${dt.getMonth() + 1}/${dt.getFullYear()}`;
      setselecteddate(x1);

      // If the selected date is in the future (including tomorrow), set minimumTime to null
      setMinimumTime(dt >= currentDate ? null : currentDate);
    }

    hideDatePicker();
  };

  const showTimePicker = () => {
    if (selectedDate !== 'Select Date') {
      setDatePickerVisibility(false);
      setTimePickerVisibility(true);
    }
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = date => {
    const tm = new Date(date);

    if (!isNaN(tm)) {
      const formattedTime = tm.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });

      setselectedtime(formattedTime);
    }

    hideTimePicker();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          showDatePicker();
        }}>
        <Text style={styles.datetimeText}>{selectedDate}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          showTimePicker();
        }}>
        <Text style={styles.datetimeText}>{selectedTime}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        minimumDate={currentDate}
        maximumDate={maxDate}
        display="inline"
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        minimumDate={minimumTime}
        onCancel={hideTimePicker}
      />
    </View>
  );
};

export default DateTimePick;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    //backgroundColor: 'red',
  },
  btn: {
    width: responsiveWidth(25.8),

    //backgroundColor: 'grey',
    marginVertical: 9,
    marginLeft: moderateScale(34),
    //borderRadius: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#50478f',
  },
  datetimeText: {
    fontSize: responsiveFontSize(2.4),
    padding: '',
    color: 'black',
  },
});
