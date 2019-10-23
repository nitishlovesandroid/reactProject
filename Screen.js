import React, { Component } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    TextInput, Button, Image,
    Alert, FlatList, SafeAreaView
} from 'react-native'
import HeaderComponent from './headerComponent'
import BottomNavigationComponent from './bottomNavigationComponent'


const DATA = [
    {
        title: 'First Item',
    }
    , {
        title: 'First Item',
    }, {
        title: 'First Item',
    }, {
        title: 'First Item',
    }, {
        title: 'First Item',
    }, {
        title: 'First Item',
    }, {
        title: 'First Item',
    }, {
        title: 'First Item',
    }, {
        title: 'First Item',
    }, {
        title: 'First Item',
    }, {
        title: 'First Item',
    }, {
        title: 'First Item',
    }, {
        title: 'First Item',
    }, {
        title: 'First Item',
    }, {
        title: 'First Item',
    }, {
        title: 'First Item',

    }, {
        title: 'First Item',

    }, {
        title: 'First Item',

    }, {
        title: 'First Item',

    }, {
        title: 'First Item',

    }, {
        title: 'First Item',

    }, {
        title: 'First Item',

    }, {
        title: 'First Item',

    }, {
        title: 'First Item',

    }, {
        title: 'First Item',

    }, {
        title: 'First Item',

    }, {
        title: 'First Item',

    }, {
        title: 'First Item',

    }, {
        title: 'First Item',

    }, {
        title: 'First Item',

    }, {
        title: 'First Item',

    }, {
        title: 'First Item',

    }, {
        title: 'First Item',

    },
];

export default class MyScreen extends Component {




    render() {
        return (
            <SafeAreaView style={{backgroundColor:'orange'}}>

                <View style={{ width: "100%", height: "100%"}}>
                    <HeaderComponent></HeaderComponent>
                                  <View style={{height:'90%',width:'100%'}}>
<FlatList style={{padding:10,backgroundColor:'white'}}
  data={DATA}
  renderItem={({ item,index}) => (
    <TouchableOpacity style={{ flex: 1, flexDirection: 'column', margin: 1 }} onPress={()=>{
        // Alert.alert(index.toString())
        alert(index)
    }}>
      <Image style={styles.imageThumbnail} source={require('./wallpaper.png')}></Image>
    </TouchableOpacity>
  )}
  //Setting the number of column
  numColumns={3}
  keyExtractor={(item, index) => index.toString()}
/>
</View>
                    <BottomNavigationComponent></BottomNavigationComponent>

                </View>
                {/* <View style={{height:'90%',width:'100%'}}>
<FlatList style={{padding:10}}
  data={DATA}
  renderItem={({ item }) => (
    <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
      <Image style={styles.imageThumbnail}/>
    </View>
  )}
  //Setting the number of column
  numColumns={3}
  keyExtractor={(item, index) => index.toString()}
/>
</View> */}

            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        paddingTop: 30,
    },
    imageThumbnail: {
        marginRight: 5,
        marginBottom: 5,
        backgroundColor: 'red',
        justifyContent: 'center',
        resizeMode: 'stretch',
        alignItems: 'center',
        width:120,
        height: 100, borderRadius: 5

    },
});