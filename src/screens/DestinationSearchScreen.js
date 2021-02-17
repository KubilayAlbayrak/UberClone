import React,{useState} from 'react';
import {View,Text,TextInput,StyleSheet, Button} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';



const DestinationSearchScreen = ({props,navigation}) => {

const [originPlace, setOriginPlace] = useState(null);
const [destinationPlace, setDestinationPlace] = useState(null);


    return(
        <View style={styles.container}>
            <GooglePlacesAutocomplete
            placeholder='Search'
            onPress={(data, details = null) => {
            console.log(data, details);
            }}
            style={styles.textinput}
            fetchDetails={true}
            query={{
            key: 'AIzaSyAMD2xMVp8RTjoEbA-KNoqhuGR6sVN6dXk',
            language: 'en',
            }}
            />
            <GooglePlacesAutocomplete
            placeholder='Search'
            onPress={(data, details = null) => {
                console.log(data, details);
            }}
            style={styles.textinput}
            fetchDetails={true}
            query={{
            key: 'AIzaSyAMD2xMVp8RTjoEbA-KNoqhuGR6sVN6dXk',
            language: 'en',
            }}
            />
            <Button title='Navigation Search Result Screen' onPress={() => {navigation.navigate('SearchResultScreen')}}/>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        padding:40,
        height:'100%'
    },
    textinput:{
        backgroundColor:'#eee',
        marginVertical:5,
        padding:10
    }
});

export default DestinationSearchScreen;