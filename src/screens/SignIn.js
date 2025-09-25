import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  SafeAreaView,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SignIn({ navigation }) {
  const [phone, setPhone] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* ==== Top Section ==== */}
      <View style={styles.topContainer}>
        <Image
          source={require('../../assets/Vector1.png')}
          style={styles.topWave}
        />

        <View style={styles.headerRow}>
          {/* Logo */}
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logo}
          />

          {/* Headphone Circle */}
          <TouchableOpacity style={styles.circleBtn}>
            <Image
              source={require('../../assets/bx_support.png')}
              style={styles.headphone}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* ==== Bottom Background ==== */}
      <Image
        source={require('../../assets/Vector2.png')}
        style={[styles.bottomWave, { aspectRatio: 390 / 220 }]}
      />

      {/* ==== Form ==== */}
      <View style={styles.formCard}>
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subtitle}>Access Your Account Securely</Text>

        {/* Phone Input */}
        <View style={styles.inputRow}>
          <Icon name="phone-outline" size={20} color="#777" />
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            placeholderTextColor="#aaa"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </View>

        {/* Checkbox */}
        <View style={styles.checkboxRow}>
          <TouchableOpacity
            onPress={() => setIsChecked(!isChecked)}
            activeOpacity={0.7}
          >
            <Icon
              name={isChecked ? 'checkbox-marked' : 'checkbox-blank-outline'}
              size={22}
              color="#6D4CFF"
            />
          </TouchableOpacity>

          <Text style={styles.checkboxText}> I agree to the </Text>
          <TouchableOpacity
            onPress={() => setShowTerms(true)}
            activeOpacity={0.7}
          >
            <Text style={styles.link}>Terms and Conditions.</Text>
          </TouchableOpacity>
        </View>

        {/* Continue Button */}
        <TouchableOpacity
          style={styles.continueBtn}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('OtpVerify')}
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.links}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ==== Modal ==== */}
      <Modal
        visible={showTerms}
        animationType="slide"
        transparent
        onRequestClose={() => setShowTerms(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <View style={styles.modalHandle} />
            <Text style={styles.modalTitle}>Terms & Conditions</Text>
            <Text style={styles.modalText}>
              I hereby declare that the particulars given by me above are true
              and correct to best of my knowledge as on the date of making this
              application. I agree and undertake to intimate “XYZ COMPANY” any
              change(s) in the details mentioned by me in the form. I further
              agree that if any of the above information given by me is found to
              be false or misrepresenting, I may be held liable for it and will
              render my account liable for termination and necessary action by
              “XYZ Company”.
            </Text>
            <Pressable
              onPress={() => setShowTerms(false)}
              style={styles.closeBtn}
            >
              <Text style={styles.closeText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  // ==== Top Section ====
  topContainer: { position: 'relative', width: '100%', height: 700 },
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
  logo: { width: 80, height: 45, resizeMode: 'contain' },

  // Circle Button for headphone
  circleBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  headphone: { width: 22, height: 22, resizeMode: 'contain' },

  // ==== Bottom Vector ====
  bottomWave: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: undefined,
    resizeMode: 'stretch',
  },

  // ==== Form ====
  formCard: { marginTop: -350, paddingHorizontal: 20 },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
    color: '#222',
    marginBottom: 6,
    marginTop: -125,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 13,
    color: '#777',
    marginTop: 6,
    marginBottom: 50,
  },

  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 25,
    paddingVertical: 5,
    gap: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop:20,
  },
  input: { flex: 1, fontSize: 15, color: '#222', paddingVertical: 5 },

  // ==== Checkbox ====
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 14,
    marginLeft: 15,
    marginRight: 15,
  },
  checkboxText: { fontSize: 13, color: '#444' },
  link: { color: '#6D4CFF', fontWeight: '600' },

  // ==== Continue Btn ====
  continueBtn: {
    backgroundColor: '#605790',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    elevation: 4,
    marginTop: 130,
    marginLeft: 15,
    marginRight: 15,
  },
  continueText: { color: '#fff', fontWeight: '700', fontSize: 16 },

  // ==== Footer ====
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 170,
    marginBottom: 10,
  },
  footerText: { 
    color: '#d2d2d2ff', 
    fontSize: 13,
    marginBottom: 5,
  },
  links: { 
    color: '#fefefeff', 
    fontWeight: '600',
    fontSize: 14,
  },

  // ==== Modal ====
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '70%',
  },
  modalHandle: {
    width: 40,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 3,
    alignSelf: 'center',
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
    color: '#222',
  },
  modalText: { fontSize: 13, color: '#444', lineHeight: 18 },
  closeBtn: {
    marginTop: 20,
    backgroundColor: '#605790',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeText: { color: '#fff', fontWeight: '600' },
});
