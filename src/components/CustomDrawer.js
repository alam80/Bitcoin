// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   ScrollView,
// } from "react-native";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// export default function CustomDrawer({ navigation }) {
//   return (
//     <ScrollView style={styles.container}>
//       {/* Close Button */}
//       <TouchableOpacity
//         style={styles.closeBtn}
//         onPress={() => navigation.closeDrawer()}
//       >
//         <Icon name="close" size={22} color="#333" />
//       </TouchableOpacity>

//       {/* Profile Section */}
//       <View style={styles.profileSection}>
//         <Image
//           source={require("../../assets/avatar.png")}
//           style={styles.avatar}
//         />
//         <Text style={styles.name}>Abhinav Gupta</Text>
//         <Text style={styles.email}>abh*****@gmail.com</Text>
//         <Text style={styles.uid}>UID: 193e2bacaeb/u</Text>

//         <View style={styles.kycBox}>
//           <Text style={styles.kycText}>Submit KYC to activate account</Text>
//           <Text style={styles.kycSubText}>
//             Upload your documents in just 2 minutes to activate your account.
//           </Text>
//         </View>
//       </View>

//       {/* Menu Items */}
//       <View style={styles.menuSection}>
//         <Text style={styles.menuHeader}>Account</Text>
//         <DrawerItem icon="account-outline" label="Account Settings" />
//         <DrawerItem icon="lock-outline" label="Security" />
//         <DrawerItem icon="translate" label="Change Language" right="English" />

//         <Text style={styles.menuHeader}>Rewards</Text>
//         <DrawerItem icon="gift-outline" label="Refer & Earn" />
//         <DrawerItem icon="star-outline" label="Get Rewards" />

//         <Text style={styles.menuHeader}>Support</Text>
//         <DrawerItem icon="headset" label="Help & Support" />

//         <Text style={styles.menuHeader}>About Us</Text>
//         <DrawerItem icon="information-outline" label="About App" />
//         <DrawerItem icon="telegram" label="Join Telegram" />
//         <DrawerItem icon="twitter" label="Follow on X (Twitter)" />
//       </View>

//       {/* Logout */}
//       <TouchableOpacity style={styles.logoutBtn}>
//         <Text style={styles.logoutText}>Logout</Text>
//       </TouchableOpacity>

//       <Text style={styles.version}>App version: 7.20.0003</Text>
//     </ScrollView>
//   );
// }

// const DrawerItem = ({ icon, label, right }) => (
//   <TouchableOpacity style={styles.menuItem}>
//     <View style={{ flexDirection: "row", alignItems: "center" }}>
//       <Icon name={icon} size={20} color="#333" />
//       <Text style={styles.menuLabel}>{label}</Text>
//     </View>
//     {right ? <Text style={styles.rightText}>{right}</Text> : null}
//     <Icon name="chevron-right" size={20} color="#777" />
//   </TouchableOpacity>
// );

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#fff" },
//   closeBtn: { alignSelf: "flex-end", margin: 15 },
//   profileSection: { alignItems: "center", marginBottom: 15 },
//   avatar: { width: 60, height: 60, borderRadius: 30, marginBottom: 10 },
//   name: { fontSize: 16, fontWeight: "600" },
//   email: { fontSize: 13, color: "#555" },
//   uid: { fontSize: 12, color: "#777", marginTop: 4 },
//   kycBox: {
//     marginTop: 15,
//     backgroundColor: "#ffe6e6",
//     padding: 10,
//     borderRadius: 8,
//     marginHorizontal: 20,
//   },
//   kycText: { fontSize: 13, fontWeight: "600", color: "red" },
//   kycSubText: { fontSize: 11, color: "#444", marginTop: 3 },
//   menuSection: { marginTop: 15 },
//   menuHeader: {
//     fontSize: 13,
//     color: "#888",
//     marginLeft: 20,
//     marginVertical: 8,
//   },
//   menuItem: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderBottomWidth: 0.3,
//     borderBottomColor: "#eee",
//   },
//   menuLabel: { marginLeft: 10, fontSize: 14, color: "#222" },
//   rightText: { marginRight: 5, fontSize: 12, color: "#444" },
//   logoutBtn: {
//     margin: 20,
//     paddingVertical: 14,
//     borderRadius: 25,
//     backgroundColor: "#605790",
//     alignItems: "center",
//   },
//   logoutText: { color: "#fff", fontWeight: "600", fontSize: 15 },
//   version: {
//     textAlign: "center",
//     fontSize: 12,
//     color: "#888",
//     marginBottom: 20,
//   },
// });
