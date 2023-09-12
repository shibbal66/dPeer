import React, {useState, useEffect} from 'react';
import {View, TextInput, SafeAreaView, StyleSheet} from 'react-native';
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
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          currentLocation={true}
          currentLocationLabel="Current location"
          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
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
          predefinedPlaces={[homePlace, workPlace]}
        />

        <GooglePlacesAutocomplete
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
              top: 55,
            },
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyAil4JimP2Tu2dVjgAFOX3A_dNre9d1W5Y',
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
        />

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
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
  },
  textInput: {
    padding: 10,
    backgroundColor: '#eee',
    marginVertical: 5,
    marginLeft: 20,
  },

  separator: {
    backgroundColor: '#efefef',
    height: 1,
  },
  listView: {
    position: 'absolute',
    top: 105,
  },
  autocompleteContainer: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
  },

  personpin: {
    position: 'absolute',
    top: responsiveHeight(1.5),
    left: responsiveWidth(1.4),
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
    top: responsiveHeight(10),
    left: responsiveWidth(1.8),
  },
});
export default DestinationSearch;
