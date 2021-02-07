import React from 'react'
import { StyleSheet, SafeAreaView, FlatList } from 'react-native'

import ShopItem from '../../components/user_components/ShopItem'
import shops from '../../utils/shopsData'

class StoreListView extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.main_container}>
                <FlatList
                    data={shops}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <ShopItem shop={item} />}
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

export default StoreListView