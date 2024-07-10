import './assets/main.css';
import 'primevue/resources/themes/lara-light-teal/theme.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Tooltip from 'primevue/tooltip';

import App from './App.vue';
import router from './router';

const app = createApp(App);

// Add Pinia
const pinia = createPinia();
app.use(pinia);

// Add Router
app.use(router);

// Add PrimeVue directives
app.use(PrimeVue);
app.use(ToastService);
app.directive('tooltip', Tooltip);

app.mount('#app')