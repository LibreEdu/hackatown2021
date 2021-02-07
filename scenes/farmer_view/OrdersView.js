import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Background from '../../components/Background'
import ItemOrder from '../../components/farmer_components/ItemOrder'
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';

const OrdersView = ({ navigation }) => {

    // exemple de data
    const [orders, setOrders] = useState([
        { orderID: '1', dateOfOrder: '11/12/12', orderPrice: '51$', nameOfFarm: 'Ferme1' },
        { orderID: '2', dateOfOrder: '12/12/12', orderPrice: '52$', nameOfFarm: 'Ferme2' },
        { orderID: '3', dateOfOrder: '13/12/12', orderPrice: '53$', nameOfFarm: 'Ferme3' },
        { orderID: '4', dateOfOrder: '14/12/12', orderPrice: '54$', nameOfFarm: 'Ferme4' },
        { orderID: '5', dateOfOrder: '15/12/12', orderPrice: '55$', nameOfFarm: 'Ferme5' },
        { orderID: '6', dateOfOrder: '16/12/12', orderPrice: '56$', nameOfFarm: 'Ferme6' },
        { orderID: '7', dateOfOrder: '17/12/12', orderPrice: '57$', nameOfFarm: 'Ferme7' },
        { orderID: '8', dateOfOrder: '18/12/12', orderPrice: '58$', nameOfFarm: 'Ferme8' },
    ])


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ marginTop: 60 }}>
                    {orders.map((orderData) => {
                        return (
                            <View>
                                <ItemOrder order={orderData} />
                            </View>
                        )

                    })}
                </View>
            </ScrollView>
        </View>

    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    order_list: {
        marginTop: 60
    },
})


export default OrdersView