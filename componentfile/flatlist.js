import React,{Component} from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text,Button } from 'react-native';

 function MyList(prop){
     return(
        <FlatList
        data={prop.data}
        renderItem={ ( { item,index,separators } ) => <Item title={item} abc={"fdf"} xyz={"fdsfj"} /> }
        keyExtractor={item => item.name}
      />
     );

 }

 function Item(props) {
     console.log(props)
    return (
      <View style={styles.item}>
          <View style={styles.design}>
<Text style={styles.title}>
    Email
</Text>
        <Text style={styles.title}>{props.title.name}</Text>
        </View>

        <View style={styles.design}>
<Text style={styles.title}>
   Password:
</Text>
        <Text style={styles.title}>{props.title.password}</Text>
        </View>
<View style={styles.forbuton}>
<Button title="Edit" style={{flex:1}}>
</Button>
<Button title="delete" style={{flex:1}}>
</Button>
</View>
      </View>
    );
  }
  function deleteitem(params) {
      
  }

  const styles = StyleSheet.create({
    container: {
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
    },
  });
 export default MyList;
