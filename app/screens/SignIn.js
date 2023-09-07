import * as React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontSize, FontFamily, FontFamily2} from '../../components/GlobalStyles';
const {width, height} = Dimensions.get('window');

const SignIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',

    overflow: 'visible',
  },
});

export default SignIn;
