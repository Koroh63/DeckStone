// import React from 'react';
// import { SafeAreaView, StatusBar } from 'react-native';
// import ThemeContext from '../styles/themeContext';
// import theme from '../styles/theme';
// import { useSelector } from 'react-redux';
// import { lightTheme, darkTheme } from '../styles/theme';
// //@ts-ignore
// const NavigationWrapper = ({ children }) => {
    
//     const mode = useSelector(state => state.appReducer.mode);
//     const theme = mode === 'light' ? lightTheme : darkTheme;
    
//     return (
//     <SafeAreaView style={{ flex: 1 }}>
//         <StatusBar />
//         <ThemeContext.Provider value={theme}>
//             {children}
//         </ThemeContext.Provider>
//     </SafeAreaView>
//     );
// };

// export default NavigationWrapper;
