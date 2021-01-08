import React, {useState,useEffect}from 'react';
import {StyleSheet,FlatList, SafeAreaView, Text, View, Image, Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
const width = Dimensions.get("screen").width/2-30;

const HomeScreen = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://6d95804b4f8c.ngrok.io/api/getproducts.php')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


  const Card =({product}) =>{
      return <View style={style.card}>
          <View style={{alignItems:'flex-end'}}></View>
          <View style={{height:100,alignItems:'center'}}>
            <Image 
            style={{flex:1,resizeMode:'contain', width: width,
            height: 5,}}
            source={{uri: `data:image/jpeg;base64,${product.image_medium}`,}} />
            </View>
            <Text
                style={{fontWeight:'bold',fontSize:17,marginTop:10}}
            >{product.name}</Text>

            <View 
                style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    marginTop:5,
                }}
            >
                <Text style={{fontWeight:'bold',fontSize:17,marginTop:10}}>{product.list_price}$</Text>
                <View
                    style={{
                        marginTop:10,
                        height:25,
                        width:25,
                        backgroundColor:'#08d4c4',
                        borderRadius:5,
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                >
                    <Text
                        style={{
                            fontSize:22,
                            fontWeight:"bold",
                            
                        }}
                    >X</Text>

                </View>
            </View>
      </View>
  }


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

        <FlatList
            columnWrapperStyle={{
                justifyContent:'space-between'
                
            }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                marginTop:10,
                paddingBottom:50,
            }}

            data={data}
            numColumns={2}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Card product={item}/>
            )}
        />
    

    </SafeAreaView>
  );
};
export default HomeScreen;


const style = StyleSheet.create({
    header: {
        marginTop: 20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    card:   {
        height: 255,
        width,
        marginHorizontal:2,
        borderRadius:10,
        marginBottom:20,
        padding:15
    }
})