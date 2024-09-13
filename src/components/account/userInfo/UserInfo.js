import React from 'react'
import { View, Text } from 'react-native'
import { useAuth } from "../../../hooks"
import { style } from "./UserInfo.styles"

export function UserInfo() {
    const { user } = useAuth();


    return (
        <View style={style.container}>
            <Text style={style.title}>Bienvenido,</Text>
            <Text style={style.name}>
                {user.firstname && user.lastname
                    ? `${user.firstname} ${user.lastname}`
                    : user.email}
            </Text>
        </View>
    )
}