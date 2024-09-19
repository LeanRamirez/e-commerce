import React from 'react'
import { View, Text } from 'react-native'
import { map } from "lodash"
import { Product } from "./Product"
import { style } from "./GridProducts.styles"

export function GridProducts({ title, products }) {
    return (
        <View style={style.container}>
            {title && <Text style={style.title}>{title}</Text>}
            <View style={style.gridContainer}>
                {map(products, (item) => {
                    const product = item.attributes;
                    product.id = item.id
                    return (
                        <Product key={product.id} product={product} />
                    )
                })}
            </View>
        </View>
    )
}