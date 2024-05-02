import { d as defineEventHandler, g as getQuery } from './nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const sample_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  return `Hello ${query.name || "no name"}.`;
});

export { sample_get as default };
//# sourceMappingURL=sample.get.mjs.map
