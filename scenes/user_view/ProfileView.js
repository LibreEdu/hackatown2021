import React from 'react'
import { View, Text } from 'react-native'
import Button from '../../components/Button'

import firebase from 'firebase'
require('firebase/firestore')

function ProfileView() {
    const onLogoutPressed = () => {
        firebase.auth().signOut();
    }

    return (
        <View>
            <Button mode="contained" onPress={onLogoutPressed}>
                Logout
            </Button>
        </View>
    )
}

export default ProfileView