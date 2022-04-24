import '../css/app.css';

import(/* webpackChunkName: "myModule", webpackPrefetch: true */ './dynamic_import').then(module => module.default());

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

console.log('Hello from app.js');