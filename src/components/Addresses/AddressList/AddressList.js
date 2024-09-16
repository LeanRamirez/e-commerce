import React from 'react'
import { View, Text } from 'react-native'
import { Button } from "react-native-paper"
import { map } from "lodash"
import { Address } from "./Address"
import { style } from "./AddressList.styles"

export function AddressList({ addresses, onReload }) {
    return (
        <View style={style.container}>
            {map(addresses, (address) => (
                <Address
                    key={address.id}
                    addressId={address.id}
                    address={address.attributes}
                    onReload={onReload}
                />
            ))}
        </View>
    )
}