import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Button} from 'react-native';
import React, { useState } from 'react'
import Header from './components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from "./route/MainStack";

export default function App() {
  
  return (
   <NavigationContainer>
        <MainStackNavigator />
    </NavigationContainer>
  );
}

