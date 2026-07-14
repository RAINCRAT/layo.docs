import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.CUmwmF0R.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_demo_block_dust = resolveComponent("demo-block-dust");
  const _component_demo_panel = resolveComponent("demo-panel");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ak-panel-面板" tabindex="-1"><a class="header-anchor" href="#ak-panel-面板"><span>ak-panel 面板</span></a></h1><h2 id="ak-status-状态栏" tabindex="-1"><a class="header-anchor" href="#ak-status-状态栏"><span>ak-status 状态栏</span></a></h2>`);
  _push(ssrRenderComponent(_component_demo_block_dust, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo_panel, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_demo_panel)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/components/ak-panel.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const akPanel_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/components/ak-panel.html","title":"ak-panel 面板","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"ak-status 状态栏","slug":"ak-status-状态栏","link":"#ak-status-状态栏","children":[]}],"git":{},"filePathRelative":"components/ak-panel.md"}');
export {
  akPanel_html as comp,
  data
};
