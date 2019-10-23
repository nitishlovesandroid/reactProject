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
export default wallpaper=()=>{

return(
<View style={style.header}>
<Image source={require('./wallpaper.png')}/>
</View>



    

)
}
const style=StyleSheet.create(
{

header:{
    width:'100%',height:'30%',backgroundColor:'yellow'
}


}

)
