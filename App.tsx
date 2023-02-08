import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from "react";

import Navigation from './navigation/Navigation';
import StackNavigation from './navigation/StackNavigation';

import { createStackNavigator } from '@react-navigation/stack';

import {
  SafeAreaView,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

export default function App() {
    //safearea
    //mettre le navigateur ayant le princ
  return (
    <SafeAreaProvider>
      <Navigation/>
    </SafeAreaProvider>
  );
}
