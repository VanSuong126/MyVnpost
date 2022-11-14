import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { PersistGate } from 'redux-persist/lib/integration/react';
import {Provider} from 'react-redux';
import { store, persistor } from '~reduxCore/store';

import {
  Login,
  Home,
  Dashboard,
  CreateOrder
} from '~screens';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="CreateOrder" component={CreateOrder} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
export default Navigation;
