import React from 'react'
import { View, Text } from 'react-native'
import { map } from 'lodash'
import { Product } from "../Product/Product"
import { style } from "./WishlistList.styles"

export function WishlistList({ title, products, onReload }) {

    return (
        <View style={style.container}>
            {title && <Text style={style.title}>{title}</Text>}


            {map(products, (product) => (

                < Product
                    key={product.data.id}
                    product={product.data}
                    onReload={onReload}
                />
            ))}

        </View>
    )
}