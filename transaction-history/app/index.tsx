import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link, useRouter } from 'expo-router';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Link href={"/(transaction)/transaction-history"}>Transaction History</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;