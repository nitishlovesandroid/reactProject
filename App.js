
import React, { Component } from 'react';
import Item from "./componentfile/Item"
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,Button,
  Alert,FlatList
} from 'react-native'
import { isModuleDeclaration } from '@babel/types';
//import List from './componentfile/flatlist'
//import MyList from './componentfile/flatlist'

export default class app extends Component {
  
  constructor(props) {  
    super(props)
    this.state = { count: 1,empRecord:[],name:"",password:""
    
    }
  }

  // onPress = () => {
  //   this.setState({
  //     count: this.state.count+1
  //   })
  // }
  onMe(text){
    this.setState({
      count:text
    })
  }

  bindvalue(){

    this.counter=0;
    var i=0
    var users={
      name:this.state.name,
      password:this.state.password
    };
    //Alert.alert(users.name)
    var copyarr=this.state.empRecord;
    copyarr[copyarr.length]=users;
    this.setState({empRecord:copyarr});
    
  }
  deleteItem(prop)
  {
    Alert.alert("Hello "+prop);
    /*let copyArr=[...this.state.empRecord];
      let index=copyArr.indexOf(prop);
      if(index!=-1){
        copyArr.splice(index,1);
        this.setState({empRecord:copyArr});
      }*/
  }

  

  deleteMyItem=(prop)=>{
    Alert.alert("Hello world this is abhi "+prop);
  }
  setinput(value){
    
    this.setState({
      name:value
    })
  }
setPassword(value){
  this.setState({
    password:value
  })
}
 render() {
   return (
     <View style={styles.container}>
       {/* <TouchableOpacity
         style={styles.button}
         onPress={this.onMe.bind(this,"100")}
       >
         <Text> Touch Here </Text>
       </TouchableOpacity>
       <View style={[styles.countContainer]}> */}
         {/* <Text style={[styles.countText]}> */}
           {/* {
             this.state.count
           }
          </Text>
        </View> */}
<View style={styles.header} >
{/* <Text style={{fontSize:25,fontFamily:'bold'}} >
  FIll This Form 
</Text> */}
</View>
<View style={styles.body}
>
  <View>
    <TextInput placeholder="Enter Your Name" style={styles.edittext} onChangeText={this.setinput.bind(this)}/>
    <TextInput placeholder="Enter Your Password" style={styles.edittext} onChangeText={this.setPassword.bind(this)}/>
  </View>
</View>
<TouchableOpacity style={styles.mybtn} onPress={this.bindvalue.bind(this)}>
  <Text style={{justifyContent:'center',alignItems:'center'}}>
    Click Me
  </Text>


</TouchableOpacity>
<View style={styles.listViewStyle}>
<FlatList
     data={this.state.empRecord}
     renderItem={ ( { item,index,separators } ) => <Item title={item} del={this.deleteMyItem}/> }
   />
</View>
 </View>
    )
  }
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
