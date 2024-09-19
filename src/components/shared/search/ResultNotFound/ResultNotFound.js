import React from 'react'
import { View, Text } from 'react-native'
import { style } from "./ResultNotFound.styles"

export function ResultNotFound({ searchText }) {

    return (
        <View style={style.container}>
            <Text style={style.searchText}>No hay resultados para {searchText}</Text>
            <Text style={style.otherText}>Revisa la ortografía o usa términos mas generales.</Text>
        </View>
    )
}
