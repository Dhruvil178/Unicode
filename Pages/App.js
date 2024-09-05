import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen1 from './Screens/HomeScreen1';
import LoginScreen1 from './Screens/LoginScreen1';
import SignupScreen1 from './Screens/SignupScreen1';
import BlankScreen1 from './Screens/BlankScreen';

const Stack  = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="Home" component={HomeScreen1} />
        <Stack.Screen name="LoginScreen1"  component={LoginScreen1} />
        <Stack.Screen name="SignupScreen1"   component={SignupScreen1} />
        <Stack.Screen  name="BlankScreen"  component={BlankScreen1} />
      </Stack.Navigator> 
    </NavigationContainer>
  );
}