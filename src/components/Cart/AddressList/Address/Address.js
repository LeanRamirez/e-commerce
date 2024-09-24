import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { style } from "./Address.styles"

export function Address({ address, selectedAddress, setSelectedAddress }) {

    const data = address.attributes
    const stylesSelected = address.id === selectedAddress?.id && style.checked
    return (
        <Pressable onPress={() => setSelectedAddress(address)}>
            <View style={[style.container, stylesSelected]}>
                <Text style={style.title}>{data.title}</Text>
                <Text>{data.name}</Text>
                <Text>{data.address}</Text>
                <Text>{data.state}, {data.city}, codigo postal: {data.postal_code}</Text>
                <Text>{data.country}</Text>
                <Text>Numero de telefono{data.phone}</Text>
            </View>
        </Pressable>
    )
}