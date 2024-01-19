import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import NavigationStrings from '../constants/NavigationStrings';
import {mode} from 'native-base/lib/typescript/theme/tools';
import Popup from '../components/Popup';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

const MyTrips = () => {
  const [Bottomtab, setBottomTab] = useState(0);

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperView}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate(NavigationStrings.HOMESCREEN)}>
            <Image
              style={{
                width: responsiveWidth(12),
                height: responsiveWidth(12),
                marginLeft: responsiveWidth(5),
              }}
              resizeMode="contain"
              source={require('../assets/images/goBack.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.uperText}>Trips History</Text>
        </View>
      </View>
      <View style={styles.upperBotm}>
        <TouchableOpacity
          style={{
            width: responsiveWidth(34),
            height: responsiveHeight(5),
            borderRadius: moderateScale(25),
            backgroundColor: Bottomtab == 0 ? '#50478f' : 'grey',
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => {
            setBottomTab(0);
          }}>
          <Text
            style={{
              color: Bottomtab == 0 ? '#edebebf5' : '#edebebf5',
              fontSize: responsiveFontSize(2),
              fontWeight: 700,
            }}>
            Today
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: responsiveWidth(34),
            height: responsiveHeight(5),
            borderRadius: moderateScale(25),
            backgroundColor: Bottomtab == 1 ? '#50478f' : 'grey',
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => {
            setBottomTab(1);
          }}>
          <Text
            style={{
              color: Bottomtab == 1 ? '#edebebf5' : '#edebebf5',
              fontSize: responsiveFontSize(2),
              fontWeight: 700,
            }}>
            Past
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.VehInfo}>
        <View style={styles.VehLogo}>
          <AntDesign
            name="car"
            color={Bottomtab == 0 ? '#50478f' : '#edebebf5'}
            width={responsiveWidth(58)}
            height={responsiveHeight(47.2)}
            style={{
              fontSize: moderateScale(49),
              marginLeft: responsiveWidth(5),
              marginTop: moderateScale(27),
            }}
          />
        </View>
        <View style={styles.Carinfo}>
          <View style={styles.Date}>
            <Text>1,October,08:00 am</Text>
          </View>
          <View style={styles.vehicleDetails}>
            <Text style={styles.vehiclename}>Toyota Altis(LED-7250)</Text>
            <View
              style={{
                //backgroundColor: 'red',
                width: responsiveWidth(40),
                marginLeft: responsiveWidth(15),
              }}>
              <Text style={styles.loc}>G1 Market 08:00 am</Text>
              <Text style={styles.loc}>Lake City 09:00 am</Text>
            </View>

            <View style={styles.locpin}>
              <View style={styles.personpin}>
                <MaterialIcons
                  name="person-pin-circle"
                  color={'#50478f'}
                  width={responsiveWidth(7)}
                  height={responsiveHeight(3.1)}
                  style={{fontSize: moderateScale(16)}}
                />
              </View>
              <View style={styles.line} />
              <View style={styles.locationpin}>
                <MaterialIcons
                  name="location-pin"
                  color={'#e60000'}
                  width={responsiveWidth(7)}
                  height={responsiveHeight(3)}
                  style={{
                    fontSize: moderateScale(16),
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.VehInfo}>
        <View style={styles.VehLogo}>
          <AntDesign
            name="car"
            color={Bottomtab == 0 ? '#50478f' : '#edebebf5'}
            width={responsiveWidth(58)}
            height={responsiveHeight(47.2)}
            style={{
              fontSize: moderateScale(49),
              marginLeft: responsiveWidth(5),
              marginTop: moderateScale(27),
            }}
          />
        </View>
        <View style={styles.Carinfo}>
          <View style={styles.Date}>
            <Text>1,October,08:00 am</Text>
          </View>
          <View style={styles.vehicleDetails}>
            <Text style={styles.vehiclename}>Honda Civic(LEQ-7290)</Text>
            <View
              style={{
                //backgroundColor: 'red',
                width: responsiveWidth(40),
                marginLeft: responsiveWidth(15),
              }}>
              <Text style={styles.loc}>Township A1 03:23 pm</Text>
              <Text style={styles.loc}>Adda Plot 05:04 pm</Text>
            </View>

            <View style={styles.locpin}>
              <View style={styles.personpin}>
                <MaterialIcons
                  name="person-pin-circle"
                  color={'#50478f'}
                  width={responsiveWidth(7)}
                  height={responsiveHeight(3.1)}
                  style={{fontSize: moderateScale(16)}}
                />
              </View>
              <View style={styles.line} />
              <View style={styles.locationpin}>
                <MaterialIcons
                  name="location-pin"
                  color={'#e60000'}
                  width={responsiveWidth(7)}
                  height={responsiveHeight(3)}
                  style={{
                    fontSize: moderateScale(16),
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.VehInfo}>
        <View style={styles.VehLogo}>
          <AntDesign
            name="car"
            color={Bottomtab == 0 ? '#50478f' : '#edebebf5'}
            width={responsiveWidth(58)}
            height={responsiveHeight(47.2)}
            style={{
              fontSize: moderateScale(49),
              marginLeft: responsiveWidth(5),
              marginTop: moderateScale(27),
            }}
          />
        </View>
        <View style={styles.Carinfo}>
          <View style={styles.Date}>
            <Text>1,October,08:00 am</Text>
          </View>
          <View style={styles.vehicleDetails}>
            <Text style={styles.vehiclename}>Toyota Yaris(LED-7123)</Text>
            <View
              style={{
                //backgroundColor: 'red',
                width: responsiveWidth(40),
                marginLeft: responsiveWidth(15),
              }}>
              <Text style={styles.loc}>MM Alam Road 11:00 am</Text>
              <Text style={styles.loc}>Bahria Town 02:00 pm</Text>
            </View>

            <View style={styles.locpin}>
              <View style={styles.personpin}>
                <MaterialIcons
                  name="person-pin-circle"
                  color={'#50478f'}
                  width={responsiveWidth(7)}
                  height={responsiveHeight(3.1)}
                  style={{fontSize: moderateScale(16)}}
                />
              </View>
              <View style={styles.line} />
              <View style={styles.locationpin}>
                <MaterialIcons
                  name="location-pin"
                  color={'#e60000'}
                  width={responsiveWidth(7)}
                  height={responsiveHeight(3)}
                  style={{
                    fontSize: moderateScale(16),
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.VehInfo}>
        <View style={styles.VehLogo}>
          <AntDesign
            name="car"
            color={Bottomtab == 0 ? '#50478f' : '#edebebf5'}
            width={responsiveWidth(58)}
            height={responsiveHeight(47.2)}
            style={{
              fontSize: moderateScale(49),
              marginLeft: responsiveWidth(5),
              marginTop: moderateScale(27),
            }}
          />
        </View>
        <View style={styles.Carinfo}>
          <View style={styles.Date}>
            <Text>1,October,08:00 am</Text>
          </View>
          <View style={styles.vehicleDetails}>
            <Text style={styles.vehiclename}>Honda CD-70(LEX-4050)</Text>
            <View
              style={{
                //backgroundColor: 'red',
                width: responsiveWidth(40),
                marginLeft: responsiveWidth(15),
              }}>
              <Text style={styles.loc}>Johar Town 05:00 am</Text>
              <Text style={styles.loc}>Model Town 08:00 am</Text>
            </View>

            <View style={styles.locpin}>
              <View style={styles.personpin}>
                <MaterialIcons
                  name="person-pin-circle"
                  color={'#50478f'}
                  width={responsiveWidth(7)}
                  height={responsiveHeight(3.1)}
                  style={{fontSize: moderateScale(16)}}
                />
              </View>
              <View style={styles.line} />
              <View style={styles.locationpin}>
                <MaterialIcons
                  name="location-pin"
                  color={'#e60000'}
                  width={responsiveWidth(7)}
                  height={responsiveHeight(3)}
                  style={{
                    fontSize: moderateScale(16),
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyTrips;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  uperText: {
    fontWeight: 600,
    fontSize: responsiveFontSize(3.5),
    color: '#50478f',
    marginHorizontal: responsiveWidth(15),
    marginTop: responsiveHeight(1),
  },
  upperView: {
    width: responsiveWidth(100),
    height: responsiveHeight(7),
    //backgroundColor: 'red',
    flexDirection: 'row',
  },
  Carinfo: {
    width: responsiveWidth(60),
    height: responsiveHeight(12),
    // backgroundColor: 'green',
  },
  VehInfo: {
    width: responsiveWidth(85),
    height: responsiveHeight(13),
    backgroundColor: 'white',
    borderRadius: responsiveWidth(5),
    marginLeft: moderateScale(30),
    flexDirection: 'row',
    marginTop: responsiveHeight(1),
  },
  VehLogo: {
    width: responsiveWidth(20),
    height: responsiveHeight(10),
    // backgroundColor: 'red',
    // justifyContent: 'center',
    marginLeft: moderateScale(10),
    // marginTop: moderateScale(25),
  },
  locpin: {
    // backgroundColor: 'red',
    width: responsiveWidth(7),
    height: responsiveHeight(5),
    bottom: responsiveHeight(4.7),
    left: responsiveWidth(6),
  },
  Date: {
    marginLeft: responsiveWidth(30),
    marginTop: responsiveWidth(2),
    fontSize: responsiveFontSize(1.5),
    fontWeight: 100,
    // backgroundColor: 'black',
    height: responsiveHeight(2),
    width: responsiveWidth(30),
  },
  vehicleDetails: {
    // backgroundColor: 'red',
    height: responsiveHeight(9),
    //marginTop: responsiveHeight(4),
  },
  vehiclename: {
    marginTop: responsiveHeight(1),
    //marginRight: responsiveWidth(60),
    marginLeft: responsiveWidth(6),
    fontWeight: '500',
  },
  loc: {
    marginTop: responsiveHeight(1),
    //marginRight: responsiveWidth(60),
    // marginLeft: responsiveWidth(9),
    fontWeight: '300',
  },
  upperBotm: {
    zIndex: 0,
    width: responsiveWidth(72),
    alignItems: 'center',
    height: responsiveHeight(8.5),
    //backgroundColor: '#50478f',
    justifyContent: 'center',
    borderRadius: moderateScale(35),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: responsiveWidth(14),
  },
  bottomView: {
    width: responsiveWidth(100),
    height: responsiveHeight(65),
    borderRadius: moderateScale(35),
    // backgroundColor: 'green',
    padding: moderateScale(25),
  },
  tabView: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    paddingHorizontal: responsiveWidth(2),
    paddingVertical: responsiveHeight(1),
    width: responsiveWidth(90),
    height: responsiveHeight(10),
    borderRadius: moderateScale(15),
    alignItems: 'center',
  },
  line: {
    width: responsiveWidth(0.4),
    height: responsiveHeight(1.8),
    // backgroundColor: 'grey',
    position: 'absolute',
    marginTop: responsiveHeight(5.1),
    marginLeft: responsiveWidth(1.9),
  },
  text1: {
    fontSize: responsiveFontSize(2.4),
    marginBottom: responsiveHeight(1.5),
    fontWeight: '600',
  },
  text2: {
    marginTop: responsiveHeight(4.5),
    marginLeft: -responsiveWidth(22),
  },
});
