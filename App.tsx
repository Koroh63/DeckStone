import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState, useEffect } from "react";


import Navigation from './navigation/Navigation';
import StackNavigation from './navigation/StackNavigation';


import { createStackNavigator } from '@react-navigation/stack';

import {useDispatch, useSelector} from 'react-redux';

import store from './redux/store';

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

// Import your application store
//import store from "./redux/store";


//* themes

const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    accent: 'yellow',
    background: 'white',
    text: 'black',
  },
};

const darkTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#BB86FC',
    accent: '#03DAC6',
    background: '#121212',
    surface: '#121212',
    text: '#FFFFFF',
    disabled: '#9E9E9E',
    placeholder: '#9E9E9E',
    backdrop: '#00000070',
  },
};



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
