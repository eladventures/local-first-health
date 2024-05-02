import { d as defineNuxtRouteMiddleware, e as abortNavigation, b as navigateTo } from "../server.mjs";
import "vue";
import "hookable";
import "destr";
import "devalue";
import "defu";
import "klona";
import "#internal/nitro";
import "ofetch";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
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
//# sourceMappingURL=exclude-route-0b62616c.js.map
