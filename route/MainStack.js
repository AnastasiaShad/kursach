import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from '@react-navigation/native';

import React from "react";
import Main from '../components/Main';
import Test from '../components/Test';
import MainData from '../components/MainData'
import Result from '../components/Result'
const Stack = createStackNavigator();
const MainStackNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerStyle: {
          backgroundColor: '#DECAF1',
          
        },
        headerTintColor: '#1C0C2C',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        
      }}
    >
     
      <Stack.Screen name="Main" component={Main} options = {{title:'', headerShadowVisible: false}} />
      <Stack.Screen name="Test" component={Test} options = {{title:'Прохождение теста', headerShadowVisible: false, headerBackTitle: 'Назад'}}/>
       <Stack.Screen name="MainData" component={MainData} options = {{title:'Прохождение теста', headerShadowVisible: false, headerBackTitle: 'Назад'}}/>
        <Stack.Screen name="Result" component={Result} options = {{title:'Результат', headerShadowVisible: false, headerBackTitle: 'Назад'}}/>
    </Stack.Navigator>
  );
}

export { MainStackNavigator };