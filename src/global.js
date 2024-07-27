import { createApp } from "vue";
import App from "./App.vue";

import Icon from "@/components/Icon.vue";

// import ButtonDefault from "@/components/button/Default.vue";

const app = createApp(App);

app.component("Icon", Icon);
// app.component("ButtonDefault", ButtonDefault);

const icons = import.meta.glob("@/components/icons/*.vue");
for (const path in icons) {
  const pathSplit = path.split("/");
  const name = pathSplit[pathSplit.length - 1].split(".")[0];
  app.component("Icons" + name, "Icons" + name);
}
