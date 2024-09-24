import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import Toast from 'react-native-root-toast'
import { orderCtrl } from "../../../api"
import { useAuth, useCart } from "../../../hooks"
import { initialValues, validationSchema } from "./Payment.form"
import { globalStyles } from "../../../styles"
import { ENV, screenName } from "../../../utils"
import { style } from "./Pyment.styles"
import { size } from 'lodash'

const stripe = require("stripe-client")(ENV.STRIPE.PUBLISHABLE_KEY)


export function Pyment({ totalPayment, selectedAddress, products }) {
    const { user } = useAuth();
    const { emptyCart } = useCart();
    const navigation = useNavigation()

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                const result = await stripe.createToken({ card: formValue });

                if (result?.error) {
                    Toast.show(result.error.message, {
                        position: Toast.positions.CENTER
                    })
                } else {
                    const response = await orderCtrl.payment(result.id, user.id, products, selectedAddress)

                    if (size(response) > 0) {
                        await emptyCart();
                        navigation.navigate(screenName.account.root, {
                            screen: screenName.account.order
                        })
                    }
                }

            } catch (error) {
                Toast.show("Error al realizar el pago", {
                    position: Toast.positions.CENTER
                })
            }
        }
    });

    return (
        <ScrollView>

            <View style={style.container}>
                <Text style={style.title}>Forma de pago:</Text>

                <TextInput
                    label="Nombre del titular de la tarjeta"
                    style={globalStyles.form.input}
                    onChangeText={(text) => formik.setFieldValue("name", text)}
                    value={formik.values.name}
                    error={formik.errors.name}
                />
                <TextInput
                    label="Numero de la tarjeta"
                    style={globalStyles.form.input}
                    onChangeText={text => formik.setFieldValue("number", text)}
                    value={formik.values.number}
                    error={formik.errors.number}
                />

                <View style={style.inputGroup}>
                    <View style={style.viewMonthYearInputs}>
                        <TextInput
                            label="Mes"
                            style={style.inputDate}
                            onChangeText={text => formik.setFieldValue("exp_month", text)}
                            value={formik.values.exp_month}
                            error={formik.errors.exp_month}
                        />
                        <TextInput
                            label="Año"
                            style={style.inputDate}
                            onChangeText={text => formik.setFieldValue("exp_year", text)}
                            value={formik.values.exp_year}
                            error={formik.errors.exp_year}
                        />
                    </View>
                    <TextInput
                        label="CW/CVC"
                        style={style.inputCvc}
                        onChangeText={text => formik.setFieldValue("cvc", text)}
                        value={formik.values.cvc}
                        error={formik.errors.cvc}
                    />
                </View>
                <Button
                    mode='contained'
                    contentStyle={style.btnContent}
                    labelStyle={style.btnText}
                    onPress={formik.handleSubmit}
                    loading={formik.isSubmitting}
                >
                    Pagar $ {totalPayment && `(${totalPayment.toFixed(2)})`}
                </Button>
            </View>
        </ScrollView>
    )
}