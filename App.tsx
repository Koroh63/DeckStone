import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from "react";

import Navigation from './navigation/Navigation';
import StackNavigation from './navigation/StackNavigation';

import { createStackNavigator } from '@react-navigation/stack';

// Import your application store
import store from "./redux/store";


import {
  SafeAreaView,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import { Provider } from 'react-redux';

// export default function App() {
//     //safearea
//     //mettre le navigateur ayant le princ
//   return (
//     <SafeAreaProvider>
//       <Navigation/>
//     </SafeAreaProvider>
//   );
// }

export default function App() {
  return (
    <>
      {/* Bind your application store to the Provider store */}
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation/>
        </SafeAreaProvider>
      </Provider>
    </>
  );
}
