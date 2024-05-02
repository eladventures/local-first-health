import { d as defineNuxtRouteMiddleware, e as abortNavigation, b as navigateTo } from '../server.mjs';
import 'vue';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue/server-renderer';

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
//# sourceMappingURL=exclude-route-0b62616c.mjs.map
