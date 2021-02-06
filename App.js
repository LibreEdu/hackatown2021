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

import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDKM9TVFl02vuF4gh1V5VA9JjIIe4FjuCE",
  authDomain: "hackatown2021-9b5fb.firebaseapp.com",
  projectId: "hackatown2021-9b5fb",
  storageBucket: "hackatown2021-9b5fb.appspot.com",
  messagingSenderId: "923045340255",
  appId: "1:923045340255:web:0a707deb29958e705327ea"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

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
