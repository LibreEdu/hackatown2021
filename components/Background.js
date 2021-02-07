import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import { Theme } from '../styles/Theme'

const Background = ({ children }) => (
    <ImageBackground
        source={require('../assets/background_dot.png')}
        resizeMode="repeat"
        style={styles.background}
    >
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
            {children}
        </KeyboardAvoidingView>
    </ImageBackground>
)

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        backgroundColor: Theme.colors.surface,
    },
    container: {
        flex: 1,
        padding: 20,
        width: '100%',
        maxWidth: 340,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Background