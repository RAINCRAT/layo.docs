import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.CUmwmF0R.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_demo_block = resolveComponent("demo-block");
  const _component_demo_input_number = resolveComponent("demo-input-number");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ak-form-表单" tabindex="-1"><a class="header-anchor" href="#ak-form-表单"><span>ak-form 表单</span></a></h1><h2 id="input-number" tabindex="-1"><a class="header-anchor" href="#input-number"><span>Input Number</span></a></h2>`);
  _push(ssrRenderComponent(_component_demo_block, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo_input_number, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_demo_input_number)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p>&lt;&lt;&lt; @/.vuepress/components/demo/input-number.vue</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/components/ak-form.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const akForm_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/components/ak-form.html","title":"ak-form 表单","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Input Number","slug":"input-number","link":"#input-number","children":[]}],"git":{},"filePathRelative":"components/ak-form.md"}');
export {
  akForm_html as comp,
  data
};
