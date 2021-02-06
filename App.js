import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native';
import { Theme } from './styles/Theme'
import {
  LoginView,
} from './scenes'

const Stack = createStackNavigator()

const App = () => {
  return (
    <Provider Theme={Theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoginView"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="LoginView" component={LoginView} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
