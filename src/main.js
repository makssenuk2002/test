import { createApp } from 'vue'; // Import createApp from Vue 3
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import router from "@/router/router";
import './assets/style.less'
library.add(faFacebookF, faInstagram,faTwitter,faCartShopping);

const app = createApp(App);
app.use(router);

app.component('font-awesome-icon', FontAwesomeIcon); // Use app.component to register the component
app.mount('#app');
