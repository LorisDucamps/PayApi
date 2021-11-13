import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VeeValidatePlugin from './includes/validation';
import BaseButton from './components/BaseButton.vue';


const app = createApp(App)

app.use(router);
app.use(VeeValidatePlugin);
app.component('BaseButton', BaseButton);
app.mount('#app');
