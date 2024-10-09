import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// css
import "@/assets/scss/index.scss";

import { registerGlobalComponent } from "./global.js";

const app = createApp(App);
app.use(router);

registerGlobalComponent(app);
app.mount("#app");
