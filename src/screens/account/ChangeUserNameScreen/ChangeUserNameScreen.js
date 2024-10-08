import React from 'react'
import { View } from 'react-native'
import { TextInput, Button } from "react-native-paper"
import { useNavigation } from "@react-navigation/native"
import { useFormik } from "formik"
import Toast from 'react-native-root-toast'
import { userCtrl } from "../../../api"
import { useAuth } from "../../../hooks"
import { globalStyles } from "../../../styles"
import { initialValues, validationSchema } from "./ChangeUserNameScreen.form"
import { style } from "./ChangeUserNameScreen.styles"
import { form } from '../../../styles/form'

export function ChangeUserNameScreen() {
    const { user, updateUser } = useAuth();
    const navigation = useNavigation();

    const formik = useFormik({
        initialValues: initialValues(user.username),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                await userCtrl.update(user.id, formValue);
                updateUser("username", formValue.username);
                navigation.goBack();
            } catch (error) {
                Toast.show("Error al cambiar nombre de usuario", {
                    position: Toast.positions.CENTER
                })
            }
        }
    });
    return (
        <View style={style.container}>
            <TextInput
                label="Nombre de usuario"
                style={globalStyles.form.input}
                onChangeText={(text) => formik.setFieldValue("username", text)}
                value={formik.values.username}
                error={formik.errors.username}
            />
            <Button
                mode='contained'
                style={globalStyles.form.btnSubmit}
                onPress={formik.handleSubmit}
                loading={formik.isSubmitting}
            >Cambiar nombre de usuario</Button>
        </View>
    )
}