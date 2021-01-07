import React from 'react';
import {
    View,
    Text,
    Button,
    Image,
    StyleSheet
}from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';



const OnboardingScreen = ({navigation}) => {
    return(
        <Onboarding
            onSkip={() => navigation.require("Login")}
            onDone={() => navigation.navigate("Login")}
            pages={[
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image source={require('../assets/onboarding-img1.png')} />,
                    title: 'Explore More',
                    subtitle: 'We dont just build websites, we build websites that SELLS',
                },
                {
                    backgroundColor: '#fdeb93',
                    image: <Image source={require('../assets/onboarding-img2.png')} />,
                    title: 'Stay Home Stay Safe',
                    subtitle: 'When you cant go outside, how about exploring the inner universe, it has far more potential than the external world can ever offer.',
                },
                {
                    backgroundColor: '#e9bcbe',
                    image: <Image source={require('../assets/onboarding-img3.png')} />,
                    title: 'Happy Client',
                    subtitle: 'A customer talking about their experience with you is worth ten times that which you write or say about yourself.',
                },
                
            ]}
        />

    );
}


export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});