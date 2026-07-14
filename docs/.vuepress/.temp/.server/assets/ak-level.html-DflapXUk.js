import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.CUmwmF0R.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_demo_block_dust = resolveComponent("demo-block-dust");
  const _component_demo_level = resolveComponent("demo-level");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ak-level-关卡" tabindex="-1"><a class="header-anchor" href="#ak-level-关卡"><span>ak-level 关卡</span></a></h1><ul><li><code>--level-label-text</code>: 头部标签文本</li><li><code>--level-label-bgcolor</code>: 头部标签背景色</li><li><code>--level-prefix-icon-color</code>: 前缀图标颜色</li></ul>`);
  _push(ssrRenderComponent(_component_demo_block_dust, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo_level, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_demo_level)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p>&lt;&lt;&lt; @/.vuepress/components/demo/level.vue</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/components/ak-level.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const akLevel_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/components/ak-level.html","title":"ak-level 关卡","lang":"zh-CN","frontmatter":{},"headers":[],"git":{},"filePathRelative":"components/ak-level.md"}');
export {
  akLevel_html as comp,
  data
};
