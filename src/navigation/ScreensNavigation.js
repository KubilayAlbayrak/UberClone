import React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DestinationSearchScreen from '../screens/DestinationSearchScreen';
import SearchResultScreen from '../screens/SearchResultScreen';

const ScreensNavigation = () => {

const Stack = createStackNavigator();    
 
return(
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="DestinationSearchScreen" component={DestinationSearchScreen} />
    <Stack.Screen name="SearchResultScreen" component={SearchResultScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
};

const styles =StyleSheet.create({

});


export default ScreensNavigation;