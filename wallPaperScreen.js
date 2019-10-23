import React, { Component } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    TextInput, Button, Image,
    Alert, FlatList, SafeAreaView
} from 'react-native'
import BottomHeader from './headerbar'
import Middle from './wallmiddle'
import BodyFoter from './bodyfooter'
import FooterChild from './footerchild1'



export default class MyWallpaper extends Component {

    constructor(props){
        super(props);
        this.state={
            isPressed:false
        }
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, height: '100%', width: '100%' }}>
                <BottomHeader />
                <Middle />
                <BodyFoter/>
              
            </SafeAreaView>
        );
    }
}