<template>
    <div id="app">
        Value: {{ value }}
    </div>
</template>

<script>
import { useCounterStore } from './stores/counter'
import { mapStores } from 'pinia'

export default {
    name: 'App',
    computed: {
        ...mapStores(useCounterStore),
        value () {
            return this.counter_store.count // Will work as: this.counterStore.count
        }
    }
}
</script>
