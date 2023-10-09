import {mode} from 'native-base/lib/typescript/theme/tools';
import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import BookNow from './BookNow';
const BookMySeat = () => {
  const [rows, setRows] = useState([
    [{empty: true, selected: false}],
    [
      {empty: true, selected: false},
      {empty: true, selected: false},
    ],
  ]);

  const onselectSeat = (rowIndex, seatIndex) => {
    const tempRows = [...rows];
    tempRows[rowIndex][seatIndex] = {
      ...tempRows[rowIndex][seatIndex],
      selected: !tempRows[rowIndex][seatIndex].selected,
      empty: !tempRows[rowIndex][seatIndex].empty,
    };
    setRows(tempRows);
  };

  const getAllSeats = () => {
    return rows.flat().filter(item => item.selected).length;
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        // backgroundColor: 'black',
        width: '100%',
      }}>
      <View
        style={{
          width: '40%',
          height: '40%',
          borderWidth: 2,
          borderRadius: 45,
          borderColor: '#8e8e8e',
          // backgroundColor: 'green',
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <View
          style={{
            // backgroundColor: 'blue',
            width: responsiveWidth(8),
            height: responsiveHeight(6),
            marginLeft: moderateScale(72),
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: responsiveHeight(10.7),
            zIndex: 1,
          }}>
          <Image
            source={require('../assets/images/Steering.png')}
            resizeMode="contain"
            style={{
              width: responsiveWidth(9),
              height: responsiveHeight(8),
              alignSelf: 'flex-end',
            }}
          />
        </View>

        {rows.map((row, rowIndex) => (
          <View
            key={rowIndex}
            style={{
              marginLeft: moderateScale(28),
              marginRight: moderateScale(28),

              flexDirection: 'row',
              //backgroundColor: 'grey',
              position: 'relative',
              zIndex: 0,
            }}>
            {row.map((item, seatIndex) => (
              <TouchableOpacity
                key={seatIndex}
                style={{
                  margin: moderateScale(2),
                  marginLeft: moderateScale(9),
                  marginBottom: moderateScale(29),
                }}
                onPress={() => {
                  if (!item.selected && !item.empty) {
                    alert('Seat already booked');
                  } else {
                    onselectSeat(rowIndex, seatIndex);
                  }
                }}>
                {item.empty && !item.selected ? (
                  <Image
                    source={require('../assets/images/EmptyCarSeat.png')}
                    style={{width: 24, height: 24}}
                  />
                ) : item.selected ? (
                  <Image
                    source={require('../assets/images/selectedSeat.png')}
                    style={{width: 24, height: 24, tintColor: '#50478F'}}
                  />
                ) : (
                  <Image
                    source={require('../assets/images/reservedSeat.png')}
                    style={{width: 24, height: 24}}
                  />
                )}
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          width: responsiveWidth(40),
          height: responsiveHeight(8.6),
          flexDirection: 'row',
          alignItems: 'center',
          //backgroundColor: 'red',
          //alignSelf: 'flex-start',
          top: responsiveHeight(22),
          marginLeft: moderateScale(28),
          borderRadius: moderateScale(6),
          borderWidth: 2,

          borderColor: '#8e8e8e',
        }}>
        <Text
          style={{
            alignItems: 'center',
            marginLeft: moderateScale(10),
            fontSize: responsiveFontSize(1.9),
            fontWeight: 500,
          }}>
          {'Selected Seats:' + getAllSeats() + ''}
        </Text>
      </View>
      <View
        style={{
          marginLeft: moderateScale(170),
          top: responsiveHeight(13.2),
        }}>
        <BookNow text={'Book Now'} />
      </View>
    </View>
  );
};

export default BookMySeat;
