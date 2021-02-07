import React, { Component } from 'react'
import { View, Text } from 'react-native'

class RegisterView2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: null,
            email: null,
            password: null,
            role: null,
            registered: false
        }
    }

    render() {
        const { registered } = this.state;

        if (!registered) {
            return (
                <Background>
                    <BackButton goBack={navigation.goBack} />
                    <Logo />
                    <TextInput
                        label="Name"
                        returnKeyType="next"
                        value={name.value}
                        onChangeText={(text) => setName({ value: text, error: '' })}
                        error={!!name.error}
                        errorText={name.error}
                    />
                    <TextInput
                        label="Email"
                        returnKeyType="next"
                        value={email.value}
                        onChangeText={(text) => setEmail({ value: text, error: '' })}
                        error={!!email.error}
                        errorText={email.error}
                        autoCapitalize="none"
                        autoCompleteType="email"
                        textContentType="emailAddress"
                        keyboardType="email-address"
                    />
                    <TextInput
                        label="Password"
                        returnKeyType="done"
                        value={password.value}
                        onChangeText={(text) => setPassword({ value: text, error: '' })}
                        error={!!password.error}
                        errorText={password.error}
                        secureTextEntry
                    />
                    <Button
                        mode="contained"
                        onPress={onSignUpPressed}
                        style={{ marginTop: 24 }}
                    >
                        Sign Up
            </Button>
                    <View style={styles.row}>
                        <Text>Already have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.replace('LoginView')}>
                            <Text style={styles.link}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </Background>
            )
        }

        return (
            <View><Text>test</Text></View>
        )
    }
}