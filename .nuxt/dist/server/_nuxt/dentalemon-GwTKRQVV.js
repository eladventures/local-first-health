import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
const _sfc_main = {
  head() {
    return {
      title: "Dental Page"
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container py-10 mx-auto" }, _attrs))} data-v-8e1987dc><h1 class="text-3xl font-bold" data-v-8e1987dc>Welcome to Dental Page</h1><p data-v-8e1987dc>This is the Dentalemon page content.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dentalemon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dentalemon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8e1987dc"]]);
export {
  dentalemon as default
};
//# sourceMappingURL=dentalemon-GwTKRQVV.js.map
