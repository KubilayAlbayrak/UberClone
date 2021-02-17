import React,{useState} from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity, Button} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 



const HomeSearch = ({props,navigation}) => {
const [value, Setvalue] = useState('Where to?')


    return(
        <View style={{backgroundColor:'gainsboro',flex:1,justifyContent:'space-around'}}>
            <View style={styles.searchview}>
            <TextInput value={value} style={styles.textınput}></TextInput>
            <TouchableOpacity onPress={() => navigation.navigate('DestinationSearchScreen')}>
            <View style={{flexDirection:'row', justifyContent:'space-around' , backgroundColor:'white', width:100 ,borderRadius:20 ,alignItems:'center' ,height:30}}>
            <AntDesign name="clockcircle" size={16} color="dimgrey" />
            <Text style={{color:'dimgrey'}}>Now</Text>
            <AntDesign name="down" size={12} color="dimgrey" />
            </View>
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',alignItems:'center' , borderBottomColor:'dimgrey' ,borderBottomWidth:0.2}}>
            <AntDesign name="clockcircle" size={30} color="dimgrey"  style={{marginLeft:20,marginBottom:10}}/>
            <Text style={{marginLeft:20,fontSize:15,fontWeight:'bold'}}>Spin NightClub</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',paddingTop:20}}>
            <Entypo name="home" size={30} color="blue" style={{marginLeft:20}}/>
            <Text style={{marginLeft:20,fontSize:15,fontWeight:'bold'}}>Home</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',paddingTop:20 ,borderTopColor:'dimgrey', borderTopWidth:0.2}}>
            <View style={{position:'absolute',left:20,bottom:0}}>
            <MaterialCommunityIcons name="star-four-points" size={24} color="goldenrod" />
            </View>
            <View style={{marginLeft:40,marginBottom:5}}>
            <Text style={{marginLeft:20,fontSize:15,fontWeight:'bold'}}>302 pts</Text>
            </View>
            <View style={{position:'absolute',right:50,bottom:5}}>
            <Text style={{marginLeft:20,fontSize:15,fontWeight:'bold',color:'dimgrey'}}>Rewards hub</Text>
            </View>
            <Feather name="chevron-right" size={24} color="dimgrey" style={{position:'absolute',right:10,bottom:0}} />
            
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    searchview:{
        backgroundColor:'lightgray',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        margin:10,
        padding:10
    },
    textınput:{
        fontSize:20,
        fontWeight:'bold',
        color:'darkgrey'
    }
});


export default HomeSearch;