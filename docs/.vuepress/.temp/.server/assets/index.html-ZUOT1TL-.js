import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.CUmwmF0R.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _imports_0 = "/img/mrfz-logo.png";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouteLink = resolveComponent("RouteLink");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="使用指南" tabindex="-1"><a class="header-anchor" href="#使用指南"><span>使用指南</span></a></h1><img${ssrRenderAttr("src", _imports_0)} style="${ssrRenderStyle({ "filter": "drop-shadow(2px 5px 10px black)" })}"><p>非官方 - 兴趣使然的 UI 组件</p><h2 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h2><p>尚未发布正式版本。</p><p>你可以选择你喜欢的方式引入。</p><p>NPM 尚未发布 Release，你可以尝试 <code>https://cdn.jsdelivr.net/gh/YunYouJun/ak-ui@gh-pages/css/ak-ui.min.css</code> 来体验新版本。</p><h3 id="by-npm-or-yarn" tabindex="-1"><a class="header-anchor" href="#by-npm-or-yarn"><span>By NPM or YARN</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token comment"># 安装</span></span>
<span class="line"><span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> @yunyoujun/ak-ui</span>
<span class="line"><span class="token comment"># or:</span></span>
<span class="line"><span class="token comment"># npm install @yunyoujun/ak-ui --save-dev</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="by-cdn" tabindex="-1"><a class="header-anchor" href="#by-cdn"><span>By CDN</span></a></h3><p>在 <code>html</code> 中引入样式文件即可。</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token comment">&lt;!-- &lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdn.jsdelivr.net/npm/@yunyoujun/ak-ui&quot; /&gt; --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span></span>
<span class="line">  <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span></span>
<span class="line">  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/gh/YunYouJun/ak-ui@gh-pages/css/ak-ui.min.css<span class="token punctuation">&quot;</span></span></span>
<span class="line"><span class="token punctuation">/&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sample" tabindex="-1"><a class="header-anchor" href="#sample"><span>Sample</span></a></h3><p><button class="ak-button ak-font-serif" onclick="window.location=&#39;/components/&#39;">开始唤醒</button></p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ak-button<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>开始唤醒<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div><h3 id="更多组件" tabindex="-1"><a class="header-anchor" href="#更多组件"><span>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/components/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`更多组件`);
      } else {
        return [
          createTextVNode("更多组件")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</span></a></h3><blockquote><p>Doctor，您还有许多事情需要处理。现在还不能休息哦。</p></blockquote></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/guide/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/guide/","title":"使用指南","lang":"zh-CN","frontmatter":{"sidebarDepth":2},"headers":[{"level":2,"title":"如何使用","slug":"如何使用","link":"#如何使用","children":[{"level":3,"title":"By NPM or YARN","slug":"by-npm-or-yarn","link":"#by-npm-or-yarn","children":[]},{"level":3,"title":"By CDN","slug":"by-cdn","link":"#by-cdn","children":[]},{"level":3,"title":"Sample","slug":"sample","link":"#sample","children":[]},{"level":3,"title":"更多组件","slug":"更多组件","link":"#更多组件","children":[]}]}],"git":{},"filePathRelative":"guide/README.md"}');
export {
  index_html as comp,
  data
};
