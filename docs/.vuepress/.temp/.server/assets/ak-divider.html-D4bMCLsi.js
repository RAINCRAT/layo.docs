import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.CUmwmF0R.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_demo_block_dust = resolveComponent("demo-block-dust");
  const _component_demo_divider = resolveComponent("demo-divider");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ak-divider-分割线" tabindex="-1"><a class="header-anchor" href="#ak-divider-分割线"><span>ak-divider 分割线</span></a></h1>`);
  _push(ssrRenderComponent(_component_demo_block_dust, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo_divider, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_demo_divider)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/components/ak-divider.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const akDivider_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/components/ak-divider.html","title":"ak-divider 分割线","lang":"zh-CN","frontmatter":{},"headers":[],"git":{},"filePathRelative":"components/ak-divider.md"}');
export {
  akDivider_html as comp,
  data
};
