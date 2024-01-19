import {mode} from 'native-base/lib/typescript/theme/tools';
import React from 'react';
import {
  View,
  StyleSheet,
  Button,
  Modal,
  Image,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';

const ModalPoup = ({visible, children}) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const Popup = () => {
  const [visible, setVisible] = React.useState(true);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
      }}>
      <ModalPoup visible={visible}>
        {/* <View
          style={{
            // alignItems: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: 'pink',
          }}> */}
        <Image
          source={require('../assets/images/success.png')}
          style={{
            height: 30,
            width: 30,
            flexDirection: 'row',
            // justifyContent: 'center',
            marginLeft: moderateScale(40),
            marginTop: moderateScale(13),

            // alignSelf: 'center',
            // backgroundColor: 'red',
          }}
        />
        <View
          style={{
            //  backgroundColor: 'grey',
            width: '30%',
            flexDirection: 'row',
            justifyContent: 'center',
            marginLeft: moderateScale(105),
            marginTop: moderateScale(10),
            position: 'absolute',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'left',
              //alignSelf: 'center',
            }}>
            Success
          </Text>
        </View>
        <View
          style={{
            // backgroundColor: 'grey',
            width: '5%',
            flexDirection: 'row',
            // justifyContent: 'center',
            marginLeft: moderateScale(245),
            marginTop: moderateScale(17),
            position: 'absolute',
          }}>
          <TouchableOpacity onPress={() => setVisible(false)}>
            <Image
              source={require('../assets/images/x.png')}
              style={{
                height: 25,
                width: 25,
                // backgroundColor: 'red',
                // justifyContent: 'space-between',
              }}
            />
          </TouchableOpacity>
        </View>

        {/* </View> */}
      </ModalPoup>
      {/* <Button title="Open Modal" onPress={() => setVisible(true)} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
  },
  modalContainer: {
    width: '80%',
    height: '7%',
    backgroundColor: 'lightblue',
    // paddingHorizontal: 40,
    //paddingVertical: 10,
    borderRadius: 25,
    elevation: 20,
    flexDirection: 'row',
    // alignSelf: 'flex-end',
    position: 'relative',
    marginTop: moderateScale(620),
  },
});

export default Popup;
