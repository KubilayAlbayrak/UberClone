import React,{useState,useEffect} from 'react';
import { View,Text,StyleSheet,Dimensions } from 'react-native';
import MapView,{Marker, PROVIDER_GOOGLE}  from 'react-native-maps';
import * as Location from 'expo-location';


const HomeMap = (props) => {

const [mapRegion, setMapRegion] = useState(null);
const [errorMsg, setErrorMsg] = useState(null);


useEffect(()=>{
    (async() => {
        let {status} = await Location.requestPermissionsAsync();
        if(status != 'granted') {
            setErrorMsg('Permission to access location was denied');
        }
        let location= await Location.getCurrentPositionAsync({});
        setMapRegion({
            longitude:location.coords.longitude,
            latitude:location.coords.latitude,
            longitudeDelta:0.0922,
            latitudeDelta:0.0421
        });
    })();
}, []);


    return(
            <View>
            <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map} 
            >
            <Marker
            coordinate={{
                latitude:37.78825,
                longitude:26.4324
            }}   
            />
            </MapView>
            </View>
    )
};

const styles = StyleSheet.create({
    homemapview:{
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        height:1
    },
    map: {
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height
    }
});

export default HomeMap;