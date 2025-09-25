import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";

export default function EnterPin({ navigation }) {
  const [pin, setPin] = useState(["", "", "", ""]);

  const handlePinChange = (text, index) => {
    const newPin = [...pin];
    newPin[index] = text;
    setPin(newPin);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* ==== Top Section ==== */}
      <View style={styles.topContainer}>
        <Image
          source={require("../../assets/Vector1.png")}
          style={styles.topWave}
        />

        <View style={styles.headerRow}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.logo}
          />

          {/* Headphone Circle */}
          <TouchableOpacity style={styles.circleIcon}>
            <Image
              source={require("../../assets/bx_support.png")}
              style={styles.iconImage}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* ==== Bottom Background ==== */}
      <Image
        source={require("../../assets/Vector2.png")}
        style={[styles.bottomWave, { aspectRatio: 390 / 220 }]}
      />

      {/* ==== PIN Card ==== */}
      <View style={styles.formCard}>
        <Text style={styles.title}>Enter PIN</Text>
        <Text style={styles.subtitle}>Unlock using your PIN</Text>

        {/* Enter PIN Section */}
        <View style={styles.section}>
          <View style={styles.row}>
            <Image
              source={require("../../assets/pin.png")} // apko ek lock ya pin icon rakhna hoga
              style={{ width: 18, height: 18, resizeMode: "contain" }}
            />
            <Text style={styles.sectionTitle}> Enter PIN</Text>
          </View>
          <Text style={styles.hint}>
            Please enter your 4-digit PIN to unlock access.
          </Text>

          {/* PIN Input */}
          <View style={styles.pinRow}>
            {pin.map((val, index) => (
              <TextInput
                key={index}
                style={styles.pinInput}
                keyboardType="number-pad"
                maxLength={1}
                value={val}
                onChangeText={(text) => handlePinChange(text, index)}
              />
            ))}
          </View>

          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot PIN?</Text>
          </TouchableOpacity>
        </View>

        {/* Biometric Button */}
        <TouchableOpacity style={styles.biometricBtn}>
          <Image
            source={require("../../assets/fingerprint.png")}
            style={{ width: 18, height: 18, resizeMode: "contain", marginRight: 6 }}
          />
          <Text style={styles.biometricText}>Use Biometric</Text>
        </TouchableOpacity>

        {/* Continue Button */}
        <TouchableOpacity
          style={styles.continueBtn}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  // Top
  topContainer: { position: "relative", width: "100%", height: 600 },
  topWave: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
    position: "absolute",
    top: 0,
    left: 0,
  },
  headerRow: {
    marginTop: 50,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: { width: 70, height: 35, resizeMode: "contain" },

  circleIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  iconImage: { width: 20, height: 20, resizeMode: "contain" },

  // Bottom Vector
  bottomWave: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: undefined,
    resizeMode: "stretch",
  },

  // Form
  formCard: { marginTop: -350, paddingHorizontal: 20 },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
    marginBottom: 6,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 13,
    color: "#777",
    marginBottom: 30,
  },

  section: { marginBottom: 25 },
  row: { flexDirection: "row", alignItems: "center" },
  sectionTitle: { fontSize: 14, fontWeight: "600", color: "#333" },
  hint: { fontSize: 12, color: "#777", marginTop: 4, marginBottom: 10 },

  pinRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 5,
  },
  pinInput: {
    borderBottomWidth: 1,
    borderColor: "#aaa",
    width: 50,
    fontSize: 18,
    textAlign: "center",
    color: "#222",
  },
  forgot: {
    fontSize: 12,
    color: "#6D4CFF",
    fontWeight: "600",
    marginTop: 4,
    textAlign: "right",
  },

  biometricBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 10,
    borderRadius: 30,
    marginVertical: 20,
    marginLeft:100,
    marginRight:100,
  },
  biometricText: { fontSize: 13, fontWeight: "600", color: "#333" },

  continueBtn: {
    backgroundColor: "#605790",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
    elevation: 4,
    marginTop: 10,
    marginHorizontal: 15,
  },
  continueText: { color: "#fff", fontWeight: "700", fontSize: 16 },
});
