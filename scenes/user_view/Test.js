import React from 'react'
import Background from '../../components/Background'
import Paragraph from '../../components/Paragraph'
import Button from '../../components/Button'

const Test = ({ navigation }) => (
    <Background>
        <Paragraph>
            Ouverture du module client.
        </Paragraph>
        <Button
            mode="outlined"
            onPress={() =>
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'LoginView' }],
                })
            }
        >
            Logout
    </Button>
    </Background>
)

export default Test