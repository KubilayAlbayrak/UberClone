import React,{useState,useEffect} from 'react';
import { View,Text,StyleSheet,Dimensions,Image,Flatlist} from 'react-native';
import MapView,{Marker, PROVIDER_GOOGLE}  from 'react-native-maps';
import * as Location from 'expo-location';
import Cars from '../assets/data/Cars';



const HomeMap = (props) => {


const getImage =(type) => {
    if(type==='UberX'){
        return require('../assets/images/top-UberX.png')
    }
    if(type==='Comfort'){
        return require('../assets/images/top-Comfort.png')
    }
    return require ('../assets/images/top-UberXL.png')
};


const [mapRegion, setMapRegion] = useState(null);
const [errorMsg, setErrorMsg] = useState(null);



    return(
            <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map} 
            initialRegion={{
                latitude:38.5607,
                longitude:26.4567,
                latitudeDelta:0.0222*30,
                longitudeDelta:0.0121*30,
            }}
            >
            {Cars.map((car:{...}) => (
            <Marker
            draggable
            key={car.id}
            coordinate={{
                latitude:car.latitude,
                longitude:car.longitude
            }}
            >
            <Image 
            style={styles.marker}
            source={getImage(car.type)}/>  
            </Marker>
))}   
</MapView>
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
    },
    marker:{
        width:70,
        height:70,
        resizeMode:'contain'
    }
});

export default HomeMap;