import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    TextInput,
    Image,
}from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

const LoginScreen = ({navigation})=> {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome Admin !</Text>
            </View>

            <View style={[styles.footer, {
                marginTop:25
            }]}>
                
                    
        

                <Text style={[styles.text_footer,{
                    marginTop:35,
                    marginLeft:35
                }]}>Email</Text>

              
                
                

                <View style={[styles.action, {
                
                    marginLeft:35
                }]}>
                    <TextInput 
                    placeholder="Your Emial"
                    autoCapitalize="none"
                    style={styles.textInput}>
                    
                    </TextInput>
                </View>

                <Text style={[styles.text_footer,{
                    marginTop:35,
                    marginLeft:35
                }]} >Password</Text>
                <View style={[styles.action, {
                    marginTop:35,
                    marginLeft:35
                }]}>
                    <TextInput 
                    secureTextEntry={true}
                    placeholder="Your Password"
                    autoCapitalize="none"
                    style={styles.textInput}>
                    </TextInput>
                </View>

              <View style={styles.button}
              >
                  <LinearGradient
                        colors = {['#08d4c4' , '#01ab9d']}
                        style={styles.signIn}
                  >
                      <Text 
                      onPress={() => navigation.navigate("Home")}
                      style={[styles.textSign, {
                          color:'#fff'
                      }]}>Sing In</Text>
                  </LinearGradient>
              </View>

            </View>
        </View>
    );
};


export default LoginScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonstyle:{
        width: 100,
    },
    tinyLogo: {
        width: 20,
        height: 20,
      },
  });