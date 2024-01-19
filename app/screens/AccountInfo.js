import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {useNavigation} from '@react-navigation/native';
import NavigationStrings from '../constants/NavigationStrings';

export default function App() {
  const [username, setUsername] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [cnic, setCnic] = useState('');
  const [capturedImage, setCapturedImage] = useState(null);
  const [isImageCaptured, setIsImageCaptured] = useState(false);

  const handleSignUp = () => {
    if (!username || !mobileNumber || !password || !email || !cnic) {
      Alert.alert('Validation Error', 'All fields are required');
      return;
    }

    console.log('Username:', username);
    console.log('Mobile Number:', mobileNumber);
    console.log('Password:', password);
    console.log('Email:', email);
    console.log('CNIC:', cnic);

    navigation.navigate(NavigationStrings.PROFILE);
  };

  const handleImagePress = () => {
    console.log('Image Pressed!');
  };

  const pickImage = async () => {
    const {status} = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);

    if (status !== RESULTS.GRANTED) {
      Alert.alert(
        'Permission Denied',
        'We need access to your gallery to select an image.',
      );
      return;
    }

    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          const imageType = response.uri.split('.').pop().toLowerCase();
          if (
            imageType === 'jpeg' ||
            imageType === 'jpg' ||
            imageType === 'png'
          ) {
            setCapturedImage(response.uri);
            setIsImageCaptured(true);
            console.log('Image selected from gallery:', response.uri);
            console.log('Image type:', imageType);
          } else {
            console.log(
              'Image format is not supported. Please select a JPEG, JPG, or PNG file.',
            );
          }
        }
      },
    );
  };

  const takePhoto = async () => {
    const {status} = await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);

    console.log('Permission status:', status);

    if (status !== RESULTS.GRANTED) {
      Alert.alert(
        'Permission Denied',
        'We need access to your gallery to select an image.',
      );
      return;
    }

    Alert.alert(
      'Choose Image Source',
      'Select the image source for your profile picture:',
      [
        {
          text: 'Gallery',
          onPress: () => {
            pickImage();
          },
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
    );
  };

  useEffect(() => {
    if (capturedImage) {
      console.log('Image captured:', capturedImage);
      // Additional logic or actions after image is captured
    }
  }, [capturedImage]);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.AccountHeading}>My Account</Text>
        <View style={styles.headercontainerprofileImage}>
          <View style={styles.profileImagecamera}>
            <View style={styles.buttonContainer}></View>
          </View>
        </View>
      </View>
      {/* ... (rest of your code) */}
      <View>
        <TouchableOpacity onPress={takePhoto}>
          <Image
            source={require('../assets/images/User.png')}
            style={styles.saveIconcamera}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.InputFieldcontainer}>
        <Text style={styles.InputLable}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={text => setUsername(text)}
        />
      </View>
      <View style={styles.InputFieldcontainer}>
        <Text style={styles.InputLable}>Mobile Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          keyboardType="phone-pad"
          onChangeText={text => setMobileNumber(text)}
        />
      </View>
      <View style={styles.InputFieldcontainer}>
        <Text style={styles.InputLable}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={text => setPassword(text)}
        />
      </View>
      <View style={styles.InputFieldcontainer}>
        <Text style={styles.InputLable}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={styles.InputFieldcontainer}>
        <Text style={styles.InputLable}>CNIC</Text>
        <TextInput
          style={styles.input}
          placeholder="CNIC"
          keyboardType="numeric"
          onChangeText={text => setCnic(text)}
        />
      </View>
      <TouchableOpacity style={styles.continue} onPress={() => handleSignUp()}>
        <Text style={styles.continueText}>Save Information</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  AccountHeading: {
    bottom: 37,
    color: '#50478F',
    fontSize: 32,
    alignSelf: 'flex-start',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    width: '100%',
    borderRadius: 17,
  },
  InputFieldcontainer: {
    alignSelf: 'flex-start',
    marginLeft: 50,
    width: 300,
    height: 100,
    borderRadius: 20,
  },
  image: {
    height: 10,
    width: 10,
  },
  continue: {
    width: 289,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#50478F',
    flexShrink: 0,
  },
  continueText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 22,
    top: 8,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  InputLable: {
    display: 'flex',
    width: 176,
    height: 32,
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: '#50478F',
  },
  saveIconcamera: {
    height: 70,
    width: 70,
    alignContent: 'center',
    borderRadius: 35,
  },
});
