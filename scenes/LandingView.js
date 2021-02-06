import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { Theme } from '../styles/Theme'
import { emailValidator } from '../utils/emailValidator'
import { passwordValidator } from '../utils/passwordValidator'
import { nameValidator } from '../utils/nameValidator'

const LandingView = ({}) => {

    return (

        console.log("test"),

        <View style={styles.container}>

            <View style={styles.secondContainer}>

                <Button mode="contained" onPress={() => console.log("Je suis un utilisateur")}>
                    Je suis un utilisateur
                </Button>

                <Button mode="contained" onPress={() => console.log("Je suis un agriculteur")}>
                    Je suis un agriculteur
                </Button>
                
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent: 'center',

    },
    secondContainer: {
        flex: 1,
        marginRight: '30%',
        marginLeft: '30%',
        alignContent: 'center',
        justifyContent: 'center',

    },
})

export default LandingView