# Issue with setMapStoreSuffix()

`setMapStoreSuffix('_store')` doesn't seem to work in this environment.

Open *dist/index.html* and observe the error. Using `this.counter_store.count` in *src/App.vue* shows that the default is still being used.

To recompile: `npm run build`
