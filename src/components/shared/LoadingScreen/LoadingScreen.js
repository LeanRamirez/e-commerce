import React from 'react'
import { SafeAreaView, Text, ActivityIndicator } from 'react-native'
import { style } from "./LoadingScreen.styles"

export function LoadingScreen(props) {
    const { text = "Cargando ...", color = "#000", size = "large" } = props
    return (
        <SafeAreaView style={style.container}>
            <ActivityIndicator size={size} color={color} style={style.loading} />
            <Text style={style.title}>{text}</Text>
        </SafeAreaView>
    )
}