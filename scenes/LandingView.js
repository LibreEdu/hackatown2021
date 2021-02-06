import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Button from '../components/Button'

const LandingView = ({ navigation }) => {

    //Constant created that makes user button pressed lead to next page and push current page on the stack
    const onUserPressed = () => {
        navigation.push('LandingView')
        navigation.replace('RegisterView')
    }

    //Constant created that makes farmer button pressed lead to next page and push current page on the stack
    const onFarmerPressed = () => {
        navigation.push('LandingView')
        navigation.replace('LoginView')
    }

    return (
        
        <View style={styles.container}>

            <View style={styles.secondContainer}>

                {/* Button that indicates we have a user */}
                <Button mode="contained" onPress={onUserPressed}>
                    Je suis un utilisateur
                </Button>

                {/* Button that indicates we have a farmer */}
                <Button mode="contained" onPress={onFarmerPressed}>
                    Je suis un agriculteur
                </Button>

            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({

    //Styles for the main container (background)
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent: 'center',

    },
    //Style for the container that has both buttons in it
    secondContainer: {
        flex: 1,
        marginRight: '30%',
        marginLeft: '30%',
        alignContent: 'center',
        justifyContent: 'center',

    },
})

export default LandingView