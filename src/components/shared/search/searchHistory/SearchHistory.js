import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import AwesomeIcon from "react-native-vector-icons/FontAwesome"
import Toast from 'react-native-root-toast'
import { map } from "lodash"
import { searchHistoryCtrl } from "../../../../api"
import { useSearch } from "../../../../hooks"
import { style } from "./SearchHistory.styles"

export function SearchHistory({ open, height, onSearch }) {
    const containerStyle = { top: height }
    const [history, setHistory] = useState(null)
    const { setSearchText } = useSearch();

    useEffect(() => {
        if (open) getHistory();
    }, [open]);

    const getHistory = async () => {
        try {
            const response = await searchHistoryCtrl.get();
            setHistory(response);
        } catch (error) {
            Toast.show("Error al obtener el historial de busqueda", {
                position: Toast.positions.CENTER
            })
        }
    };

    const onSearchWrapper = (text) => {
        onSearch(text);
        setSearchText(text)
    }


    if (!open) return null

    return (
        <View style={[containerStyle, style.container]}>
            {history && map(history, (item, index) => (
                <TouchableOpacity key={index} onPress={() => onSearchWrapper(item.search)} >
                    <View style={style.historyItem}>
                        <Text style={style.text} >{item.search}</Text>
                        <AwesomeIcon name='arrow-right' size={16} />
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    )
}
