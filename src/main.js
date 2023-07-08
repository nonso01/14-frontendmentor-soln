import { createApp } from "vue";
import "./scss/main.css";
import App from "./App.vue";

import eruda from "eruda";
eruda.init();

createApp(App).mount("#app");
