import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.CUmwmF0R.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="风格指南" tabindex="-1"><a class="header-anchor" href="#风格指南"><span>风格指南</span></a></h1><h2 id="bem-命名规范" tabindex="-1"><a class="header-anchor" href="#bem-命名规范"><span>BEM 命名规范</span></a></h2><ul><li><a href="https://www.smashingmagazine.com/2012/04/a-new-front-end-methodology-bem/" target="_blank" rel="noopener noreferrer">BEM: A New Front-End Methodology</a></li><li><a href="https://juejin.im/post/5b925e616fb9a05cdd2ce70d" target="_blank" rel="noopener noreferrer">CSS — BEM 命名规范</a>：一份可以参考的中文介绍</li></ul><p>关于 BEM 命名规范的优劣也有许多讨论。命名过长是其饱受诟病的一点。</p><p>所以本项目也并非完全遵循 BEM 命名规范，而是适时使用 CSS 嵌套选择器的方式来命名。</p><h2 id="ref" tabindex="-1"><a class="header-anchor" href="#ref"><span>Ref</span></a></h2><ul><li><a href="https://material.io/collections/get-started/" target="_blank" rel="noopener noreferrer">Material Design</a></li><li><a href="https://www.microsoft.com/design/fluent/#/web" target="_blank" rel="noopener noreferrer">Fluent Design</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/guide/style.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const style_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/guide/style.html","title":"风格指南","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"BEM 命名规范","slug":"bem-命名规范","link":"#bem-命名规范","children":[]},{"level":2,"title":"Ref","slug":"ref","link":"#ref","children":[]}],"git":{},"filePathRelative":"guide/style.md"}');
export {
  style_html as comp,
  data
};
