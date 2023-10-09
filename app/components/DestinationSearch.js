import React, {useState, useEffect} from 'react';
import {View, TextInput, SafeAreaView, StyleSheet, Modal} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {moderateScale} from 'react-native-size-matters';
import PlaceRow from '../components/PlaceRow';
import {mode} from 'native-base/lib/typescript/theme/tools';

const homePlace = {
  description: 'Home',
  geometry: {location: {lat: 48.8152937, lng: 2.4597668}},
};
const workPlace = {
  description: 'Work',
  geometry: {location: {lat: 48.8496818, lng: 2.2940881}},
};

const DestinationSearch = props => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);
  const [clicked, setClicked] = useState(false); // Add clicked state

  const navigation = useNavigation();

  const checkNavigation = () => {
    if (originPlace && destinationPlace) {
      navigation.navigate('SearchResults', {
        originPlace,
        destinationPlace,
      });
    }
  };

  useEffect(() => {
    checkNavigation();
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.autocompleteContainer}>
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          currentLocation={true}
          // currentLocationLabel="Current location"
          styles={{
            textInput: styles.textInput,

            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyAil4JimP2Tu2dVjgAFOX3A_dNre9d1W5Y',
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
          renderDescription={data => data.description || data.vicinity}
          // predefinedPlaces={[homePlace, workPlace]}
        />
      </View>
      <View style={styles.autocompleteContainer}>
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,

            listView: styles.listView2,
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyAil4JimP2Tu2dVjgAFOX3A_dNre9d1W5Y',
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
        />
      </View>
      {/* Circle near Origin input */}
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
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(14),
    width: responsiveWidth(94),
    // backgroundColor: 'red',

    borderRadius: 10,
    marginTop: 10,
    //backgroundColor: '#fff',
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
export default DestinationSearch;
