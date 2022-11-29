import 'Bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';

// import './assets/main.css';

// createApp(App).mount('#app');
const app = createApp(App);
app.provide('app-message', 'app message');
app.config.globalProperties.msg = 'hello';
app.provide('msg', 'hello msg');
app.mount('#app');
// app.component('AppCard', AppCard);

import 'bootstrap/dist/js/bootstrap.js';
