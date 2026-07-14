import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.CUmwmF0R.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ak-icon-图标" tabindex="-1"><a class="header-anchor" href="#ak-icon-图标"><span>ak-icon 图标</span></a></h1><p>当前使用 <a href="https://www.iconfont.cn/" target="_blank" rel="noopener noreferrer">Iconfont</a> 平台上提供的图标。</p><h2 id="ak-icon-stuff-材料" tabindex="-1"><a class="header-anchor" href="#ak-icon-stuff-材料"><span>ak-icon--stuff 材料</span></a></h2><ul><li><code>--icon-border-color</code>: 图标边颜色</li></ul><div class="ak-icon--stuff"><svg class="ak-icon" aria-hidden="true" style="${ssrRenderStyle({ "color": "#d8dd5a" })}"><use xlink:href="#icon-money-cny-box-fill"></use></svg></div><div class="ak-icon--stuff"><svg class="ak-icon" aria-hidden="true" style="${ssrRenderStyle({ "color": "#d8dd5a" })}"><use xlink:href="#icon-vip-diamond-fill"></use></svg></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/components/ak-icon.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const akIcon_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/components/ak-icon.html","title":"ak-icon 图标","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"ak-icon--stuff 材料","slug":"ak-icon-stuff-材料","link":"#ak-icon-stuff-材料","children":[]}],"git":{},"filePathRelative":"components/ak-icon.md"}');
export {
  akIcon_html as comp,
  data
};
