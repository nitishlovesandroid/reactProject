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
export default middlewallpaper = (prop) => {
  const  setInnerIcon=(type)=>{
       if(type=="camera")
       return(<Icon name="camera" size={25} color='white'/>);
       else if(type=="gallery")
return(<Icon name="image" size={25} color='white' />)
else 
return(<Icon name="cross" size={25} color='white'/>)
   }
    const setIcon = () => {
    
        if (prop.con) {
            return (<View style={style.footer1}>
                {/* <Icon name="cross" size={25} /> */}
                {setInnerIcon(prop.type)}
            </View>);
        } else {
            return (<View style={style.footer1}>
                <Icon name="plus" size={25} color='white' />
            </View>);
        }
    }

    return (

        <View >

            {setIcon()}
        </View>
    );
}
const style = StyleSheet.create(
    {
        footer1: {
            width: 50,justifyContent:'center',alignItems:'center',shadowOpacity:10,shadowColor:'#ddd',
            backgroundColor: 'orange', borderRadius: 5, shadowOffset: { height: 5, width: 3 }, elevation: 5,
            height: 50
        }
    }

)
