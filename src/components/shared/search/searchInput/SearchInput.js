// import React, { useState } from 'react'
// import { View, Animated, Keyboard } from 'react-native'
// import { Searchbar } from "react-native-paper"
// import { SearchHistory } from "../searchHistory"
// import { AnimatedIcon, searchAnimation } from "./SearchInput.animation"
// import { style } from "./SearchInput.styles"

// export function SearchInput() {
//     const [containerHeight, setContainerHeight] = useState(0)
//     const [openHistory, setOpenHistory] = useState(false)

//     const openCloseHistory = () => setOpenHistory(prevState => !prevState)

//     const openSearch = () => {
//         searchAnimation.transition.start()
//         openCloseHistory();
//     };

//     const closeSearch = () => {
//         searchAnimation.transitionReset.start()
//         Keyboard.dismiss();
//         openCloseHistory();
//     }
//     return (
//         <View
//             style={style.container}
//             onLayout={(event) => setContainerHeight(event.nativeEvent.layout.height)}
//         >
//             <View style={style.containerInput}>
//                 <AnimatedIcon
//                     name="arrow-left"
//                     size={20}
//                     style={[style.backArrow, searchAnimation.arrow]}
//                     onPress={closeSearch}
//                 />
//                 <Animated.View style={[searchAnimation.input, { width: searchAnimation.inputWidth }]}>
//                     <Searchbar
//                         placeholder='Buscar'
//                         style={[style.searchBar]}
//                         autoCapitalize='none'
//                         onFocus={openSearch}
//                     />
//                 </Animated.View>
//             </View>
//             <SearchHistory open={openHistory} height={300} onSearch={() => "Volver a buscar"} />
//         </View>
//     )
// }

import React, { useState, useRef } from 'react';
import { View, Animated, Keyboard } from 'react-native';
import { Searchbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native"
import { searchHistoryCtrl } from "../../../../api"
import { useSearch } from "../../../../hooks"
import { screenName } from "../../../../utils"
import { SearchHistory } from "../searchHistory";
import { AnimatedIcon, searchAnimation } from "./SearchInput.animation";
import { style } from "./SearchInput.styles";

export function SearchInput() {
    const [openHistory, setOpenHistory] = useState(false);
    const [containerHeight, setContainerHeight] = useState(50); // Altura inicial del contenedor

    const { searchText, setSearchText } = useSearch()
    const navigation = useNavigation();


    const containerHeightRef = useRef(new Animated.Value(containerHeight)).current;

    const openCloseHistory = () => setOpenHistory(prevState => !prevState);

    const openSearch = () => {
        Animated.timing(containerHeightRef, {
            toValue: 100, // Ajusta esta altura según el tamaño deseado
            duration: 300,
            useNativeDriver: false,
        }).start();
        searchAnimation.transition.start();
        openCloseHistory();
    };

    const closeSearch = () => {
        Animated.timing(containerHeightRef, {
            toValue: containerHeight, // Vuelve a la altura inicial
            duration: 300,
            useNativeDriver: false,
        }).start();
        searchAnimation.transitionReset.start();
        Keyboard.dismiss();
        openCloseHistory();
    };

    const onSearch = async (reuseSearch) => {
        const isReuse = typeof reuseSearch === "string";
        if (!isReuse) {
            await searchHistoryCtrl.update(searchText)
        }

        closeSearch();
        navigation.navigate(screenName.home.search)
    }


    return (
        <View
            style={style.container}
            onLayout={(event) => setContainerHeight(event.nativeEvent.layout.height)}
        >
            <View style={[style.containerInput]}>
                <AnimatedIcon
                    name="arrow-left"
                    size={20}
                    style={[style.backArrow, searchAnimation.arrow]}
                    onPress={closeSearch}
                />
                <Animated.View style={[searchAnimation.input, { width: searchAnimation.inputWidth }]}>
                    <Searchbar
                        placeholder="Buscar"
                        style={style.searchBar}
                        autoCapitalize="none"
                        onFocus={openSearch}
                        value={searchText}
                        onChangeText={setSearchText}
                        onSubmitEditing={onSearch}
                    />
                </Animated.View>
            </View>
            {openHistory && (
                <SearchHistory
                    open={openHistory}
                    height={containerHeight}
                    onSearch={onSearch}
                />
            )}
        </View>
    );
}











