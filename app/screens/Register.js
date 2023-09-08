import React, {useRef, useState} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  View,
  Dimensions,
  Text,
  FlatList,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontSize, FontFamily, FontFamily2} from '../components/GlobalStyles';
import {connectWallet} from './connectWallet';
import NavigationStrings from '../constants/NavigationStrings';

const {width, height} = Dimensions.get('window');
const countries = [
  {country: 'Lahore', code: '92', iso: 'WF'},
  {country: 'Multan', code: '92', iso: 'EH'},
  {country: 'Islamabad', code: '967', 92: 'YE'},
];
const Register = () => {
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(countries);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.regpic}
        source={require('../assets/images/regpic2.png')}
      />
      <Image
        style={styles.homeloc}
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/r1j2qwozlk-215%3A247?alt=media&token=80fcc01a-9c27-492b-9d04-520cd77b703e',
        }}
      />
      <Image
        style={styles.homeloc2}
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/r1j2qwozlk-215%3A249?alt=media&token=21496df4-fd09-4fec-b3ca-a6ab582e31d7',
        }}
      />
      <Image
        style={styles.homeloc3}
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/r1j2qwozlk-215%3A248?alt=media&token=17e58dc6-86fd-4411-9692-4b5ceca84172',
        }}
      />
      <Image
        style={styles.dpeerMainLogo2400x18001}
        source={require('../assets/images/dpeer-main-logo-2400x1800-1.png')}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate(NavigationStrings.SIGNIN)}>
        <Text style={styles.signInText}>Sign In Now</Text>
      </TouchableOpacity>
      <Text style={styles.dropText}>Select City</Text>
      <TouchableOpacity
        style={styles.dropdownSelector}
        onPress={() => {
          setClicked(!clicked);
        }}>
        <Text style={{fontWeight: '600'}}>
          {selectedCountry == '' ? 'Select Country' : selectedCountry}
        </Text>
        {clicked ? (
          <Image
            source={require('../assets/images/upload.png')}
            style={styles.icon}
          />
        ) : (
          <Image
            source={require('../assets/images/dropdown.png')}
            style={styles.icon}
          />
        )}
      </TouchableOpacity>
      {clicked ? (
        <View style={[styles.dropdown, {zIndex: clicked ? 1 : 0}]}>
          <FlatList
            data={data}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={styles.countryItem}
                  onPress={() => {
                    setSelectedCountry(item.country);
                    setClicked(!clicked);
                  }}>
                  <Text style={{fontWeight: '400', top: '35%'}}>
                    {item.country}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : null}
      <Text style={styles.phoneNumText}>Phone Number</Text>
      <View style={styles.dropdownSelector}>
        <TextInput
          style={styles.phoneNumberInput}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          placeholder="Enter your phone number"
        />
      </View>
      <View style={styles.ContinueBtn}>
        <TouchableOpacity
          style={styles.phoneNumberInput}
          onPress={() => navigation.navigate(NavigationStrings.SIGNIN)}>
          <TouchableOpacity
            onPress={() => navigation.navigate(NavigationStrings.SIGNIN)}
            style={styles.iconPosition}>
            <Text
              style={{
                color: '#ebebeb',
                fontSize: 23,
                fontFamily: FontFamily.ponnala,
                fontWeight: 'bold',
              }}>
              Continue
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <Text style={styles.ContinueText}>Or Continue With</Text>
      <TouchableOpacity style={styles.buttonContainer} onPress={connectWallet}>
        <Image
          style={styles.logo}
          source={require('../assets/images/metalogow.png')}
        />
        <Text style={styles.buttonText}>Connect to Metamask</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',

    overflow: 'visible',
  },
  Register: {},
  iconPosition: {
    top: '92%',
    position: 'absolute',
    bottom: '5%',
    right: '13%',

    width: '8%',
    height: '5%',
  },
  dpeerMainLogo2400x18001: {
    width: '100%',
    height: '18%',
    resizeMode: 'contain',

    position: 'absolute',
  },
  regpic: {
    top: '12%',
    width: '100%',
    height: '46%',
  },
  homeloc: {
    top: '30%',
    width: '7%',
    left: '37%',
    height: '20%',
    resizeMode: 'contain',
    position: 'absolute',
  },
  homeloc2: {
    top: '22%',
    width: '12%',
    height: '28%',
    left: '67%',
    resizeMode: 'contain',
    position: 'absolute',
    marginRight: '5%',
  },
  homeloc3: {
    top: '33%',
    width: '6%',
    height: '28%',
    left: '75%',
    resizeMode: 'contain',
    position: 'absolute',
    marginRight: '5%',
  },
  signInText: {
    marginTop: '6%',
    fontSize: 15,
    color: 'purple', // Adjust the text color as needed
    fontFamily: FontFamily.ponnala,
    fontWeight: 'bold', // Make the text bold
    // textDecorationLine: 'underline',
  },
  dropText: {
    right: '33%',
    top: '2%',
    fontFamily: FontFamily.ponnala,
    fontWeight: 'bold', // Make the text bold
    fontSize: 15,
  },
  dropdownSelector: {
    width: '87%',
    top: '2%',
    height: 50,
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: '#8e8e8e',
    alignSelf: 'center',
    marginTop: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    outline: 'none',
  },
  icon: {
    width: 15,
    height: 15,
  },
  dropdown: {
    width: '84%',
    height: '15%',
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: '#fff',
    elevation: 5,
    alignSelf: 'center',
    position: 'absolute',
    top: '67%',
  },
  countryItem: {
    width: '82%',
    height: 40,
    borderBottomWidth: 0.2,
    borderBottomColor: '#8e8e8e',
    alignSelf: 'center',
    paddingRight: '39%',
  },
  phoneNumText: {
    right: '29%',
    top: '3%',
    fontFamily: FontFamily.ponnala,
    fontWeight: 'bold', // Make the text bold
    fontSize: 15,
  },
  phoneNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  phoneNumberLabel: {
    fontSize: 16,
    marginRight: 10,
  },
  phoneNumberInput: {
    flex: 1,
    fontSize: 16,
  },
  ContinueBtn: {
    width: '84%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#8e8e8e',
    alignSelf: 'center',
    marginTop: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    outline: 'none',
    backgroundColor: '#50478f',
  },
  iconPosition: {
    top: '-2%',

    alignItems: 'center',
  },
  ContinueText: {
    marginTop: '3%',
    fontSize: 18,
    color: 'purple', // Adjust the text color as needed
    fontFamily: FontFamily.ponnala,
    fontWeight: 'bold', // Make the text bold
    // textDecorationLine: 'underline',
  },
  buttonContainer: {
    width: '84%',
    height: 55,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#8e8e8e',
    alignSelf: 'center',
    marginTop: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    outline: 'none',
    backgroundColor: '#f08913',
  },
  buttonText: {
    color: '#ebebeb',
    fontSize: 20,

    right: '58%',
    fontWeight: 'bold',
  },
  logo: {
    width: '20%',
    height: '80%',
    resizeMode: 'contain',
  },
});

export default Register;
