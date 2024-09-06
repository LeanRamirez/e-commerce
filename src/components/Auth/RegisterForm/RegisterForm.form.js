import * as Yup from "yup"

export function initialValues() {
    return {
        email: "",
        userName: "",
        password: "",
        repeatPassword: "",
    }
}

export function validationSchema() {
    return Yup.object({
        email: Yup.string().email(true).required(true),
        userName: Yup.string().required(true),
        password: Yup.string().required(true),
        repeatPassword: Yup.string().required(true).oneOf([Yup.ref("password")], true),
    })
}