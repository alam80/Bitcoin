import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function InputRow({ icon, placeholder, value, onChangeText, keyboardType = "default", secureTextEntry = false }) {
  return (
    <View style={styles.inputRow}>
      <Icon name={icon} size={20} color="#7d7d7d" style={{ marginRight: 12 }} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9b9b9b"
        style={styles.input}
        keyboardType={keyboardType}
        autoCapitalize="none"
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#e9e9e9",
    paddingVertical: 12,
    marginTop: 6,
  },
  input: { flex: 1, fontSize: 16, color: "#222" },
});
