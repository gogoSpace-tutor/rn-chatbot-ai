import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/Home';
import Chat from '../components/Chat';

const Stack = createNativeStackNavigator();


const HomeScreenNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='home' component={Home}/>
      <Stack.Screen name='chat' component={Chat}/>
    </Stack.Navigator>
  )
}

export default HomeScreenNav