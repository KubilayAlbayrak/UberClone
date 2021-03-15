import React from 'react';
import {View,Text,StyleSheet, Button} from 'react-native';
import RouteMap from '../components/RouteMap';
import CovidMessage from '../components/CovidMessage';
import HomeSearch from '../components/HomeSearch';

const HomeScreen = (props) => {
    return(
        <View style={{flex:1}}>
        <View style={{flex:8}}>
        <RouteMap />
        </View>
        <View style={{flex:3}}>
        <CovidMessage />
        </View>
        <View style={{flex:8}}>
        <HomeSearch  navigation={props.navigation}/>
        </View>
        </View>
    )   
};


export const homeScreenOptions = () => {

};

const styles=StyleSheet.create({
});

export default HomeScreen;