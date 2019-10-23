import React, { Component,useState } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    TextInput, Button,
    Alert, FlatList, Image
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import FooterChild from './footerchild1'
import WhiteDesign from './whitebutton'




export default bodyfooter = (props) => {

    const [showMoreOption,setMoreOption] = useState(false);

    const childOne = () =>{
        if(showMoreOption){
            return(<FooterChild />);
        }
        return null;
    } 
    
    const childTwo = () => {
        if(showMoreOption){
            return(<View style={{flexDirection:'row',justifyContent:'space-evenly',width:'80%'}}><FooterChild con={showMoreOption} type={"camera"}/><FooterChild con={showMoreOption} type={"gallery"}/></View>);
        }
        return null;
    }
    
    const addMoreOption = () => {

        // console.warn("methods involked");
        if(!showMoreOption) {
            setMoreOption(true);
        }else{
            setMoreOption(false)
        }
    
    }
    return (
        <View style={style.footer1} >
       <WhiteDesign/>
       <View style={{width:'60%',flexDirection:'row',justifyContent:'flex-end',alignContent:'flex-end'}}>
           {childTwo()}
           <TouchableOpacity onPress ={addMoreOption}>
           <FooterChild con={showMoreOption} type={"cross"}/>
           </TouchableOpacity>

           {/* {addMoreOption()}; */}

 {/* {childOne()} */}

</View>
        </View>
    );
}
const style = StyleSheet.create(
    {
        footer1: {
            width: '100%',padding:5,
            height: '10%',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',backgroundColor:'white'
        }
    }

)
