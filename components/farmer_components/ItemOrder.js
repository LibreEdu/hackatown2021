import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native'
import Button from "../Button"

class ItemOrder extends React.Component {

    render() {
        const order = this.props.order
        return (
            <View style={styles.main_container}>

                <View style={styles.content_container}>
                    <View style={styles.id_container}>
                        <Text style={styles.title_text}>Order ID: {order.orderID}</Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text style={{ fontSize: 18 }} numberOfLines={5}>
                            {order.nameOfFarm}{'\n'}
                      Price of Order: {order.orderPrice}{'\n'}
                      Items: tomatoes, lettuce, beans
                  </Text>
                    </View>
                    <View style={styles.date_container}>
                        <Text style={styles.date_text}>Ordered the: {order.dateOfOrder}</Text>
                    </View>
                </View>
                <View style={styles.button}>
                    <Image source={require('../../assets/test.png')} style={styles.image} />
                </View>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        borderColor: "rgba(255,255,255, 0)",
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: "rgba(255,255,255, 0.5)"
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 68,
        marginTop: 5,
        marginRight: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "rgba(255,255,255, 0)"

    },
    content_container: {
        flex: 1,
        margin: 5
    },
    id_container: {
        flex: 3,
        flexDirection: 'row'
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 24,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    description_container: {
        flex: 7
    },
    date_container: {
        flex: 1
    },
    date_text: {
        textAlign: 'left',
        fontSize: 14
    }
})


export default ItemOrder