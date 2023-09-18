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
    <View style={styles.container}>
      <View style={[styles.autocompleteContainer, {zIndex: clicked ? 1 : 0}]}>
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
            setClicked(!clicked);
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
      {/* <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              ...styles.autocompleteContainer,
            },
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyAil4JimP2Tu2dVjgAFOX3A_dNre9d1W5Y',
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
        /> */}

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

      {/* Line between dots */}
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
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(14),
    position: 'relative',
    // backgroundColor: 'green',

    borderRadius: 10,
    marginTop: 10,
    //backgroundColor: '#fff',
  },
  textInput: {
    padding: 10,
    //backgroundColor: 'red',
    marginVertical: moderateScale(4),
    marginLeft: moderateScale(24),
  },

  separator: {
    backgroundColor: '#efefef',
    height: 1,
  },
  listView: {
    position: 'absolute',
    marginTop: responsiveHeight(12),
    height: responsiveHeight(12),
    //backgroundColor: '#fff',
  },
  autocompleteContainer: {
    //backgroundColor: 'red',
    marginTop: responsiveHeight(1),
    marginLeft: responsiveWidth(3),
    marginRight: responsiveWidth(6),

    height: responsiveHeight(6),
    borderRadius: moderateScale(15),
  },

  personpin: {
    position: 'absolute',
    marginTop: responsiveHeight(2.2),
    marginLeft: responsiveWidth(1.8),
  },
  line: {
    width: 1,
    height: responsiveHeight(3.7),
    backgroundColor: 'grey',
    position: 'absolute',
    top: responsiveHeight(5.9),
    left: responsiveWidth(4.4),
  },
  locationpin: {
    position: 'absolute',
    marginTop: responsiveHeight(8.7),
    marginLeft: responsiveWidth(1.8),
  },
});
export default DestinationSearch;
