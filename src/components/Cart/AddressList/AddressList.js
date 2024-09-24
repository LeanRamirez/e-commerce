import React from 'react'
import { View, Text } from 'react-native'
import { add, map } from 'lodash'
import { Address } from "./Address"
import { style } from "./AddressList.styles"

export function AddressList({ addresses, selectedAddress, setSelectedAddress }) {
    return (
        <View style={style.container}>
            <Text style={style.title}>Selecciona la dirección de envío:</Text>


            {map(addresses, (address) => (
                <Address
                    key={address.id}
                    address={address}
                    selectedAddress={selectedAddress}
                    setSelectedAddress={setSelectedAddress}
                />
            ))}
        </View>
    )
}