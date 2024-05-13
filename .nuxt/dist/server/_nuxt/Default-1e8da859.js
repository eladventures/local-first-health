import { ref, watch, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "destr";
import "defu";
import "klona";
import "devalue";
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
  _push(`<div${ssrRenderAttrs(mergeProps({
    "data-theme": $setup.theme,
    class: "bg-white"
  }, _attrs))}><div class="container flex justify-between items-center h-12 mx-auto"><div class="flex items-center"><ul class="items-stretch hidden space-x-3 lg:flex ml-20 mt-2"><li class="flex"><a rel="noopener noreferrer" href="#true-privacy" class="flex items-center px-4 -mb-1 dark:border-transparent">True Privacy</a></li><li class="flex"><a rel="noopener noreferrer" href="#challenges" class="flex items-center px-4 -mb-1 dark:border-transparent dark:text-default-400 dark:border-default-400">Current Challenges</a></li><li class="flex"><a rel="noopener noreferrer" href="#actions" class="flex items-center px-4 -mb-1 dark:border-transparent dark:text-default-400 dark:border-default-400">Actions</a></li><li class="flex"><a rel="noopener noreferrer" href="#local-first" class="flex items-center px-4 -mb-1 dark:border-transparent">What is Local-First</a></li><li class="flex"><a rel="noopener noreferrer" href="#papaya-sdk" class="flex items-center px-4 -mb-1 dark:border-transparent">Papaya SDK</a></li><li class="flex"><a rel="noopener noreferrer" href="#health-suite" class="flex items-center px-4 -mb-1 dark:border-transparent">Health Suite</a></li><li class="flex"><a rel="noopener noreferrer" href="#mission" class="flex items-center px-4 -mb-1 dark:border-transparent">Mission</a></li><li class="flex"><a rel="noopener noreferrer" href="#our-story" class="flex items-center px-4 -mb-1 dark:border-transparent">Our Story</a></li></ul></div><div class="items-center flex-shrink-0 hidden lg:flex"><a href="/easyjoey-paper.pdf" target="_blank" rel="noopener noreferrer" class="inline-block px-4 py-2 mt-5 font-semibold rounded bg-teal-600 text-white text-sm"> Read Whitepaper </a></div></div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/Default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Default as default
};
//# sourceMappingURL=Default-1e8da859.js.map
