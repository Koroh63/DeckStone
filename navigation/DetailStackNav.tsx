
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ListScreen from '../screens/ListScreen';
import DetailCard from '../screens/DetailCard';

export default function DetailStackNav() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="CardList">
            <Stack.Screen name="CardList" component={ListScreen}/>
            <Stack.Screen name="DetailCard" component={DetailCard}/>
        </Stack.Navigator>
    )
}