import React, {Component, useState} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from  "../Components/home";
import LoginForm from '../Components/login';
import DashboardForm from '../Components/dashboard';
import CreateOrderForm  from '../Components/createOrder'

const Stack = createNativeStackNavigator();
const  Navigation=()=> {
    return(
        <NavigationContainer>
             <Stack.Navigator 
              screenOptions={{
                headerShown: false
              }}>
              <Stack.Screen name="Dashboard" component={DashboardForm} />
             <Stack.Screen name="Home" component={HomePage} />
             <Stack.Screen name="Login" component={LoginForm} />
             <Stack.Screen name="CreateOrder" component={CreateOrderForm} />
             </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation
