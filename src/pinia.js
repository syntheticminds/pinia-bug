import { createPinia, setMapStoreSuffix } from 'pinia'

setMapStoreSuffix('_store')

export const pinia = createPinia()
