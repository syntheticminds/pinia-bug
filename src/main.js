import App from './App'
import { createApp } from 'vue'

import { pinia } from './pinia'

createApp(App)
    .use(pinia)
    .mount('#app')
