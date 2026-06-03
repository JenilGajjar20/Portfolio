import Icon from "@/components/Icon.vue";
import HLine from "@/components/HLine.vue";

export function registerGlobalComponent(app) {
  app.component("Icon", Icon);
  app.component("HLine", HLine);

  const icons = import.meta.glob("@/components/icons/*.vue");
  for (const path in icons) {
    const pathSplit = path.split("/");
    const name = pathSplit[pathSplit.length - 1].split(".")[0];
    app.component("Icons" + name, "Icons" + name);
  }

  const observer =
    typeof window !== "undefined"
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("reveal-in");
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.16 }
        )
      : null;

  app.directive("reveal", {
    mounted(el, binding) {
      el.classList.add("revealable");
      if (binding.value) {
        el.style.setProperty("--reveal-delay", binding.value);
      }
      observer?.observe(el);
    },
  });
}
