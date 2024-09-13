import React, { useState } from 'react';
import { View, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { LoginForm, RegisterForm } from "../../../components/Auth";
import logo from "../../../../assets/logo3.png";
import { style } from "./AuthScreen.style";

export function AuthScreen() {

    const [showLogin, setshowLogin] = useState(true);

    const onShowLoginRegister = () => setshowLogin((prevState) => !prevState);

    return (
        <View style={style.container}>
            <Image source={logo} style={style.logo} />

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                    {showLogin ? (
                        <LoginForm showRegister={onShowLoginRegister} />
                    ) : (
                        <RegisterForm showLogin={onShowLoginRegister} />
                    )}
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
}
