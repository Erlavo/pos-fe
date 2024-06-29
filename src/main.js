//import createApp from Vue
import { createApp } from 'vue'

//import tailwind css
import './assets/tailwind.css'

//import component App
import App from './App.vue'

//create App Vue
const app = createApp(App)

app.mount('#app')
