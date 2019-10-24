import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import HeaderBar from './GalleryHeaderBar'
import GalleryParent from './GalleryParent'
import GalleryChildOrange from './GalleryChildOrange'
import SuperParent from './superParent'
import HeaderComponent from './headerComponent'
import BottomNavigationComponent from './bottomNavigationComponent'

const DATA = [
  {
    month: 'january',
    chall: '2 Challenges',
    title: ['jungal suffari','jumanji'],
    time:['1-june 2001 - 21 may 2019','1-june 2001 - 21 may 2019']

  },
  {
    month: 'Febuary',
    chall: '7 Challenges', 
    title:['jungal suffari','jumanji'],
    time:['1-june 2001 - 21 may 2019','1-june 2001 - 21 may 2019']
  },
  {
    month: 'March',
    chall: '5 Challenges',
    title: ['jungal suffari','jumanji'],
    time:['1-june 2001 - 21 may 2019','1-june 2001 - 21 may 2019']
  },
];

export default class Gallery extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={style.body}>
        <HeaderComponent />
        <FlatList
          data={DATA}
          renderItem={({ item }) => <SuperParent month={item.month} chall={item.chall} duration={item.time}
  
  />}
          keyExtractor={item => item.month}
        />
        {/* <HeaderBar/>
          <GalleryParent/>
          <GalleryParent/>  */}

        <BottomNavigationComponent />
      </SafeAreaView>
    );
  }
}


const style = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    justifyContent: "space-between"
  }
});
