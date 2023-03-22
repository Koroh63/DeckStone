import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState, useEffect } from "react";


import Navigation from './navigation/Navigation';
import StackNavigation from './navigation/StackNavigation';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import {useDispatch, useSelector} from 'react-redux';

import store from './redux/store';

//import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

// Import your application store
//import store from "./redux/store";


import {
  SafeAreaView,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import { Provider } from 'react-redux';

export default function App() {

  // const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  // const theme = isDarkTheme ? darkTheme : defaultTheme;

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation/>
      </SafeAreaProvider>
    </Provider>
  );
}


////<PaperProvider theme={theme}></PaperProvider>


// ///décommenter quand API Fonctionnel///

// // export default function App() {
// //   return (
// //     <>
// //       {/* Bind your application store to the Provider store */}
// //       <Provider store={store}>
// //         <SafeAreaProvider>
// //           <Navigation/>
// //         </SafeAreaProvider>
// //       </Provider>
// //     </>
// //   );
// // }
