import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { ref, watch, useSSRContext } from 'vue';
import { ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0 = "" + buildAssetsURL("local-first-health-logo-location-black.CH7TQvND.png");
const THEMES = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter"
];
const _sfc_main = {
  setup() {
    const theme = ref(null);
    watch(theme, (value) => {
      localStorage.setItem("daisyui-theme", value);
    });
    return {
      theme,
      themes: THEMES
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><div${ssrRenderAttr("data-theme", $setup.theme)} class="fixed top-0 z-50 w-full bg-white"><div class="container flex items-center justify-between h-16 mx-auto max-w-7xl"><div class="flex items-center"><a rel="noopener noreferrer" href="#" aria-label="Back to homepage" class="flex items-center p-2"><img${ssrRenderAttr("src", _imports_0)} alt="Your Logo" class="object-contain w-auto h-12 mt-3 dark:text-default-400"><p class="mt-4 ml-3 text-xl text-stone-600"><b>Local First Health</b></p></a><ul class="items-stretch hidden mt-4 ml-20 space-x-3 lg:flex"><li class="flex"><a rel="noopener noreferrer" href="#cloud" class="flex items-center px-4 -mb-1 dark:border-transparent">Cloud Problem</a></li><li class="flex"><a rel="noopener noreferrer" href="#local-first" class="flex items-center px-4 -mb-1 dark:border-transparent dark:text-default-400 dark:border-default-400">Local-First</a></li><li class="flex"><a rel="noopener noreferrer" href="#local-first-health" class="flex items-center px-4 -mb-1 dark:border-transparent dark:text-default-400 dark:border-default-400">Local First Health</a></li><li class="flex"><a rel="noopener noreferrer" href="#health-suite" class="flex items-center px-4 -mb-1 dark:border-transparent dark:text-default-400 dark:border-default-400">Health Suite</a></li><li class="flex"><a rel="noopener noreferrer" href="#our-story" class="flex items-center px-4 -mb-1 dark:border-transparent dark:text-default-400 dark:border-default-400">Our Story</a></li></ul></div><div class="items-center flex-shrink-0 hidden lg:flex"><a href="/local-first-paper.pdf" target="_blank" rel="noopener noreferrer" class="inline-block px-4 py-2 mt-4 text-sm font-semibold text-gray-800 bg-transparent border border-gray-800 rounded"> Read Whitepaper </a></div></div></div><div class="pt-16">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/Default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Default as default };
//# sourceMappingURL=Default-BZegKAeJ.mjs.map
