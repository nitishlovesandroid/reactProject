import React, { Component } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    TextInput, Button,
    Alert, FlatList, Image
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';


export default whiteButton = () => {

    return (
        <View style={style.layout}>
            <View style={style.outer}>
                <Text style={{fontWeight:'bold',color:'orange',fontSize:15,justifyContent:'center',alignItems:'center',padding:5}}>
                    View Gallery
                </Text>
            </View>
        </View>
    );
}

const style=StyleSheet.create(
    {
       outer: {justifyContent:'center',alignItems:'center',shadowOpacity:10,shadowColor:'#ddd',
            width:'70%',backgroundColor:'white',height:50,borderRadius:5,borderColor:'#ddd',elevation:5,shadowOffset:{height:4,width:0},borderWidth:0.5

        },layout: {
            width:'40%',height:50,justifyContent:'center',alignItems:'center'
        }
    }
)

