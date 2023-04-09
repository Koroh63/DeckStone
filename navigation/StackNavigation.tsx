
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ListScreen';
import ListFav from '../screens/ListFav';

export default function StackNavigation() {
    const Stack = createStackNavigator();
    return (
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="ListScreen" component={ListScreen}/>
                <Stack.Screen name="ListFav" component={ListFav}/>
            </Stack.Navigator>
    )
}