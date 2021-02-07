import React from 'react'
import { View, SafeAreaView } from 'react-native'
import Button from '../../components/Button'
import ProfileButton from '../../components/user_components/ProfileButton'

import firebase from 'firebase'
require('firebase/firestore')

function ProfileView() {
    const onLogoutPressed = () => {
        firebase.auth().signOut();
    }

    return (
        <SafeAreaView>
            <ProfileButton name='Maël LE PETIT' onPress={() => console.log("test")}></ProfileButton>
            <Button mode="contained" onPress={onLogoutPressed}>Logout</Button>
        </SafeAreaView>
    )
}

export default ProfileView