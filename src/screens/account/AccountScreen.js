import React from 'react'
import { Layout } from "../../layouts"
import { UserInfo, Menu } from "../../components/account"

export function AccountScreen() {
    return (
        <Layout.Basic  >
            <UserInfo />
            <Menu />
        </Layout.Basic>
    )
}