    import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ListScreen';
import ListFav from '../screens/ListFav';

import TabBarIcon from '../components/TabBarIcon';




export default function Navigation() {
    const BottomTabNavigator = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator initialRouteName="Home">
                <BottomTabNavigator.Screen name="List" component={ListScreen}
                                            options={{
                                                title: 'List',
                                                tabBarIcon: ({color}) => <TabBarIcon name="list" color={color}/>,
                                            }}/>
                <BottomTabNavigator.Screen name="Home" component={HomeScreen}
                                            options={{
                                                title: 'Home',
                                                tabBarIcon: ({color}) => <TabBarIcon name="home" color={color}/>,
                                            }}/>
                <BottomTabNavigator.Screen name="ListFav" component={ListFav}
                                            options={{
                                                title: 'ListFav',
                                                tabBarIcon: ({color}) => <TabBarIcon name="heart" color={color}/>,
                                            }}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}

