import { screenName } from "../../../utils"

export const accountMenu = [
    {
        title: "Cambiar nombre y apellido",
        description: "Actualiza el nombre y apellido de tu cuenta",
        leftIcon: "emoticon-excited-outline",
        screen: screenName.account.changeName
    },
    {
        title: "Cambiar email",
        description: "Actualiza tu email",
        leftIcon: "at",
        screen: screenName.account.changeEmail
    },
    {
        title: "Cambiar nombre de usuario",
        description: "Actualiza tu nombre de usuario",
        leftIcon: "card-account-details-outline",
        screen: screenName.account.changeUserName
    },
    {
        title: "Cambia tu contraseña",
        description: "Actualiza tu contraseña",
        leftIcon: "key-outline",
        screen: screenName.account.changePassword
    },
]

export const appMenu = [
    {
        title: "Pedidos",
        description: "Lista de todas los pedidos",
        leftIcon: "order-bool-descending-variant",
        screen: screenName.account.orders
    },
    {
        title: "Mis direcciones",
        description: "Administra tus direcciones de envio",
        leftIcon: "emoticon-excited-outline",
        screen: screenName.account.addresses
    },
    {
        title: "Lista de deseos",
        description: "Lista de todas los productos que quieres comprar",
        leftIcon: "heart-outline",
        screen: screenName.wishList.root
    },
]