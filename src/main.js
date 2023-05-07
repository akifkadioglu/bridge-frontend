import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { RouteName } from './router/routes'
import { storage } from './storage'

import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


//icons
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure your project is capable of handling css files
import { aliases, md } from 'vuetify/iconsets/md'
const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'md',
        aliases,
        sets: {
            md,
        },
    },
})

const app = createApp(App)
app.config.globalProperties.$RouteName = RouteName
app.config.globalProperties.$storage = storage
app
    .use(createPinia())
    .use(router)
    .use(vuetify)
    .mount('#app')
