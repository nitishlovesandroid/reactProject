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
//import PrizeList from './prizelist'


export default PrizeList = () => {

    return (
        <View style={style.first}>
        <View style={style.firsthalfone}>
            <View style={style.firsthalfonepartone}>
    <View style={style.firsthalfonepartone_1_column}>
        <Text style={style.mytextproperty_1}>
            Roads less Travled
        </Text>
    </View>
    <View style={style.firsthalfonepartone_2_column}>
    
    </View>
            </View>
    <View style={style.firsthalfonepartsecond}>
    <View style={style.firstcoloumn}>
        <Text style={style.totalprizestyle}>
    Total Prize
        </Text>
    </View>
    <View style={style.secondcolumn}>
    <Text style={style.totalprizestyle}>
    $ 220
        </Text>
    </View>
    </View>
        </View>
{/*     
        <View style={style.firsthalftwo}>
    <PrizeList/>
    <PrizeList/>
    <PrizeList/>
        </View> */}
    </View>
    
    );
}

const style=StyleSheet.create(
    {
    
    header:{
        padding:10,
        width:'100%',height:'60%',backgroundColor:'white',borderTopLeftRadius:25,borderTopRightRadius:25,borderWidth:1,borderColor:'#ddd'
    },
    first:{
        width:'100%',height:'40%',
    
    },second:{
        width:'100%',height:'20%',backgroundColor:'orange'
    },
    third:{
        width:'100%',height:'50%'
    },firsthalfone:{
        width:'100%',height:'40%',flexDirection:'row'
    },firsthalftwo:{
        width:'100%',height:'60%',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',elevation:5
    },secondhalfone:{
        width:'100%',height:'30%',flexDirection:'row'
    
    },secondhalfsecond:{
        width:'100%',backgroundColor:'white',height:'70%'
    
    },iconProperty:{
        flex:0.1,backgroundColor:'white',justifyContent:'center',alignItems:'center'
        
    },textproperty:{
        flex:1,backgroundColor:'white',justifyContent:'center'
    
    },mytextproperty:{
       fontWeight:'bold',fontSize:14
    
    },secondboxtext:{
    paddingHorizontal:40
    },firsthalfonepartone:{
        flex:1,
     
        
    
    },firsthalfonepartsecond:{
       flex:0.3
    },firsthalfonepartone_1_column:{
        flex:1,justifyContent:'center'
    
    },firsthalfonepartone_2_column:{
    flex:1
    },mytextproperty_1:{
        fontSize:20,fontWeight:'bold'
    },firstcoloumn:{
        flex:1,
    justifyContent:'center',alignItems:'center'
    
    },secondcolumn:{
        flex:1,justifyContent:'center',alignItems:'center'
    },totalprizestyle:{
        fontSize:14,color:'#ddd',fontWeight:'bold'
    }
    
    
    }
    
    )

