export const ENV = {
    API_URL: "http://192.168.0.10:1337/api",
    ENDPOINTS: {
        REGISTER: "auth/local/register",
        LOGIN: "auth/local",
        USERS_ME: "users/me",
        USERS: "users",
        ADDRESSES: "addresses",
        HOME_BANNERS: "home-banners",
        PRODUCTS: "products",
        WISHLISTS: "wish-lists",
        PAYMENT_ORDER: "payment-order",
    },
    STORAGE: {
        TOKEN: "token",
        SEARCH_HISTORY: "search-history",
        CART: "cart"
    },
    STRIPE: {
        PUBLISHABLE_KEY: "pk_test_51PtEkLB1uf8gCR6m7Pue1dMPsTbAXUTXqasvvxK6J85mFDZ7qy1AOou34qy49hnXPrxYRDslrf6Pp7eeb5D9GmG400IECNnYa2"
    }
}