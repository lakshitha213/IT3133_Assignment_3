import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './components/Login';
import BottomTabNavigator from './components/BottomTabNavigator';
import { Image } from 'react-native';

const Stack = createStackNavigator();

export default function App() {

  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ 
        headerShown: true, 
        headerTintColor:'white',
        headerTitle:'UoV Student Care' ,
        headerStyle:{
          backgroundColor:'#4b0150'
        }
        }}>
        <Stack.Screen name="Login">
          {props => <Login {...props} setUser={setUser}/>}
        </Stack.Screen>
        <Stack.Screen name="BottomTabs" component={BottomTabNavigator} initialParams={{user}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}