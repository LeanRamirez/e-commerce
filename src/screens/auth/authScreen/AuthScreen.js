import React, { useState } from 'react'
import { View, Image, KeyboardAvoidingView, Platform } from 'react-native'
import { LoginForm, RegisterForm } from "../../../components/Auth"
import logo from "../../../../assets/logo3.png"
import { style } from "./AuthScreen.style"

export function AuthScreen() {

    const [showLogin, setshowLogin] = useState(false)

    const onShowLoginRegister = () => setshowLogin((prevState) => !prevState)

    return (
        <View style={style.container}>
            <Image source={logo} style={style.logo} />
            <KeyboardAvoidingView behavior={Platform.os === "ios" ? "padding" : "height"}>
                {showLogin ? <LoginForm /> : <RegisterForm showLogin={onShowLoginRegister} />}
            </KeyboardAvoidingView>
        </View>
    )
}