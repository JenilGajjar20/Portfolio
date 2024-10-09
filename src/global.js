import { createApp } from "vue";
import App from "./App.vue";

import Icon from "@/components/Icon.vue";
import HLine from "@/components/HLine.vue";

// import ButtonDefault from "@/components/button/Default.vue";

// const app = createApp(App);

export function registerGlobalComponent(app) {
  app.component("Icon", Icon);
  app.component("HLine", HLine);
  // app.component("ButtonDefault", ButtonDefault);

  const icons = import.meta.glob("@/components/icons/*.vue");
  for (const path in icons) {
    const pathSplit = path.split("/");
    const name = pathSplit[pathSplit.length - 1].split(".")[0];
    app.component("Icons" + name, "Icons" + name);
  }
}
