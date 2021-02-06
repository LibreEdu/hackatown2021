import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Theme } from './styles/Theme'
import {
  LoginView,
  RegisterView,
  ForgotPasswordView,
  Test,
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
          <Stack.Screen name="RegisterView" component={RegisterView} />
          <Stack.Screen name="ForgotPasswordView" component={ForgotPasswordView} />
          <Stack.Screen name="Test" component={Test} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
