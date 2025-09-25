import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* ==== Header ==== */}
        <View style={styles.headerRow}>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                source={require('../../assets/avatar.png')}
                style={styles.avatar}
              />
            </TouchableOpacity>
            <Text style={styles.greeting}>Hi Alam</Text>
          </View>

          <View style={styles.row}>
            {/* Bell */}
            <TouchableOpacity style={styles.circleIcon}>
              <Icon name="bell-outline" size={20} color="#333" />
            </TouchableOpacity>

            {/* Headphone */}
            <TouchableOpacity style={styles.circleIcon}>
              <Icon name="headphones" size={20} color="#333" />
            </TouchableOpacity>
          </View>
        </View>

        {/* ==== Balance Card ==== */}
        <LinearGradient
          colors={['#f3d7ff', '#e5e0ff']}
          style={styles.balanceCard}
        >
          <View style={styles.row}>
            <Text style={styles.balanceTitle}>My Balance </Text>
            <Icon name="eye-outline" size={18} color="#666" />
          </View>
          <Text style={styles.balanceAmount}>11,660.34 USDT</Text>
          <Text style={styles.greenText}>+3.86% (31.86)</Text>
          <Text style={styles.redText}>Total Next EMI Due: 1,302.56 USDT</Text>
          <TouchableOpacity style={styles.addBtn}>
            <Text style={styles.addText}>+ Add Fund</Text>
          </TouchableOpacity>
        </LinearGradient>

        {/* ==== My Subscriptions ==== */}
        <View style={styles.subHeader}>
          <Text style={styles.sectionTitle}>My Subscriptions</Text>
          <Text style={styles.link}>See All</Text>
        </View>
        <View style={styles.subRow}>
          <LinearGradient
            colors={['#f8e9ff', '#f1f1ff']}
            style={styles.subCard}
          >
            <Icon name="ethereum" size={28} color="#555" />
            <Text style={styles.subName}>Ethereum</Text>
            <Text style={styles.subAmount}>250.86 USDT</Text>
            <Text style={styles.expiry}>2 days Left</Text>
          </LinearGradient>

          <LinearGradient
            colors={['#ffe9ef', '#f7f1ff']}
            style={[styles.subCard, { marginRight: 0 }]}
          >
            <Icon name="bitcoin" size={28} color="#f7931a" />
            <Text style={styles.subName}>Bitcoin</Text>
            <Text style={styles.subAmount}>200.00 USDT</Text>
            <Text style={styles.expiry}>3 days Left</Text>
          </LinearGradient>
        </View>

        {/* ==== Banner ==== */}
        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>Buy Crypto Now</Text>
          <Text style={styles.bannerText}>
            Pay whenever you want with complete freedom and flexibility.
          </Text>
          <Image
            source={require('../../assets/coins.png')}
            style={styles.bannerImg}
          />
        </View>

        {/* ==== Trending ==== */}
        <View style={styles.subHeader}>
          <Text style={styles.sectionTitle}>Trending 🔥</Text>
        </View>

        <View style={styles.trendCard}>
          <View style={styles.row}>
            <Icon name="bitcoin" size={22} color="#f7931a" />
            <Text style={styles.trendName}>Bitcoin</Text>
          </View>
          <View>
            <Text style={styles.trendAmount}>108,863.23 USDT</Text>
            <Text style={styles.greenText}>0.02%</Text>
          </View>
        </View>

        <View style={styles.trendCard}>
          <View style={styles.row}>
            <Icon name="alpha-t-circle" size={22} color="red" />
            <Text style={styles.trendName}>Tron</Text>
          </View>
          <View>
            <Text style={styles.trendAmount}>1234.23 USDT</Text>
            <Text style={styles.greenText}>0.02%</Text>
          </View>
        </View>
      </ScrollView>

      {/* ==== Bottom Tab ==== */}
      <View style={styles.bottomTab}>
        {/* Home */}
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="home-outline" size={22} color="#6D4CFF" />
          <Text style={styles.tabLabelActive}>Home</Text>
        </TouchableOpacity>

        {/* BNPL (Center NX Logo) */}
        <View style={styles.centerWrapper}>
          <TouchableOpacity style={styles.centerTab}>
            <Image
              source={require('../../assets/logo.png')}
              style={{ width: 28, height: 28 }}
            />
          </TouchableOpacity>
          <Text style={styles.centerLabel}>BNPL</Text>
        </View>

        {/* Portfolio */}
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="wallet-outline" size={22} color="#333" />
          <Text style={styles.tabLabel}>Portfolio</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 35 },
  row: { flexDirection: 'row', alignItems: 'center' },

  // Header
  headerRow: {
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  greeting: { marginLeft: 10, fontSize: 16, fontWeight: '600', color: '#222' },
  circleIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#fdeaea',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  // Balance Card
  balanceCard: {
    margin: 20,
    borderRadius: 15,
    padding: 15,
  },
  balanceTitle: { fontSize: 14, color: '#555' },
  balanceAmount: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111',
    marginTop: 5,
  },
  greenText: { fontSize: 12, color: 'green', marginTop: 4 },
  redText: { fontSize: 12, color: 'red', marginTop: 4 },
  addBtn: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
    alignSelf: 'flex-end',
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  addText: { fontSize: 12, color: '#444' },

  // Subscriptions
  subHeader: {
    marginHorizontal: 20,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitle: { fontSize: 15, fontWeight: '600', color: '#222' },
  link: { fontSize: 13, fontWeight: '600', color: '#6D4CFF' },
  subRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 12,
  },
  subCard: {
    flex: 1,
    borderRadius: 12,
    padding: 15,
    marginRight: 12,
  },
  subName: { fontSize: 14, fontWeight: '600', marginTop: 8, color: '#333' },
  subAmount: { fontSize: 13, color: '#444', marginTop: 4 },
  expiry: {
    marginTop: 10,
    fontSize: 12,
    backgroundColor: 'rgba(255,0,0,0.1)',
    color: 'red',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },

  // Banner
  banner: {
    margin: 20,
    backgroundColor: '#0f9d58',
    borderRadius: 12,
    padding: 18,
    position: 'relative',
  },
  bannerTitle: { color: '#fff', fontSize: 16, fontWeight: '700' },
  bannerText: { color: '#fff', fontSize: 12, marginTop: 6, width: '70%' },
  bannerImg: {
    width: 60,
    height: 60,
    position: 'absolute',
    right: 20,
    top: 20,
    resizeMode: 'contain',
  },

  // Trending
  trendCard: {
    marginHorizontal: 20,
    marginTop: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  trendName: { marginLeft: 6, fontSize: 14, fontWeight: '600', color: '#333' },
  trendAmount: { fontSize: 13, color: '#444' },

  // Bottom Tab
  bottomTab: {
    height: 70,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    borderTopWidth: 0.5,
    borderTopColor: '#eee',
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: -2 },
    paddingBottom: 25,
  },

  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabLabel: {
    fontSize: 12,
    color: '#444',
    marginTop: 3,
  },

  tabLabelActive: {
    fontSize: 12,
    color: '#6D4CFF',
    marginTop: 3,
    fontWeight: '600',
  },

  // Center Floating Tab
  centerWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -25, // upar uthhane ke liye
  },

  centerTab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f4f0ff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  centerLabel: {
    fontSize: 12,
    marginTop: 2,
    color: '#444',
    fontWeight: '500',
  },
});
