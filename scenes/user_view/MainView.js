import React, { Component } from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../../redux/actions/index'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import StoreListView from './StoreListView'
import ProfileView from './ProfileView'
import SearchView from './SearchView'
import OrdersView from './OrdersView'

const Tab = createBottomTabNavigator();

export class MainView extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={StoreListView}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }} />
                <Tab.Screen name="Search" component={SearchView}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="magnify" color={color} size={26} />
                        ),
                    }} />
                <Tab.Screen name="Orders" component={OrdersView}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }} />
                <Tab.Screen name="Profile" component={ProfileView} navigation={this.props.navigation}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account" color={color} size={26} />
                        ),
                    }} />
            </Tab.Navigator>
        )
    }
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({ fetchUser }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(MainView)