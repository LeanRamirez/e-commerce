import React from 'react'
import { View, Text } from 'react-native'
import { Favorite } from "./Favorite"
import { Buy } from "./Buy"
import { style } from "./BottomBar.styles"

export function BottomBar({ productId }) {
    return (
        <View style={style.container}>
            <View style={style.wishList}>
                <Favorite productId={productId} />
            </View>
            <View style={style.buy}>
                <Buy productId={productId} />
            </View>
        </View>
    )
}

