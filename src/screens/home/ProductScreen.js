import React from 'react'
import { View, Text } from 'react-native'

export function ProductScreen(props) {

    const { route: {
        params
    } } = props
    const productId = params.productId
    return (
        <View>
            <Text>ProductScreen</Text>
            <Text>ProductScreen</Text>
            <Text>ProductScreen</Text>
            <Text>ProductScreen</Text>
            <Text>ProductScreen</Text>
            <Text>{productId}</Text>
            <Text>{productId}</Text>
            <Text>{productId}</Text>
            <Text>{productId}</Text>
            <Text>{productId}</Text>
            <Text>{productId}</Text>
            <Text>{productId}</Text>

        </View>
    )
}