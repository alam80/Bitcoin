import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';

export default function SignUpOtp({ navigation }) {
  const [emailOtp, setEmailOtp] = useState(['', '', '', '']);
  const [mobileOtp, setMobileOtp] = useState(['', '', '', '']);

  const emailRefs = [useRef(), useRef(), useRef(), useRef()];
  const mobileRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleOtpChange = (text, index, type) => {
    if (type === 'email') {
      const newOtp = [...emailOtp];
      newOtp[index] = text;
      setEmailOtp(newOtp);
      if (text && index < 3) emailRefs[index + 1].current.focus();
    } else {
      const newOtp = [...mobileOtp];
      newOtp[index] = text;
      setMobileOtp(newOtp);
      if (text && index < 3) mobileRefs[index + 1].current.focus();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* ==== Top Section ==== */}
      <View style={styles.topContainer}>
        <Image
          source={require('../../assets/Vector1.png')}
          style={styles.topWave}
        />

        <View style={styles.headerRow}>
          {/* Back Arrow Circle */}
          <TouchableOpacity
            style={styles.circleIcon}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={require('../../assets/back.png')}
              style={styles.iconImage}
            />
          </TouchableOpacity>

          {/* Headphone Circle */}
          <TouchableOpacity style={styles.circleIcon}>
            <Image
              source={require('../../assets/bx_support.png')}
              style={styles.iconImage}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* ==== Bottom Background ==== */}
      <Image
        source={require('../../assets/Vector2.png')}
        style={[styles.bottomWave, { aspectRatio: 390 / 220 }]}
      />

      {/* ==== OTP Card ==== */}
      <View style={styles.otpCard}>
        <Text style={styles.title}>Verify OTP</Text>
        <Text style={styles.subtitle}>
          Secure Your Account via Mobile & Email
        </Text>

        {/* Email OTP */}
        <View style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.sectionTitle}>📧 Email OTP</Text>
          </View>
          <Text style={styles.hint}>
            Enter the 4 digit OTP sent to a******v@mail.com
          </Text>
          <View style={styles.otpRow}>
            {emailOtp.map((val, index) => (
              <TextInput
                key={index}
                ref={emailRefs[index]}
                style={styles.otpInput}
                keyboardType="number-pad"
                maxLength={1}
                value={val}
                onChangeText={text => handleOtpChange(text, index, 'email')}
              />
            ))}
          </View>
          <TouchableOpacity>
            <Text style={styles.resend}>Resend OTP (in 01:52s)</Text>
          </TouchableOpacity>
        </View>

        {/* Mobile OTP */}
        <View style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.sectionTitle}>📱 Mobile OTP</Text>
          </View>
          <Text style={styles.hint}>
            Enter the 4 digit OTP sent to +9192******82
          </Text>
          <View style={styles.otpRow}>
            {mobileOtp.map((val, index) => (
              <TextInput
                key={index}
                ref={mobileRefs[index]}
                style={styles.otpInput}
                keyboardType="number-pad"
                maxLength={1}
                value={val}
                onChangeText={text => handleOtpChange(text, index, 'mobile')}
              />
            ))}
          </View>
          <TouchableOpacity>
            <Text style={styles.resend}>Resend OTP</Text>
          </TouchableOpacity>
        </View>

        {/* Verify Button */}
        <TouchableOpacity
          style={styles.verifyBtn}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('SetPin')}
        >
          <Text style={styles.verifyText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  // Top
  topContainer: { position: 'relative', width: '100%', height: 600 },
  topWave: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  headerRow: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circleIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  iconImage: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },

  // Bottom Vector
  bottomWave: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: undefined,
    resizeMode: 'stretch',
  },

  // OTP Card
  otpCard: { marginTop: -400, paddingHorizontal: 20 },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
    marginBottom: 6,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 13,
    color: '#777',
    marginBottom: 30,
  },

  section: { marginBottom: 25 },
  row: { flexDirection: 'row', alignItems: 'center' },
  sectionTitle: { fontSize: 14, fontWeight: '600', color: '#333' },
  hint: { fontSize: 12, color: '#777', marginTop: 4, marginBottom: 10 },

  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 5,
  },
  otpInput: {
    borderBottomWidth: 1,
    borderColor: '#aaa',
    width: 50,
    fontSize: 18,
    textAlign: 'center',
    color: '#222',
  },
  resend: {
    fontSize: 12,
    color: '#6D4CFF',
    fontWeight: '600',
    marginTop: 4,
  },

  verifyBtn: {
    backgroundColor: '#605790',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    elevation: 4,
    marginTop: 30,
    marginHorizontal: 15,
  },
  verifyText: { color: '#fff', fontWeight: '700', fontSize: 16 },
});
