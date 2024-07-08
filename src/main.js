//import createApp from Vue
import { createApp } from 'vue'

//import tailwind css
import './assets/tailwind.css'

//import component App
import App from './App.vue'

//import config router
import router from './router'

/* import the fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

//create App Vue
const app = createApp(App)

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
