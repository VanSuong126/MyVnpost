import React, {Component, useState} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from  "../Components/home";
import LoginForm from '../Components/login';
import IndexForm from '../Components/index'

const Stack = createNativeStackNavigator();
const  Navigation=()=> {
    return(
        <NavigationContainer>
             <Stack.Navigator 
              screenOptions={{
                headerShown: false
              }}>
             <Stack.Screen name="Home" component={HomePage} />
             <Stack.Screen name="Login" component={LoginForm} />
             <Stack.Screen name="Dashboard" component={IndexForm} />
             </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation
