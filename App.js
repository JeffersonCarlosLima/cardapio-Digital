// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Interfaces/Home';
import Login from './src/Interfaces/Login';
import TotalProfessores from './src/Interfaces/TotalProfessores';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TotalProfessores" component={TotalProfessores} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

