import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { ProviderPaper } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Theme } from './styles/Theme'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  LoginView,
  RegisterView,
  ForgotPasswordView,
  LandingView,
  Test,
} from './scenes'
import MainView from './scenes/user_view/MainView'
import ProfileView from './scenes/user_view/ProfileView'

import firebase from 'firebase/app';
import 'firebase/firestore';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))

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

const Tab = createBottomTabNavigator();

export class App extends Component {
  constructor(props) {
    super()
    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }

  render() {
    const { loggedIn, loaded } = this.state;

    if (!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>Loading</Text>
        </View>
      )
    }

    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="LoginView"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="LoginView" component={LoginView} />
            <Stack.Screen name="RegisterView" component={RegisterView} />
            <Stack.Screen name="LandingView" component={LandingView} />
            <Stack.Screen name="ForgotPasswordView" component={ForgotPasswordView} />
            <Stack.Screen name="Test" component={Test} />
          </Stack.Navigator>
        </NavigationContainer>
      )
    }

    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="MainView" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainView" component={MainView} />
            <Stack.Screen name="ProfileView" component={ProfileView} navigation={this.props.navigation} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App
