import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import '../src/style.css'
import 'typeface-poppins';
import VueCookies from 'vue-cookies';

import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const app = createApp(App);
app.use(store);
app.use(Toast);
app.use(VueCookies);

app.use(router);
app.mount('#app');
