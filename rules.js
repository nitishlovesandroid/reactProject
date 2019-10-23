import React, { Component } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    TextInput, Button,
    Alert, FlatList, Image
} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';


export default PrizeList = () => {

    return (
        <View style={style.outer}>
            <View style={{flex:0.1}}>
            <Icon name="check" size={20} color='green'/>     
            </View>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
           <Text>It is a long established fact that a reader will be distracted 
               by the reed to using 'Content here, content here',</Text>    
            </View>
    

        </View>
    );
}

const style=StyleSheet.create(
    {
       outer: {
            width:'100%',backgroundColor:'white',margin:5,flexDirection:'row'

        },layout: {
            borderWidth:2,borderColor:'#ddd',elevation:20,shadowColor:'#ddd',shadowOpacity:10,shadowOffset:{height:5,width:0},
            width:'30%',height:"70%",justifyContent:'center',alignItems:'center',backgroundColor:'white',borderRadius:5
        }
    }
)

