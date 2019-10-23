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
import Icon1 from 'react-native-vector-icons/FontAwesome5';



export default PrizeList = (props) => {
console.warn("myposition",props.position)
    return (
        <View style={style.layout}>
            <View style={style.outer}>
                <Icon1 style={{flex:0.5}} name="award" color="red" size={25}/>
                <View style={{flex:1}}>
                    <View style={{flex:1,alignItems:'flex-start',justifyContent:'flex-start'}}>
                        <Text style={{fontSize:12,color:'#ddd',fontWeight:'bold'}}>
                        {props.position}
                        </Text>
                        </View>
                    <View style={{flex:1,alignItems:'flex-end'}}>
                    <Text style={{color:'green',fontWeight:'bold' }} >
                           {props.rate} 
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const style=StyleSheet.create(
    {
       outer: {justifyContent:'center',alignItems:'center',
            width:'70%',backgroundColor:'white',height:50,borderRadius:5,flexDirection:'row'

        },layout: {
            borderWidth:2,borderColor:'#ddd',elevation:20,shadowColor:'#ddd',shadowOpacity:10,shadowOffset:{height:5,width:0},
            width:'30%',height:"70%",justifyContent:'center',alignItems:'center',backgroundColor:'white',borderRadius:5
        }
    }
)

