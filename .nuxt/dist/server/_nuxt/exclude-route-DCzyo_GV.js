import "vue";
import "hookable";
import { e as defineNuxtRouteMiddleware, f as abortNavigation, a as navigateTo } from "../server.mjs";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "ufo";
import "vue/server-renderer";
const excludeRoute = defineNuxtRouteMiddleware((to, from) => {
  const excludeRoutes = [
    // TODO: add the routes you want to exclude here
  ];
  if (excludeRoutes.includes(to.name)) {
    return abortNavigation();
  }
  return navigateTo("/");
});
export {
  excludeRoute as default
};
//# sourceMappingURL=exclude-route-DCzyo_GV.js.map
