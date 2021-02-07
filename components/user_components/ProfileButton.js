import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'

class ProfileButton extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={this.props.onPress}
            >
                <Image
                    source={require('../../assets/profile.png')}
                    style={styles.image}
                />
                <View style={styles.text_container}>
                    <Text style={styles.name}>{this.props.name}</Text>
                    <Text style={styles.edit}>Edit my profile</Text>
                </View>

            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        flexDirection: 'row'
    },

    image: {
        marginStart: 10,
        marginTop: 10,
        width: 80,
        height: 80,
        borderRadius: 80 / 2
    },

    text_container: {
        marginStart: 10,
        flexDirection: 'column'
    },

    name: {
        marginTop: 30,
        fontSize: 20,
        color: '#2d3436'
    },

    edit: {
        marginTop: 5,
        fontSize: 10,
        color: '#27ae60',
        fontWeight: 'bold'
    }
})

export default ProfileButton