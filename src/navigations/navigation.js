import React, {Component, useState} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from  "../screens/Main/Home/home";
import LoginForm from '../screens/Auths/Login/login';
import DashboardForm from '../screens/Main/Dashboard/dashboard';
import CreateOrderForm  from '../screens/Main/Dashboard/createOrder/createOrder'

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
             <Stack.Screen name="CreateOrder" component={CreateOrderForm} />
             <Stack.Screen name="Dashboard" component={DashboardForm} />
             </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation
