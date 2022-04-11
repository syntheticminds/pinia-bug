let mix = require('laravel-mix');

mix.js('src/main.js', 'dist/main.js').vue();
mix.copy('src/index.html', 'dist');
