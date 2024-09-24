import React from 'react'
import { View, Text, Image } from 'react-native'
import { map } from 'lodash'
import { fn } from '../../../utils'
import { style } from "./ProductList.styles"

export function ProductList({ products }) {
    return map(products, (product) => {
        return (
            <View key={product.id} style={style.container}>
                <View style={style.imageContainer}>
                    <Image source={{ uri: product.main_image.data.attributes.url }} style={style.image} />
                </View>
                <View style={style.infoContainer}>
                    <Text style={style.name} numberOfLines={3} ellipsizeMode='tail'>
                        {product.title}
                    </Text>
                    <View style={style.price}>
                        <Text style={style.currentPrice}>
                            $ {fn.calcPrice(product.price, product.discount)} {" x "} {product.quantity}
                        </Text>
                    </View>
                </View>
            </View>
        )
    })
}