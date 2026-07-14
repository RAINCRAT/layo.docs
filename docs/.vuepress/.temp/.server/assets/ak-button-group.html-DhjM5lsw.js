import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.CUmwmF0R.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_demo_block_color = resolveComponent("demo-block-color");
  const _component_demo_button_group = resolveComponent("demo-button-group");
  const _component_demo_button_group_action = resolveComponent("demo-button-group-action");
  const _component_demo_button_group_with_small = resolveComponent("demo-button-group-with-small");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ak-button-group-按钮组" tabindex="-1"><a class="header-anchor" href="#ak-button-group-按钮组"><span>ak-button-group 按钮组</span></a></h1><h2 id="寻访" tabindex="-1"><a class="header-anchor" href="#寻访"><span>寻访</span></a></h2>`);
  _push(ssrRenderComponent(_component_demo_block_color, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo_button_group, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_demo_button_group)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p>&lt;&lt;&lt; @/.vuepress/components/demo/button-group.vue</p><h2 id="招募" tabindex="-1"><a class="header-anchor" href="#招募"><span>招募</span></a></h2><ul><li><code>--button-group-bgcolor</code>：按钮组背景色</li></ul>`);
  _push(ssrRenderComponent(_component_demo_block_color, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo_button_group_action, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_demo_button_group_action)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p>&lt;&lt;&lt; @/.vuepress/components/demo/button-group-action.vue</p><h2 id="基建" tabindex="-1"><a class="header-anchor" href="#基建"><span>基建</span></a></h2>`);
  _push(ssrRenderComponent(_component_demo_block_color, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo_button_group_with_small, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_demo_button_group_with_small)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p>&lt;&lt;&lt; @/.vuepress/components/demo/button-group/with-small.vue</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/components/ak-button-group.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const akButtonGroup_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/components/ak-button-group.html","title":"ak-button-group 按钮组","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"寻访","slug":"寻访","link":"#寻访","children":[]},{"level":2,"title":"招募","slug":"招募","link":"#招募","children":[]},{"level":2,"title":"基建","slug":"基建","link":"#基建","children":[]}],"git":{},"filePathRelative":"components/ak-button-group.md"}');
export {
  akButtonGroup_html as comp,
  data
};
