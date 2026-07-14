import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.CUmwmF0R.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_demo_block_dark = resolveComponent("demo-block-dark");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ak-loading-加载" tabindex="-1"><a class="header-anchor" href="#ak-loading-加载"><span>ak-loading 加载</span></a></h1>`);
  _push(ssrRenderComponent(_component_demo_block_dark, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="ak-loading"${_scopeId}></div><div class="ak-loading" style="${ssrRenderStyle({ "--ak-loading-color": "black" })}"${_scopeId}></div><div class="ak-loading" style="${ssrRenderStyle({ "--ak-loading-color": "var(--ak-color-advanced)" })}"${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "ak-loading" }),
          createVNode("div", {
            class: "ak-loading",
            style: { "--ak-loading-color": "black" }
          }),
          createVNode("div", {
            class: "ak-loading",
            style: { "--ak-loading-color": "var(--ak-color-advanced)" }
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ak-loading<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token comment">&lt;!-- 自定义颜色 --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ak-loading<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">--ak-loading-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span></span>
<span class="line">  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ak-loading<span class="token punctuation">&quot;</span></span></span>
<span class="line">  <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">--ak-loading-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--ak-color-advanced<span class="token punctuation">)</span><span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span></span>
<span class="line"><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 或者定义全局变量 --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css"></span>
<span class="line">  <span class="token selector">:root</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">--ak-loading-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">/* 使用已有的变量 */</span></span>
<span class="line">    <span class="token comment">/* --ak-loading-color: var(--ak-color-advanced); */</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/components/ak-loading.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const akLoading_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/components/ak-loading.html","title":"ak-loading 加载","lang":"zh-CN","frontmatter":{},"headers":[],"git":{},"filePathRelative":"components/ak-loading.md"}');
export {
  akLoading_html as comp,
  data
};
