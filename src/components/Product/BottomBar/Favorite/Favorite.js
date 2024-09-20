import React from 'react'
import { View, Text } from 'react-native'
import { IconButton } from "react-native-paper"
import { style } from "./Favorite.styles"

export function Favorite({ productId }) {
    return (
        <IconButton
            icon="heart"
            style={style.iconButton}
            size={30}
            iconColor='#fff'
        />
    )
}