import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Card } from "@paraboly/react-native-card";

class ShopItem extends React.Component {
    render() {
        const shop = this.props.shop
        return (
            <View style={styles.main_container}>
                <Card
                    iconDisable={true}
                    title={shop.name}
                    borderRadius={20}
                    containerHeight={100}
                    topRightText={shop.rate}
                    bottomRightText={shop.distance}
                    textContainerNumberOfLines={3}
                    description={shop.desc}
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

export default ShopItem