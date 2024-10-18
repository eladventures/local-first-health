import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
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
  data() {
    return {
      email: "",
      name: "",
      phone: ""
    };
  },
  methods: {
    async submitWaitlist() {
      const waitlist2 = "cm1jwce7800021ixb7aibkzaz";
      const email = this.email;
      const name = this.name || "";
      const phone = this.phone || "";
      const referredBy = "";
      const metadata = {};
      try {
        const response = await fetch(
          "https://www.waitlist.email/api/subscribers/create",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              waitlist: waitlist2,
              email,
              name,
              phone,
              referredBy,
              metadata
            })
          }
        );
        const body = await response.json();
        if (!response.ok) {
          throw new Error(body.message);
        }
        alert("You have been subscribed!");
      } catch (error) {
        alert(`Error: ${error.message}`);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "waitlist-page" }, _attrs))} data-v-63722990><h1 data-v-63722990>Join Our Waitlist</h1><form data-v-63722990><label for="email" data-v-63722990>Email:</label><input${ssrRenderAttr("value", $data.email)} type="email" id="email" required data-v-63722990><label for="name" data-v-63722990>Name:</label><input${ssrRenderAttr("value", $data.name)} type="text" id="name" data-v-63722990><label for="phone" data-v-63722990>Phone:</label><input${ssrRenderAttr("value", $data.phone)} type="text" id="phone" data-v-63722990><button type="submit" data-v-63722990>Join Waitlist</button></form></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/waitlist.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const waitlist = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-63722990"]]);
export {
  waitlist as default
};
//# sourceMappingURL=waitlist-BgLUXHz-.js.map
