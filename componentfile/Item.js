import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,Button,
  Alert,FlatList
} from 'react-native'
export default Item=(props)=> {


   return (
     <View style={styles.item}>
         <View style={styles.design}>
  <Text style={styles.title}>
   Email
  </Text>
       <Text style={styles.title} onPress={()=>{
         props.d
       }}>{props.title.name}</Text>
       </View>
  
       <View style={styles.design}>
  <Text style={styles.title}>
  Password:
  </Text>
       <Text style={styles.title}>{props.title.password}</Text>
       </View>
  <View style={styles.forbuton}>
  <Button title="Edit" style={{flex:1} } >
  </Button>
  <TouchableOpacity onPress={props.de} > 
  <Text>Delete</Text>
  </TouchableOpacity>
  </View>
     </View>
   );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'lightblue'
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10
    },
    listViewStyle:{
  width:'100%',height:'40%',marginTop:20
    },
    mybtn:{
      marginLeft:'25%',
      width:'50%',height:40,backgroundColor:'#ddd',justifyContent:'center',alignItems:'center'
    },
    header:{
  height:50,
  width:'100%',
  backgroundColor:'#ddd',elevation:4,justifyContent:'center',alignItems:'center'
    },
    body:{
  height:300,width:'100%',borderRadius:3,marginTop:20,justifyContent:'center'
    },
    countContainer: {
      alignItems: 'center',
      padding: 10
    },
    edittext:{
      margin:3,
  borderWidth:2,backgroundColor:'#ddd',marginBottom:10
    },
    countText: {
      color: '#FF00FF'
    },container: {
      flex: 1,
    
    },
    item: {
      backgroundColor: '#ddd',
      padding: 10,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    design:{
        flexDirection:'row',
        justifyContent:'space-evenly',
  elevation:5,width:'100%',padding:5,
    },
    placeholder:{
        width:'50%'
    },
    forbuton:{
  flexDirection:'row'
    },
    title: {
        flex:1,
  
      fontSize: 32,
    }
  })