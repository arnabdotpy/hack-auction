import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View } from 'react-native';
import Home from './screens/home/home';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={{marginTop: Constants.statusBarHeight}}>
      <Home />      
    </View>
  );
}
