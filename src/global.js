import { createApp } from "vue";
import App from "./App.vue";

import Icon from "@/components/Icon.vue";

// import ButtonDefault from "@/components/button/Default.vue";

const app = createApp(App);

app.component("Icon", Icon);
// app.component("ButtonDefault", ButtonDefault);

const icons = import.meta.glob("@/components/icons/*.vue");
console.log("Icons==> ", icons);
for (const path in icons) {
  console.log("Path==> ", path);
  const pathSplit = path.split("/");
  console.log("Path Split==> ", pathSplit);
  const name = pathSplit[pathSplit.length - 1].split(".")[0];
  console.log("Name==> ", name);
  app.component("Icons" + name, "Icons" + name);
}
