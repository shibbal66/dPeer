import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const PrivacyPolicy = () => {
  return (
    <ScrollView>
      <Text
        style={{
          fontSize: responsiveFontSize(3),
          textAlign: 'center',
          marginTop: responsiveHeight(6),
          marginBottom: responsiveHeight(4),
        }}>
        {' '}
        Our Privacy Policy
      </Text>
      <Text
        style={{
          marginLeft: responsiveWidth(15),
          marginRight: responsiveWidth(10),
          justifyContent: 'center',
          fontSize: responsiveFontSize(2),
        }}>
        dPeer (POWERED BY Road Buddies) Last Updated: 17-01-24 1. Introduction
        Welcome to dPeer (POWERED BY Road Buddies). This Privacy Policy outlines
        how we handle your information when you use our ride-sharing services.
        2. Information We Collect 2.1 User-Provided Information - When you
        create an account, we collect your name, email, phone, and other
        relevant details. - When using our services, we collect location, trip,
        and payment information. 2.2 Automatically Collected Information - We
        collect device, IP, and usage information through cookies and similar
        technologies. 3. How We Use Your Information We use your information to
        provide ride-sharing services, enhance customer support, and, with
        consent, send promotional messages. 4. Sharing Your Information We share
        your name, profile picture, and location with drivers to fulfill ride
        requests. We may share information to comply with legal obligations. 5.
        Data Security We implement security measures to protect your information
        from unauthorized access, alteration, disclosure, or destruction. 6.
        Your Choices You can update or delete your account, opt-out of
        marketing, and adjust location/notification settings. 7. Children's
        Privacy Our services are not intended for users under 13. We do not
        knowingly collect personal information from children. 8. Changes to
        Privacy Policy We may update this Privacy Policy to reflect changes.
        We'll notify you of significant updates. 9. Contact Us For questions or
        concerns, contact us at [contact@example.com]. By using our services,
        you agree to the terms outlined in this Privacy Policy. dPeer (POWERED
        BY Road Buddies) Team
      </Text>
    </ScrollView>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({});
