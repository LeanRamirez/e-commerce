import React from 'react'
import { View, Text } from 'react-native'
import { style } from "./Title.styles"

export function Title({ text }) {

    return (
        <View style={style.container}>
            <Text style={style.title}>{text}</Text>
        </View>
    )
}
