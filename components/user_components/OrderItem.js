import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Card } from "@paraboly/react-native-card";

class OrderItem extends React.Component {
    render() {
        const order = this.props.order
        return (
            <View style={styles.main_container}>
                <Card
                    iconDisable={true}
                    title={"Order #" + order.id}
                    borderRadius={20}
                    containerHeight={100}
                    topRightText={"Status: " + order.status}
                    bottomRightText={order.price + "$"}
                    textContainerNumberOfLines={3}
                    description={
                        "Date: " + order.date + "\n\n" +
                        "Localisation: " + order.location
                    }
                    topRightTextStyle={{
                        fontSize: 12,
                        fontWeight: "700",
                        color: "#505e80",
                    }}
                    bottomRightTextStyle={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#505e80",
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 110,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default OrderItem