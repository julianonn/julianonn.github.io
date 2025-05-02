import { createApp } from 'vue';
import App from './App.vue';
import Navbar from './components/Navbar.vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './style.css';

const app = createApp(App);

// Register Navbar globally
app.component('Navbar', Navbar);

app.mount('#app');
