import { e as defineNuxtRouteMiddleware, f as abortNavigation, a as navigateTo } from './server.mjs';
import 'vue';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const excludeRoute = defineNuxtRouteMiddleware((to, from) => {
  const excludeRoutes = [
    // TODO: add the routes you want to exclude here
  ];
  if (excludeRoutes.includes(to.name)) {
    return abortNavigation();
  }
  return navigateTo("/");
});

export { excludeRoute as default };
//# sourceMappingURL=exclude-route-DCzyo_GV.mjs.map
