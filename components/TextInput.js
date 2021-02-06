import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput as Input } from 'react-native-paper'
import { Theme } from '../styles/Theme'

const TextInput = ({ errorText, description, ...props }) => (
    <View style={styles.container}>
        <Input
            style={styles.input}
            selectionColor={Theme.colors.primary}
            underlineColor="transparent"
            mode="outlined"
            {...props}
        />
        {description && !errorText ? (
            <Text style={styles.description}>{description}</Text>
        ) : null}
        {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
)

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 12,
    },
    input: {
        backgroundColor: Theme.colors.surface,
    },
    description: {
        fontSize: 13,
        color: Theme.colors.secondary,
        paddingTop: 8,
    },
    error: {
        fontSize: 13,
        color: Theme.colors.error,
        paddingTop: 8,
    },
})

export default TextInput