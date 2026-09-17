import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import LittleLemonFooter from '../../components/LittleLemonFooter';
import LittleLemonHeader from '../../components/LittleLemonHeader';

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <LittleLemonHeader />
      <Stack screenOptions={{ headerShown: false }} />
      <LittleLemonFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
});