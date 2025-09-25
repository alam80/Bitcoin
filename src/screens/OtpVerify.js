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
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function OtpVerify({ navigation }) {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
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
          {/* Back Button Circle */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.circleBtn}
          >
            <Icon name="arrow-left" size={20} color="#333" />
          </TouchableOpacity>

          {/* Headphone Circle */}
          <TouchableOpacity style={styles.circleBtn}>
            <Image
              source={require("../../assets/bx_support.png")}
              style={styles.headphone}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* ==== Bottom Background ==== */}
      <Image
        source={require("../../assets/Vector2.png")}
        style={[styles.bottomWave, { aspectRatio: 390 / 220 }]}
      />

      {/* ==== Form ==== */}
      <View style={styles.formCard}>
        <Text style={styles.title}>Verify OTP</Text>
        <Text style={styles.subtitle}>Secure Your Account via Email</Text>

        {/* ==== Email OTP ==== */}
        <View style={styles.otpSection}>
          <View style={styles.otpLabelRow}>
            <Icon name="email-outline" size={20} color="#444" />
            <Text style={styles.otpLabel}> Email OTP</Text>
          </View>
          <Text style={styles.otpDesc}>
            Enter the 4 digit OTP sent to a*******v@mail.com
          </Text>

          <View style={styles.otpRow}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                style={styles.otpInput}
                keyboardType="numeric"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
              />
            ))}
          </View>

          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.resendText}>Resend OTP (in 01:52s)</Text>
          </TouchableOpacity>
        </View>

        {/* ==== Verify Button ==== */}
        <TouchableOpacity
          style={styles.verifyBtn}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("EnterPin")}
        >
          <Text style={styles.verifyText}>Verify</Text>
        </TouchableOpacity>

        {/* ==== Footer ==== */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Can’t access this email?</Text>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Update Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  // ==== Top Section ====
  topContainer: { position: "relative", width: "100%", height: 700 },
  topWave: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
    position: "absolute",
    top: 0,
    left: 0,
  },
  headerRow: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  circleBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  headphone: { width: 22, height: 22, resizeMode: "contain" },

  // ==== Bottom Vector ====
  bottomWave: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: undefined,
    resizeMode: "stretch",
  },

  // ==== Form ====
  formCard: { marginTop: -350, paddingHorizontal: 20 },
  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
    marginBottom: 6,
    marginTop: -85,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 13,
    color: "#777",
    marginTop: 6,
    marginBottom: 40,
  },

  otpSection: { marginLeft: 15, marginRight: 15, marginBottom: 30 },
  otpLabelRow: { flexDirection: "row", alignItems: "center", marginBottom: 5 },
  otpLabel: { fontSize: 14, fontWeight: "600", color: "#222" },
  otpDesc: { fontSize: 12, color: "#777", marginBottom: 15 },

  otpRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  otpInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#aaa",
    width: 50,
    textAlign: "center",
    fontSize: 18,
    color: "#222",
    paddingVertical: 6,
  },
  resendText: {
    fontSize: 12,
    color: "#6D4CFF",
    fontWeight: "600",
    alignSelf: "flex-end",
  },

  // ==== Verify Btn ====
  verifyBtn: {
    backgroundColor: "#605790",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
    elevation: 4,
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
  },
  verifyText: { color: "#fff", fontWeight: "700", fontSize: 16 },

  // ==== Footer ====
  footer: { marginTop: 40, alignItems: "center" },
  footerText: { color: "#777", fontSize: 13, marginBottom: 5 },
  footerLink: { color: "#6D4CFF", fontWeight: "600", fontSize: 14 },
});
