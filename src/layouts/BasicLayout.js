import React from 'react'
import { ScrollView } from 'react-native'
import { Search, StatusBar } from "../components/shared"

export function BasicLayout({ children, hideSearch = false }) {
    return (
        <>
            <StatusBar backgroundColor="#16222b" barStyle="light-content" />
            {!hideSearch && <Search.input />}


            <ScrollView>{children}</ScrollView>
        </>
    )
}