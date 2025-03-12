import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import '../src/style.css'
import 'typeface-poppins';
import VueCookies from 'vue-cookies';
import { createPinia } from "pinia"; // Import Pinia

import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import router from './router';
const pinia = createPinia(); // Create Pinia instance

const app = createApp(App);
app.use(store);
app.use(Toast);
app.use(VueCookies);
app.use(pinia); // Register Pinia before using stores

app.use(router);
app.mount('#app');
