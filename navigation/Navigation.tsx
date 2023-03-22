    import { StatusBar } from 'expo-status-bar';
import {useColorScheme, StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from "react";

import { NavigationContainer, useTheme, DefaultTheme} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ListScreen';
import ListFav from '../screens/ListFav';

import TabBarIcon from '../components/TabBarIcon';
import StackNavigation from './StackNavigation';


import { Ionicons } from '@expo/vector-icons';
import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons';

import { switchMode } from '../redux/actions/action_switchMode';
import {useDispatch, useSelector} from 'react-redux';
//@ts-ignore
function fHeaderButton(props) {
    //@ts-ignore
    return <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} color="black" />;
}



export default function Navigation() {
    const BottomTabNavigator = createBottomTabNavigator();

    //@ts-ignore
    const mode = useSelector(state => state.appReducer.mode);

    const dispatch = useDispatch();

        //* themes
    //const { colors } = useTheme();

    //const scheme = useColorScheme();



// const defaultTheme = {
//     ...DefaultTheme,
//     colors: {
//         ...DefaultTheme.colors,
//         primary: 'blue',
//         accent: 'yellow',
//         background: 'white',
//         text: 'black',
//     },
// };

// const darkTheme = {
//     ...DefaultTheme,
//     dark: true,
//     colors: {
//         ...DefaultTheme.colors,
//         primary: '#BB86FC',
//         accent: '#03DAC6',
//         background: '#121212',
//         surface: '#121212',
//         text: '#FFFFFF',
//         disabled: '#9E9E9E',
//         placeholder: '#9E9E9E',
//         backdrop: '#00000070',
//     },
// };

// const MyTheme = {
//     dark: false,
//     colors: {
//         primary: 'rgb(255, 45, 85)',
//         background: 'rgb(242, 242, 242)',
//         card: 'rgb(255, 255, 255)',
//         text: 'rgb(28, 28, 30)',
//         border: 'rgb(199, 199, 204)',
//         notification: 'rgb(255, 69, 58)',
//     },
// };

    return (
        // <NavigationContainer theme={scheme === 'dark' ? darkTheme : DefaultTheme}>
        <NavigationContainer>
            <BottomTabNavigator.Navigator 
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
            })}
            >
                <BottomTabNavigator.Screen name="List" component={ListScreen}
                                            options={{
                                                title: 'List',
                                                tabBarIcon: ({color}) => <TabBarIcon name="th-large" color={color}/>,
                                            }}/>
                <BottomTabNavigator.Screen name="Home" component={StackNavigation}
                                            options={{
                                                title: 'Home',
                                                tabBarIcon: ({color}) => <TabBarIcon name="home" color={color}/>,
                                                headerRight: () => (
                                                    <HeaderButtons HeaderButtonComponent={fHeaderButton}>
                                                    <Item
                                                        title="Paramètres"
                                                        iconName="md-settings"
                                                        onPress={() => 
                                                            dispatch(switchMode(mode === 'light' ? 'dark' : 'light'))}
                                                    />
                                                    </HeaderButtons>
                                                ),
                                            }}
                                            />


                <BottomTabNavigator.Screen name="ListFav" component={ListFav}
                                            options={{
                                                title: 'Liste de Favoris ♥',
                                                tabBarIcon: ({color}) => <TabBarIcon name="heart" color={color}/>,
                                            }}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}

