import React, {useRef, useState, useEffect} from 'react';
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
  Alert,
} from 'react-native';
import {ethers} from 'ethers';

import {nftContract} from '../components/config';
import {useWeb3Modal} from '@web3modal/react-native';

import NFTABI from '../components/nftabi.json';
import {useNavigation} from '@react-navigation/native';
import RegLogo from '../components/RegLogo';
import {FontSize, FontFamily, FontFamily2} from '../components/GlobalStyles';
import {connectwallet} from '../components/web3Connect';
import NavigationStrings from '../constants/NavigationStrings';
import Popup from '../components/Popup';
import axios from 'axios';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  useResponsiveHeight,
} from 'react-native-responsive-dimensions';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import {
  WalletConnectModal,
  useWalletConnectModal,
} from '@walletconnect/modal-react-native';
import {KeyboardAvoidingView} from 'native-base';
const projectId = '9ba81a4162c222bbbcd8743f259fd999';
const providerMetadata = {
  name: 'dPeer',
  description: 'dPeer',
  url: 'https://dPeer.com/',
  icons: ['https://your-project-logo.com/'],
  redirect: {
    native: 'YOUR_APP_SCHEME://',
    universal: 'YOUR_APP_UNIVERSAL_LINK.com',
  },
};
const countries = [
  {country: 'Lahore', code: '92', iso: 'WF'},
  {country: 'Multan', code: '92', iso: 'EH'},
  {country: 'Islamabad', code: '967', 92: 'YE'},
];
const Register = () => {
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(countries);
  const [city, setcity] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const {open, isConnected} = useWalletConnectModal();
  const [email, setEmail] = useState('');
  const {connect} = useWeb3Modal();

  const navigation = useNavigation();

  // useEffect(() => {
  //   async function connectToWallet() {
  //     const connection = await connect();
  //     setProvider(connection);
  //   }

  //   checkNFTOwnership();
  // }, []);

  // const checkNFTOwnership = async () => {
  //   try {
  //     const connection = await connect();

  //     const provider = new ethers.providers.Web3Provider(connection);
  //     const signer = provider.getSigner();
  //     const addressraw = signer.getAddress();
  //     const addressstr = (await addressraw).valueOf();
  //     let contract = new ethers.Contract(nftContract, NFTABI, signer);
  //     let getids = await contract.walletOfOwner(addressstr);

  //     // Return the getids variable
  //     return getids;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const handleRegister = () => {
    const user = {
      city: city,
      email: email,
    };

    // send a POST  request to the backend API to register the user
    axios
      .post('http://localhost:8000/register', user)
      .then(response => {
        console.log(response);
        Alert.alert(
          'Registration successful',
          'You have been registered Successfully',
        );

        setEmail('');
        setcity('');
      })
      .catch(error => {
        Alert.alert(
          'Registration Error',
          'An error occurred while registering',
        );
        console.log('registration failed', error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <RegLogo />
        <View
          style={{
            backgroundColor: 'blue',
            width: responsiveWidth(100),
            height: responsiveHeight(30),
          }}>
          <Image
            style={styles.regpic}
            source={require('../assets/images/regpic2.png')}
          />
        </View>

        {/* <Image
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
      /> */}

        <TouchableOpacity
          onPress={() => navigation.navigate(NavigationStrings.SIGNIN)}>
          <Text style={styles.signInText}>Sign In Now</Text>
        </TouchableOpacity>
        <View
          style={{
            // backgroundColor: 'grey',
            width: responsiveWidth(100),
            height: responsiveHeight(53),
          }}>
          <Text style={styles.dropText}>Select City</Text>
          <TouchableOpacity
            style={styles.dropdownSelector}
            onPress={() => {
              setClicked(!clicked);
            }}>
            <Text style={{fontWeight: '600'}}>
              {city == '' ? 'Select City' : city}
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
                        setcity(item.country);
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
          <Text style={styles.phoneNumText}>Email</Text>
          <View style={styles.dropdownSelector}>
            <TextInput
              style={styles.phoneNumberInput}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              placeholder="Enter your Email"
            />
          </View>
          <View style={styles.ContinueBtn}>
            <TouchableOpacity
              style={styles.phoneNumberInput}
              onPress={() => navigation.navigate(NavigationStrings.SIGNIN)}>
              <TouchableOpacity
                onPress={handleRegister}
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
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              if (isConnected) {
                navigation.navigate(NavigationStrings.HOMESCREEN);
              } else {
                //open();
                navigation.navigate(NavigationStrings.HOMESCREEN);
              }
            }}>
            <Image
              style={styles.logo}
              source={require('../assets/images/metalogow.png')}
            />
            <Text style={styles.buttonText}>Connect to Metamask</Text>
          </TouchableOpacity>
          <WalletConnectModal
            projectId={projectId}
            providerMetadata={providerMetadata}
          />
        </View>
      </KeyboardAvoidingView>
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

  regpic: {
    width: responsiveWidth(100),
    height: responsiveHeight(35),
  },
  homeloc: {
    width: responsiveWidth(7),

    height: responsiveHeight(22),
    marginTop: moderateVerticalScale(220),
    left: moderateScale(140),
    resizeMode: 'contain',
    position: 'absolute',
  },
  homeloc2: {
    width: responsiveWidth(18),
    height: responsiveHeight(35),
    marginTop: moderateVerticalScale(138),
    left: moderateScale(210),
    resizeMode: 'contain',
    position: 'absolute',
  },
  homeloc3: {
    width: responsiveWidth(9),

    height: responsiveHeight(20),
    marginTop: moderateVerticalScale(270),
    left: moderateScale(295),
    resizeMode: 'contain',
    position: 'absolute',
  },
  signInText: {
    fontSize: responsiveFontSize(2),
    color: 'purple', // Adjust the text color as needed
    fontFamily: FontFamily.ponnala,
    fontWeight: 'bold', // Make the text bold
    textDecorationLine: 'underline',
  },
  dropText: {
    left: responsiveWidth(8),
    top: responsiveHeight(2),
    fontFamily: FontFamily.ponnala,
    fontWeight: 'bold', // Make the text bold
    fontSize: 15,
  },
  dropdownSelector: {
    width: responsiveWidth(87),
    top: responsiveHeight(1),
    height: responsiveHeight(6),
    borderRadius: moderateScale(30),
    borderWidth: 0.5,
    borderColor: '#8e8e8e',
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: responsiveWidth(4),
    paddingRight: responsiveWidth(6),

    //backgroundColor: 'green',
  },
  icon: {
    width: 15,
    height: 15,
  },
  dropdown: {
    width: responsiveWidth(84),
    height: responsiveHeight(20),
    borderRadius: moderateScale(10),

    backgroundColor: '#fff',
    elevation: 5,
    alignSelf: 'center',
    position: 'absolute',
    top: responsiveHeight(12),
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
    top: responsiveHeight(2),
    left: responsiveWidth(8),
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
    width: responsiveWidth(80),
    height: responsiveHeight(6),
    borderRadius: moderateScale(30),
    borderWidth: 0.5,
    borderColor: '#8e8e8e',
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#50478f',
  },
  iconPosition: {
    top: '-2%',

    alignItems: 'center',
  },
  ContinueText: {
    alignSelf: 'center',
    marginTop: responsiveHeight(3),
    fontSize: responsiveFontSize(2.1),
    color: 'purple', // Adjust the text color as needed
    fontFamily: FontFamily.ponnala,
    fontWeight: 'bold', // Make the text bold
    // textDecorationLine: 'underline',
  },
  buttonContainer: {
    width: responsiveWidth(80),
    height: responsiveHeight(6.5),
    borderRadius: moderateScale(14),
    borderWidth: 0.5,
    borderColor: '#8e8e8e',
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: responsiveWidth(2),
    paddingRight: responsiveWidth(9),

    backgroundColor: '#f08913',
  },
  buttonText: {
    color: '#ebebeb',
    fontSize: responsiveFontSize(2.5),

    fontWeight: 'bold',
  },
  logo: {
    width: '20%',
    height: '80%',
    resizeMode: 'contain',
  },
});

export default Register;
