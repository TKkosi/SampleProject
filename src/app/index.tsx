import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LittleLemonHeader from '../../components/LittleLemonHeader';
import LittleLemonFooter from '../../components/LittleLemonFooter';
import WelcomeScreen from './WelcomeScreen';
import Menuitems from "../../components/Menuitems"
import LoginScreen from './LoginScreen';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        <LoginScreen />
        { /* <WelcomeScreen /> */ }
       { /* <Menuitems /> */ }
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
  footerContainer: { backgroundColor: '#495E57' },
});

