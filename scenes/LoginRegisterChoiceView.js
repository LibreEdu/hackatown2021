import React from 'react'
import Background from '../components/Background'
import Button from '../components/Button'

const LoginRegisterChoiceView = ({ navigation }) => {

    return (
        <Background>
            <Button mode="contained" onPress={() => navigation.replace('LoginView')}>
                Login
            </Button>
            <Button mode="contained" onPress={() => navigation.replace('RegisterView')}>
                Register
            </Button>
        </Background>
    )
}

export default LoginRegisterChoiceView;
