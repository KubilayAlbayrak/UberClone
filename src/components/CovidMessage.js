import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

const CovidMessage = (props) => {
    return(
        <View style={{backgroundColor: '#a0abff'}}>
        <View style={styles.dangertextview}>
            <Text style={styles.text1}>Travel only if necessary</Text>
            <Text style={styles.text2}>Help flatten the curve.If you must travel , please exercise caution for your safety of our community</Text>
            <View style={styles.dangerview}>
            <Text style={styles.text3}>Learn more</Text>
            <TouchableOpacity onPress={() => {}}>
            <AntDesign name="arrowright" size={24} color="white" style={{position:'absolute', bottom:6, right:115}}/>
            </TouchableOpacity>
            <Ionicons name="warning" size={42} color="black" />
            </View>
        </View>
        </View>
    )
};

const styles = StyleSheet.create({
    dangertextview:{
        backgroundColor:'dodgerblue',
        borderTopEndRadius:10,
        borderTopLeftRadius:10
    },
    text1:{
        color:'white',
        fontWeight:'bold',
        marginLeft:6
    },
    text2:{
        color:'white',
        paddingTop:8,
        marginLeft:6
    },
    text3:{
        color:'white',
        paddingTop:17,
        marginLeft:6,
        fontWeight:'bold',
    },
    dangerview:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
});

export default CovidMessage;