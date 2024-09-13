import React from 'react'
import { View, KeyboardAvoidingView, Platform } from 'react-native'
import { TextInput, Button } from "react-native-paper"
import { useFormik } from "formik"
import Toast from 'react-native-root-toast'
import { initialValues, validationSchema } from "./RegisterForm.form"
import { authCtrl } from "../../../api"
import { globalStyles } from "../../../styles"


export function RegisterForm({ showLogin }) {

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),


        validateOnChange: false,
        onSubmit: async (formValue) => {

            try {
                const { email, userName, password } = formValue;
                await authCtrl.register(email, userName, password);
                showLogin();
            } catch (error) {
                Toast.show("Error al registrar usuario", {
                    position: Toast.positions.CENTER
                })
            }
        }
    });
    return (
        <KeyboardAvoidingView

        >

            <View>
                <TextInput
                    label="Correo electronico"
                    style={globalStyles.form.input}
                    autoCapitalize='none'
                    onChangeText={(text) => formik.setFieldValue("email", text)}
                    value={formik.values.email}
                    error={formik.errors.email}
                />
                <TextInput
                    label="Nombre de usuario"
                    style={globalStyles.form.input}
                    autoCapitalize='none'
                    onChangeText={(text) => formik.setFieldValue("userName", text)}
                    value={formik.values.userName}
                    error={formik.errors.userName}
                />
                <TextInput
                    label="Contraseña"
                    style={globalStyles.form.input}
                    secureTextEntry
                    onChangeText={(text) => formik.setFieldValue("password", text)}
                    value={formik.values.password}
                    error={formik.values.password}

                />
                <TextInput
                    label="Repetir contraseña"
                    style={globalStyles.form.input}
                    secureTextEntry
                    onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
                    value={formik.values.repeatPassword}
                    error={formik.errors.repeatPassword}
                />

                <Button
                    mode='contained'
                    style={globalStyles.form.btnSubmit}
                    labelStyle={{ color: "#fff" }}
                    onPress={formik.handleSubmit}
                    loading={formik.isSubmitting}
                >
                    Registrarse
                </Button>
                <Button
                    mode='text'
                    style={globalStyles.form.btnText}
                    labelStyle={globalStyles.form.btnTextLabel}
                    onPress={showLogin}
                >
                    Iniciar sesión
                </Button>
            </View>
        </KeyboardAvoidingView>
    )
}


// import React from 'react';
// import { View, KeyboardAvoidingView, Platform } from 'react-native';
// import { TextInput, Button } from "react-native-paper";
// import { useFormik } from "formik";
// import Toast from 'react-native-root-toast';
// import { initialValues, validationSchema } from "../LoginForm/LoginForm.form";
// import { authCtrl } from "../../../api";
// import { globalStyles } from "../../../styles";

// export function LoginForm({ showRegister }) {
//     const formik = useFormik({
//         initialValues: initialValues(),
//         validationSchema: validationSchema(),
//         validateOnChange: false,
//         onSubmit: async (formValue) => {
//             try {
//                 const { email, password } = formValue;
//                 const response = await authCtrl.login(email, password);
//                 console.log(response);
//             } catch (error) {
//                 Toast.show("Usuario o contraseña incorrectos", {
//                     position: Toast.positions.CENTER,
//                 });
//             }
//         }
//     });

//     return (
//         <KeyboardAvoidingView
//             style={{ flex: 1 }}
//             behavior={Platform.OS === "ios" ? "padding" : "height"}
//             keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
//         >
//             <View style={{ flex: 1 }}>
//                 <TextInput
//                     label="Correo electronico"
//                     style={globalStyles.form.input}
//                     autoCapitalize='none'
//                     onChangeText={(text) => formik.setFieldValue("email", text)}
//                     value={formik.values.email}
//                     error={formik.errors.email}
//                 />
//                 <TextInput
//                     label="Contraseña"
//                     style={globalStyles.form.input}
//                     secureTextEntry
//                     onChangeText={(text) => formik.setFieldValue("password", text)}
//                     value={formik.values.password}
//                     error={formik.errors.password}
//                 />
//                 <Button
//                     mode='contained'
//                     style={globalStyles.form.btnSubmit}
//                     onPress={formik.handleSubmit}
//                     loading={formik.isSubmitting}
//                 >
//                     Entrar
//                 </Button>
//                 <Button
//                     mode='text'
//                     style={globalStyles.form.btnText}
//                     labelStyle={globalStyles.form.btnTextLabel}
//                     onPress={showRegister}
//                 >
//                     Registrarse
//                 </Button>
//             </View>
//         </KeyboardAvoidingView>
//     );
// }
