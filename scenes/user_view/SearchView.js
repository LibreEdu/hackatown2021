import React from 'react'
import { StyleSheet, View, Text, SafeAreaView } from 'react-native'

class SearchView extends React.Component {
    render() {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Text>Not available at the moment. Stay tuned...</Text>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 500,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SearchView