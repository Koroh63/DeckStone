    import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from "react";

import { NavigationContainer } from '@react-navigation/native';
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
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator initialRouteName="Home">
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

