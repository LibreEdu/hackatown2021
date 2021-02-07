import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Background from '../../components/Background'
import ItemOrder from '../../components/farmer_components/ItemOrder'

const AcccountView = ({ navigation }) => {

    /* get from data base */
    const [FirstName, setFirstName] = useState({ value: '', error: '' })
    const [LastName, setLastName] = useState({ value: '', error: '' })
    const [emailAddress, setEmailAddress] = useState({ value: '', error: '' })
    const [phoneNumber, setPhoneNumber] = useState({ value: '', error: '' })


    return (
        <Background>
            <View style={styles.container}>
                <View style={{ marginTop: 64, alignItems: "center", }}>
                    <Image
                        style={styles.image_icon}
                        source={require("../../assets/profile.png")}
                    />
                </View>
                <View style={{ marginTop: 30, alignItems: "center", width: "80%" }}>
                    <TextInput
                        label="First Name"
                        returnKeyType="next"
                        value={FirstName.value}
                        onChangeText={(text) => setFirstName({ value: text, error: '' })}
                    />
                    <TextInput
                        label="Last Name"
                        returnKeyType="next"
                        value={LastName.value}
                        onChangeText={(text) => setLastName({ value: text, error: '' })}
                    />
                    <TextInput
                        label="Email Address"
                        returnKeyType="next"
                        value={emailAddress.value}
                        onChangeText={(text) => setEmailAddress({ value: text, error: '' })}
                    />
                    <TextInput
                        label="Phone Number"
                        returnKeyType="next"
                        value={phoneNumber.value}
                        onChangeText={(text) => setPhoneNumber({ value: text, error: '' })}
                    />
                    <Button mode="contained" style={{ marginTop: 10, width: "70%" }}>
                        Change Password
                    </Button>

                    <Button mode="contained" style={{ marginTop: 10, width: "70%" }}>
                        Edit your shop
                    </Button>
                </View>
            </View>

        </Background>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    image_icon: {
        width: 136,
        height: 136,
        borderRadius: 68
    },
    info: {

    }

})


export default AcccountView