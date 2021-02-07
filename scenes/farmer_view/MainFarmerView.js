import React, { Component } from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'

import firebase from 'firebase'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../../redux/actions/index'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import AccountView from './AccountView'
import NewItemOrder from './NewItemOrder'
import OrdersView from './OrdersView'
import ShopOverviewView from './ShopOverviewView'

const Tab = createBottomTabNavigator();

export class MainFarmerView extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="My Shop" component={ShopOverviewView}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }} />
                <Tab.Screen name="Items" component={NewItemOrder}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="magnify" color={color} size={26} />
                        ),
                    }} />
                <Tab.Screen name="Orders" component={OrdersView}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="archive" color={color} size={26} />
                        ),
                    }} />
                <Tab.Screen name="Profile" component={AccountView}
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

export default connect(mapStateToProps, mapDispatchProps)(MainFarmerView)