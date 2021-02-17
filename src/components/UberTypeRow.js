import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 


const UberTypeRow = (props) => {
    return(
        <View style={styles.container}>
            <Image source={props.image} style={styles.image}/>
            <View style={styles.middlecontainer}>
                <Text style={styles.type}>{props.type} <Ionicons name="person" size={18} color="green" /> 3 </Text>
                <Text style={styles.time}>8:03PM drop off</Text>
            </View>
            <View style={styles.rightcontainer}>
            <Ionicons name="pricetag" size={18} color="green" />
            <Text style={styles.price}>est. ${props.price}</Text>
            </View>
        </View>
    )
};

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        padding:20
    },
    image:{
       width:70,
       height:70,
       resizeMode:'contain',
       borderRadius:60
    },
    middlecontainer:{
        flex:1,
        marginHorizontal:10,
        justifyContent:'space-between',
        marginBottom:5
    },
    type:{
        fontSize:18,
        fontWeight:'bold'
    },
    time:{

    },
    rightcontainer:{
        width:100,
        flexDirection:'row',
        alignItems:'flex-end'
    },
    price:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:5
    }

});

export default UberTypeRow;