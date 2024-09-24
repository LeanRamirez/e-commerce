import React from 'react'
import { View, Text } from 'react-native'
import { map } from 'lodash'
import { Product } from "./Product"
import { style } from "./ProductList.style"

export function ProductList({ products }) {

    return (
        <View>
            <Text style={style.title}>Products: ...</Text>

            {map(products, (product) => (
                <Product key={product.id} product={product} />
            ))}
        </View>
    )
}