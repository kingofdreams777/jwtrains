// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    app: {
        head: {
            title: 'JWTrains'
        }
    },

    modules: [
        "@nuxt/image"
    ],

    runtimeConfig: {
        turso: {
            dbUrl: '',
            dbAuthToken: ''
        }
    }
})
