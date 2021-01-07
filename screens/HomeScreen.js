import React from 'react';
import {StyleSheet,FlatList, SafeAreaView, Text, View, Image } from 'react-native';

const HomeScreen = () => {
 

  return (
    <SafeAreaView
    style={{
        flex:1,
        paddingHorizontal:20,
        backgroundColor: '#fff',
    }}>

    <View style={style.header}>
        <View>
            <Text style={{
                fontSize: 25, fontWeight:'bold'
            }}>Welcome to</Text>
            <Text style={{
                fontSize:38, fontWeight:'bold', color: '#08d4c4'
            }}>Odoo app</Text>
        </View>

        <Image 
        style={{
            marginTop:20,
            width:28,
            height:28
        }}
        source={require('../assets/plus.png')}/>

    </View>

    

    </SafeAreaView>
  );
};
export default HomeScreen;


const style = StyleSheet.create({
    header: {
        marginTop: 20,
        flexDirection:'row',
        justifyContent:'space-between'
    }
})