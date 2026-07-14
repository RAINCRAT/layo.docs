import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.CUmwmF0R.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "text-align": "center" })}"><a class="ak-button--start" href="/guide/"><div class="icon triangle-right"></div><div class="label">START</div></a></div><p class="ak-card ak-card--outline"> - 易用：复制粘贴，一气呵成。（无需任何框架） - 定制：色彩变量，任意覆盖。 - 原生：HTML 为父，CSS 为母。 - 拆分：细粒拆分，独立样式。 <p>等我之后再写这里的样式，咕咕咕。</p></p><blockquote><p>Doctor，您还有许多事情需要处理。现在还不能休息哦。</p></blockquote></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/","title":"主页","lang":"zh-CN","frontmatter":{"home":true,"heroImage":"/ak.svg","heroText":"ak-ui","tagline":"Arknights UI Framework","footer":"MIT Licensed | Copyright © YunYouJun","title":"主页"},"headers":[],"git":{},"filePathRelative":"README.md"}');
export {
  index_html as comp,
  data
};
