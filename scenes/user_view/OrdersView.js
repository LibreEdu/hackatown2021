import React from 'react'
import { StyleSheet, SafeAreaView, FlatList } from 'react-native'

import OrderItem from '../../components/user_components/OrderItem'
import orders from '../../utils/ordersData'

class OrderView extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.main_container}>
                <FlatList
                    data={orders}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <OrderItem order={item} />}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
})

export default OrderView