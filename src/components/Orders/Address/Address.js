import React from 'react'
import { View, Text } from 'react-native'
import { style } from "./Address.styles"
import { add } from 'lodash'


export function Address({ address }) {

    return (
        <View style={style.container}>
            <Text style={style.title}>{address.title}</Text>
            <Text>Nombre: {address.name}</Text>
            <Text>Dirección: {address.address}</Text>
            <Text>{address.state}, {address.city} </Text>
            <Text>codigo postal: {address.postal_code}</Text>
            <Text>{address.country}</Text>
            <Text>Telefono: {address.phone}</Text>
        </View>
    )
}