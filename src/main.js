import App from './App'
import { createApp } from 'vue'

import { setMapStoreSuffix } from 'pinia'

setMapStoreSuffix('_store')

import { pinia } from './pinia'

createApp(App)
    .use(pinia)
    .mount('#app')
