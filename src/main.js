import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// css
import "@/assets/scss/index.scss";

// import "./global.js";

const app = createApp(App);

app.use(router);

app.mount("#app");
