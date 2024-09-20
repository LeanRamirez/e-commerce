import React from 'react'
import { View, Text } from 'react-native'
import { fn } from "../../../utils"
import { style } from "./Price.styles"

export function Price({ price, discount }) {

    return (
        <View style={style.container}>
            {discount && (
                <View style={style.containerData}>
                    <Text style={style.dataText}>Precio recomendado:</Text>
                    <Text style={[style.dataValue, style.oldPrice]}>$ {price}</Text>
                </View>
            )}
            <View style={style.containerData}>
                <Text style={style.dataText}>Precio:</Text>
                <Text style={[style.dataValue, style.currentPrice]}>$ {fn.calcPrice(price, discount)}</Text>
            </View>
            {discount && (
                <View style={style.containerData}>
                    <Text style={style.dataText}>Descuento:</Text>
                    <Text style={[style.dataValue, style.saving]}>$ {((price * discount) / 100).toFixed(2)}   (-{discount}%)</Text>
                </View>
            )}
        </View>
    )
}