import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.CUmwmF0R.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ak-helper" tabindex="-1"><a class="header-anchor" href="#ak-helper"><span>ak-helper</span></a></h1><table><thead><tr><th>Class</th><th>Description</th></tr></thead><tbody><tr><td>.drop-shadow</td><td></td></tr><tr><td>.text-shadow</td><td></td></tr><tr><td>.ak-font-serif</td><td></td></tr><tr><td>.ak-font-sans-serif</td><td></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/components/ak-helper.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const akHelper_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/components/ak-helper.html","title":"ak-helper","lang":"zh-CN","frontmatter":{},"headers":[],"git":{},"filePathRelative":"components/ak-helper.md"}');
export {
  akHelper_html as comp,
  data
};
