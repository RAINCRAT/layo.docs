import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.CUmwmF0R.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_demo_block = resolveComponent("demo-block");
  const _component_demo_block_dark = resolveComponent("demo-block-dark");
  const _component_demo_block_color = resolveComponent("demo-block-color");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ak-card-卡片" tabindex="-1"><a class="header-anchor" href="#ak-card-卡片"><span>ak-card 卡片</span></a></h1><h2 id="outline-描边卡片" tabindex="-1"><a class="header-anchor" href="#outline-描边卡片"><span>outline 描边卡片</span></a></h2>`);
  _push(ssrRenderComponent(_component_demo_block, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="ak-card ak-card--outline"${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "ak-card ak-card--outline" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ak-card ak-card--outline<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div><h2 id="stripe-条纹卡片" tabindex="-1"><a class="header-anchor" href="#stripe-条纹卡片"><span>stripe 条纹卡片</span></a></h2>`);
  _push(ssrRenderComponent(_component_demo_block_dark, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="ak-card ak-card--stripe"${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "ak-card ak-card--stripe" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ak-card ak-card--stripe<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div><h2 id="place-人物放置卡片" tabindex="-1"><a class="header-anchor" href="#place-人物放置卡片"><span>place 人物放置卡片</span></a></h2><p>如果想要保持 <code>focus</code> 状态，请增加 <code>tabindex</code> 属性。</p>`);
  _push(ssrRenderComponent(_component_demo_block_color, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="ak-card ak-card--place"${_scopeId}></div><div class="ak-card ak-card--place" style="${ssrRenderStyle({ "--ak-card-place-color": "var(--ak-color-yellow)" })}"${_scopeId}></div><div tabindex="0" class="ak-card ak-card--place" style="${ssrRenderStyle({ "--ak-card-place-color": "var(--ak-color-advanced)" })}"${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "ak-card ak-card--place" }),
          createVNode("div", {
            class: "ak-card ak-card--place",
            style: { "--ak-card-place-color": "var(--ak-color-yellow)" }
          }),
          createVNode("div", {
            tabindex: "0",
            class: "ak-card ak-card--place",
            style: { "--ak-card-place-color": "var(--ak-color-advanced)" }
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<blockquote><p>值为 0 、非法值、或者没有 tabindex 值的元素应该放置在 tabindex 值为正值的元素后面。<br><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/tabindex" target="_blank" rel="noopener noreferrer">tabindex - MDN</a></p></blockquote><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ak-card ak-card--place<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span></span>
<span class="line">  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ak-card ak-card--place<span class="token punctuation">&quot;</span></span></span>
<span class="line">  <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">--ak-card-place-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--ak-color-yellow<span class="token punctuation">)</span><span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span></span>
<span class="line"><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span></span>
<span class="line">  <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span></span>
<span class="line">  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ak-card ak-card--place<span class="token punctuation">&quot;</span></span></span>
<span class="line">  <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">--ak-card-place-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--ak-color-advanced<span class="token punctuation">)</span><span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span></span>
<span class="line"><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/components/ak-card.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const akCard_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/components/ak-card.html","title":"ak-card 卡片","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"outline 描边卡片","slug":"outline-描边卡片","link":"#outline-描边卡片","children":[]},{"level":2,"title":"stripe 条纹卡片","slug":"stripe-条纹卡片","link":"#stripe-条纹卡片","children":[]},{"level":2,"title":"place 人物放置卡片","slug":"place-人物放置卡片","link":"#place-人物放置卡片","children":[]}],"git":{},"filePathRelative":"components/ak-card.md"}');
export {
  akCard_html as comp,
  data
};
