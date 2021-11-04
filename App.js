import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import login from './screens/login';
import signup from './screens/signup';
import carts from './screens/carts';
import homepage from './screens/homepage';


export default function App() {
  const MainNavigator = createStackNavigator();
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <MainNavigator.Navigator  screenOptions={{headerShown: false}} initialRouteName="login">
          <MainNavigator.Screen name="Login" component={login}/>
          <MainNavigator.Screen name="Homepage" component={homepage}/> 
          <MainNavigator.Screen name="Carts" component={carts}/>
          <MainNavigator.Screen name="Signup" component={signup}/>
          
        </MainNavigator.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
