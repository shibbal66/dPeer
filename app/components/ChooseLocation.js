import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CustomBtn from '../components/CustomBtn';
import {useNavigation} from '@react-navigation/native';
import NavigationStrings from '../constants/NavigationStrings';
import {moderateScale} from 'react-native-size-matters';
import DestinationSearch from './DestinationSearch';
import {showSuccess} from '../helper/helperFunction';
import {showError} from '../helper/helperFunction';

//import {ScrollView} from 'react-native-gesture-handler';

const ChooseLocation = props => {
  const [state, setState] = useState({
    destinationCords: {},
    pickupCords: {},
  });
  const {pickupCords, destinationCords} = state;
  const onDone = () => {
    // props.route.params.getCordinates({
    //   pickupCords,
    //   destinationCords,
    // });
    // }
    // showSuccess('Locating');
    props.route.params.getCordinates({pickupCords, destinationCords});
    navigation.navigate(NavigationStrings.HOMESCREEN);
  };
  const fetchPickUpCords = (lat, lng) => {
    // console.log('lat==>>>', lat);
    // console.log('city texts', lng);
    setState({
      ...state,
      pickupCords: {
        latitude: lat,
        longitude: lng,
      },
    });
    //console.log('run');
  };
  const fetchDestinationCords = (lat, lng) => {
    setState({
      ...state,
      destinationCords: {
        latitude: lat,
        longitude: lng,
      },
    });
  };

  console.log('pickupe==>>>', pickupCords);
  console.log('dest=====>', destinationCords);
  console.log('props====>', props);

  const checkValid = () => {
    if (Object.keys(pickupCords).length === 0) {
      showError('Please enter your current location');
      return false;
    }
    if (Object.keys(destinationCords).length === 0) {
      showError('Please enter your destination location');
      return false;
    }
    return true;
  };

  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);
  const [clicked, setClicked] = useState(false); // Add clicked state

  const checkNavigation = () => {
    if (originPlace && destinationPlace) {
      navigation.navigate('SearchResults', {
        originPlace,
        destinationPlace,
      });
    }
  };
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{backgroundColor: 'white', flex: 1, padding: 24}}>
        <View style={styles.personpin}>
          <MaterialIcons
            name="person-pin-circle"
            color={'#50478f'}
            width={responsiveWidth(7)}
            height={responsiveHeight(4.5)}
            style={{fontSize: moderateScale(23)}}
          />
        </View>
        <View style={styles.line} />
        {/* Square near Destination input */}
        <View style={styles.locationpin}>
          <MaterialIcons
            name="location-pin"
            color={'#e60000'}
            width={responsiveWidth(7)}
            height={responsiveHeight(4.5)}
            style={{fontSize: moderateScale(23)}}
          />
        </View>

        <DestinationSearch
          placheholderText="Enter Current Location"
          fetchAddress={fetchPickUpCords}
        />

        <DestinationSearch
          placheholderText="Enter Destination Location"
          fetchAddress={fetchDestinationCords}
        />
        <CustomBtn
          btnText="Done"
          onPress={onDone}
          btnStyle={{marginTop: 404}}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // height: responsiveHeight(14),
    // width: responsiveWidth(94),
    // backgroundColor: 'red',
    flex: 1,
    // borderRadius: 10,
    // marginTop: 10,
    // //backgroundColor: '#fff',
  },
  textInput: {
    padding: moderateScale(7),
    // backgroundColor: 'green',
    marginVertical: moderateScale(4),
    marginLeft: moderateScale(10),
  },

  separator: {
    backgroundColor: '#efefef',
    height: 1,
  },
  listView: {
    marginTop: responsiveHeight(8),

    height: responsiveHeight(32),
    // backgroundColor: '#eee',
    // position: 'absolute',
    width: responsiveWidth(87),
    //backgroundColor: 'yellow',
  },
  listView2: {
    width: responsiveWidth(83),
    marginTop: responsiveHeight(7),
    height: responsiveHeight(30),
    // backgroundColor: 'blue',
    position: 'absolute',
    //backgroundColor: 'blue',
  },
  autocompleteContainer: {
    marginTop: responsiveHeight(1),
    marginLeft: responsiveWidth(6),
    marginRight: responsiveWidth(6),
    width: responsiveWidth(84),
    height: responsiveHeight(6),
    borderRadius: moderateScale(15),
    // backgroundColor: 'blue',
  },

  personpin: {
    position: 'absolute',
    marginTop: responsiveHeight(1.8),
    marginLeft: responsiveWidth(1.7),
  },
  line: {
    width: responsiveWidth(0.4),
    height: responsiveHeight(3),
    backgroundColor: 'grey',
    position: 'absolute',
    marginTop: responsiveHeight(5.9),
    marginLeft: responsiveWidth(4.8),
  },
  locationpin: {
    position: 'absolute',
    marginTop: responsiveHeight(9.4),
    marginLeft: responsiveWidth(1.8),
  },
});
export default ChooseLocation;
