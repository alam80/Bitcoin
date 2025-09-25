import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SetPin({ navigation }) {
  const [pin, setPin] = useState(['', '', '', '']);
  const [confirmPin, setConfirmPin] = useState(['', '', '', '']);

  // Helper to render PIN inputs
  const renderPinInputs = (values, setValues) => {
    return (
      <View style={styles.pinRow}>
        {values.map((val, idx) => (
          <TextInput
            key={idx}
            style={styles.pinInput}
            value={val}
            maxLength={1}
            keyboardType="number-pad"
            onChangeText={(text) => {
              const newVals = [...values];
              newVals[idx] = text;
              setValues(newVals);
            }}
          />
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* ==== Top Wave BG ==== */}
      <View style={styles.topContainer}>
        <Image
          source={require('../../assets/Vector1.png')}
          style={styles.topWave}
        />

        {/* Header */}
        <View style={styles.headerRow}>
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

      {/* ==== Bottom Wave BG ==== */}
      <Image
        source={require('../../assets/Vector2.png')}
        style={styles.bottomWave}
      />

      {/* ==== Form ==== */}
      <View style={styles.formCard}>
        <Text style={styles.title}>Set PIN</Text>
        <Text style={styles.subtitle}>
          Choose a 4-Digit Pin for Quick Access
        </Text>

        {/* Set PIN */}
        <View style={styles.section}>
          <View style={styles.sectionRow}>
            <Icon name="key-outline" size={20} color="#000" />
            <Text style={styles.sectionTitle}> Set PIN</Text>
          </View>
          <Text style={styles.sectionDesc}>
            Create a secure 4-digit PIN to protect your account.
          </Text>
          {renderPinInputs(pin, setPin)}
        </View>

        {/* Confirm PIN */}
        <View style={styles.section}>
          <View style={styles.sectionRow}>
            <Icon name="key-outline" size={20} color="#000" />
            <Text style={styles.sectionTitle}> Confirm PIN</Text>
          </View>
          <Text style={styles.sectionDesc}>
            Re-enter your 4-digit PIN to protect your account.
          </Text>
          {renderPinInputs(confirmPin, setConfirmPin)}
        </View>

        {/* Continue Button */}
        <TouchableOpacity
          style={styles.continueBtn}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  // ==== Top BG ====
  topContainer: { position: 'relative', width: '100%', height: 600 },
  topWave: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  headerRow: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: { width: 70, height: 40, resizeMode: 'contain' },
  headphone: { width: 36, height: 36, resizeMode: 'contain' },

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

  // ==== Bottom BG ====
  bottomWave: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: undefined,
    resizeMode: 'stretch',
    aspectRatio: 390 / 220,
  },

  // ==== Form ====
  formCard: {
    marginTop: -380,
    paddingHorizontal: 20,
  },
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
    marginBottom: 40,
  },

  // ==== Sections ====
  section: { marginBottom: 30 },
  sectionRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 4 },
  sectionTitle: { fontSize: 14, fontWeight: '600', color: '#222' },
  sectionDesc: { fontSize: 12, color: '#777', marginBottom: 12 },

  // ==== PIN Inputs ====
  pinRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginBottom: 10,
  },
  pinInput: {
    width: 40,
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#999',
    textAlign: 'center',
    fontSize: 18,
    color: '#000',
  },

  // ==== Button ====
  continueBtn: {
    marginTop: 20,
    backgroundColor: '#605790',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 4,
  },
  continueText: { color: '#fff', fontWeight: '700', fontSize: 15 },
});
