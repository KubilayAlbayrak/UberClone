import React,{useState,useEffect} from 'react';
import { View,Text,StyleSheet,Dimensions,Image,Flatlist} from 'react-native';
import MapView,{Marker, PROVIDER_GOOGLE}  from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';


const RouteMap = (props) => {

const GOOGLE_MAPS_APIKEY='AIzaSyApEO68LfA-HyaYzKa9APQCzL9xjSklc1Y';

const origin = {
    latitude:28.40127,
    longitude:-16.263045,
};

const destination = {
    latitude:28.450127,
    longitude:-16.269045,
};

    return(
            <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map} 
            initialRegion={{
                latitude:28.450627,
                longitude:-16.263045,
                latitudeDelta:0.022*10,
                longitudeDelta:0.0121*10,
            }}
            >
                <MapViewDirections 
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeColor="blue"
                strokeWidth={4}
                />
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

export default RouteMap;


// En son mape direction ekledim map markerı nı car olarak yaptım.
//2.videoya geç
