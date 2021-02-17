import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import HomeMap from '../components/HomeMap';
import {Cars} from '../assets/data/Cars';
import UberTypeRow from '../components/UberTypeRow';



const SearchResultScreen = (props) => {
    return(
        <View >
            <View style={{height:10}}>
        <HomeMap/>
        </View>
            <View style={styles.flatList}>
            <FlatList
            data={Cars}
            renderItem={itemData => <UberTypeRow 
            image={itemData.item.image}
            type={itemData.item.type}
            price={itemData.item.price}
            /> }
            keyExtractor={item => item.id}
            style={styles.FlatList}
            />
            </View>
        </View>
    )
};

const styles=StyleSheet.create({
    flatList:{
        marginTop:380,
        backgroundColor:'white'
    }
});

export default SearchResultScreen;