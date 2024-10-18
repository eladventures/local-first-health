import { d as defineEventHandler, g as getQuery } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const sample_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  return `Hello ${query.name || "no name"}.`;
});

export { sample_get as default };
//# sourceMappingURL=sample.get.mjs.map
