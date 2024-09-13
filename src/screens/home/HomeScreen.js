import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { Button } from "react-native-paper";
import { useAuth } from "../../hooks";

export function HomeScreen() {
    const { logOut } = useAuth();

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <Text>HomeScreen</Text>
                <Button onPress={logOut}>Cerrar sesión</Button>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
