import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import Home from './screens/Home';
import CriarEmpregado from './screens/CriarEmpregado';
import Profile from './screens/Profile';

export default function App() {
  return (
    <View style={styles.container}>
     { /*<Home/>*/ }
     <CriarEmpregado/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
    marginTop: Constants.statusBarHeight,
  },
});
