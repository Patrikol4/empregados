import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import Home from './screens/Home';
import CriarEmpregado from './screens/CriarEmpregado';
import Profile from './screens/Profile';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const myOptions = {
  title: "Tela Principal",
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "#006aff"
  }
}

function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={myOptions}
        />
        <Stack.Screen
          name="CriarEmpregado"
          component={CriarEmpregado}
          options={{...myOptions, title: "Criar Empregado"}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{...myOptions, title:"Perfil de Usuario"}}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </View>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
    marginTop: Constants.statusBarHeight,
  },
});
