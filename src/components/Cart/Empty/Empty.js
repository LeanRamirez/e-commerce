import React from 'react'
import { View, Text } from 'react-native'
import { style } from "./Empty.styles"

export function Empty() {
    return (
        <View style={style.container}>
            <Text style={style.text}>No hay productos en el carrito</Text>
        </View>
    )
}