//import createApp from Vue
import { createApp } from "vue";

//import component App
import App from "./App.vue";
import "./index.css";

//create App Vue
const app = createApp(App);

app.mount("#app");
