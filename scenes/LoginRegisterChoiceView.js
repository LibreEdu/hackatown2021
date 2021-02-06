import React from 'react'
import Background from '../components/Background'
import Button from '../components/Button'

const LoginRegisterChoiceView = ({ navigation }) => {
    const onLoginPressed = () => {
        navigation.push('LoginRegisterChoiceView')
        navigation.replace('LoginView')
    }
    const onRegisterPressed = () => {
        navigation.push('LoginRegisterChoiceView')
        navigation.replace('RegisterView')
    }
    
    return (
        <Background>
            <Button mode="contained" onPress={onLoginPressed}>
                Login
            </Button>
            <Button mode="contained" onPress={onRegisterPressed}>
                Register
            </Button>
        </Background>
    )
}

export default LoginRegisterChoiceView;
