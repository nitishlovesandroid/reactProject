import React, { Component } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    TextInput, Button,
    Alert, FlatList, Image
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import MiddleFirst from './middlefirst'
import PrizeList from './prizelist'
import Rules from './rules'

export default middlewallpaper=()=>{

return(
<View style={style.header}>



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
<Text style={style.totalprizestyle1}>
$ 220
    </Text>
</View>
</View>
    </View>

    <View style={style.firsthalftwo}>
<PrizeList position={"1st prize"}rate={"$200"}/>
<PrizeList position={"2nd prize"} rate={"$220"}/>
<PrizeList position={"3rd prize"} rate={"$240"}/>
    </View>
</View> 
<View style={style.second}>
<View style={style.secondhalfone}>
    <View  style={style.iconProperty}>
    <Icon name="file" size={20}/>
        </View>
        <View  style={style.textproperty}>
            <Text style={style.mytextproperty}>
                Description
            </Text>

        </View>
</View>
<View style={style.secondhalfsecond}>
    <Text style={style.secondboxtext}>
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
    </Text>
    </View>
</View>
<View style={style.third}>
<View style={style.secondhalfone}>
    <View  style={style.iconProperty}>
    <Icon name="file" size={20}/>
        </View>
        <View  style={style.textproperty}>
            <Text style={style.mytextproperty}>
                Rules
            </Text>

        </View>
</View>

<Rules/>
<Rules/>



</View>





</View>





)
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
justifyContent:'flex-end',alignItems:'center'

},secondcolumn:{
    flex:1,alignItems:'flex-start',alignItems:'center'
},totalprizestyle:{
    fontSize:14,color:'#ddd',fontWeight:'bold',color:'orange',justifyContent:'flex-start',alignItems:'flex-start'
},totalprizestyle1:{
    fontSize:22,color:'#ddd',fontWeight:'bold',color:'orange',justifyContent:'flex-start',alignItems:'flex-start'
}


}

)
