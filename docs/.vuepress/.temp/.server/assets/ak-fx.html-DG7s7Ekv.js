import { resolveComponent, withCtx, createTextVNode, createVNode, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.CUmwmF0R.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouteLink = resolveComponent("RouteLink");
  const _component_demo_block_dark = resolveComponent("demo-block-dark");
  const _component_demo_block = resolveComponent("demo-block");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ak-fx-效果" tabindex="-1"><a class="header-anchor" href="#ak-fx-效果"><span>ak-fx 效果</span></a></h1><h2 id="glow-辉光效果" tabindex="-1"><a class="header-anchor" href="#glow-辉光效果"><span>glow 辉光效果</span></a></h2><blockquote><p>更多色彩参见 `);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/components/#color-%E8%89%B2%E5%BD%A9" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`色彩`);
      } else {
        return [
          createTextVNode("色彩")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`。</p></blockquote><h3 id="glow-辉光按钮" tabindex="-1"><a class="header-anchor" href="#glow-辉光按钮"><span>glow 辉光按钮</span></a></h3>`);
  _push(ssrRenderComponent(_component_demo_block_dark, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="ak-button ak-fx--glow"${_scopeId}>放弃行动</button><button class="ak-button ak-button--action ak-fx--glow" style="${ssrRenderStyle({ "--ak-fx-glow-color": "var(--ak-color-primary)" })}"${_scopeId}>开始行动</button>`);
      } else {
        return [
          createVNode("button", { class: "ak-button ak-fx--glow" }, "放弃行动"),
          createVNode("button", {
            class: "ak-button ak-button--action ak-fx--glow",
            style: { "--ak-fx-glow-color": "var(--ak-color-primary)" }
          }, "开始行动")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ak-button ak-fx--glow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>放弃行动<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span></span>
<span class="line">  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ak-button ak-button--action ak-fx--glow<span class="token punctuation">&quot;</span></span></span>
<span class="line">  <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">--ak-fx-glow-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--ak-color-primary<span class="token punctuation">)</span><span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span></span>
<span class="line"><span class="token punctuation">&gt;</span></span></span>
<span class="line">  开始行动</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="outline-轮廓效果" tabindex="-1"><a class="header-anchor" href="#outline-轮廓效果"><span>outline 轮廓效果</span></a></h2>`);
  _push(ssrRenderComponent(_component_demo_block, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="ak-button ak-fx--outline"${_scopeId}>放弃行动</button><button class="ak-button ak-fx--outline" style="${ssrRenderStyle({ "--ak-outline-color": "purple" })}"${_scopeId}>放弃行动</button><button class="ak-button ak-fx--outline" style="${ssrRenderStyle({ "--ak-outline-color": "var(--ak-color-primary)" })}"${_scopeId}>放弃行动</button>`);
      } else {
        return [
          createVNode("button", { class: "ak-button ak-fx--outline" }, "放弃行动"),
          createVNode("button", {
            class: "ak-button ak-fx--outline",
            style: { "--ak-outline-color": "purple" }
          }, "放弃行动"),
          createVNode("button", {
            class: "ak-button ak-fx--outline",
            style: { "--ak-outline-color": "var(--ak-color-primary)" }
          }, "放弃行动")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ak-button ak-fx--outline<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>放弃行动<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ak-button ak-fx--outline<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">--ak-outline-color</span><span class="token punctuation">:</span> purple</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  放弃行动</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span></span>
<span class="line">  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ak-button ak-fx--outline<span class="token punctuation">&quot;</span></span></span>
<span class="line">  <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">--ak-outline-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--ak-color-primary<span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span></span>
<span class="line"><span class="token punctuation">&gt;</span></span></span>
<span class="line">  放弃行动</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="skew-倾斜效果" tabindex="-1"><a class="header-anchor" href="#skew-倾斜效果"><span>skew 倾斜效果</span></a></h2>`);
  _push(ssrRenderComponent(_component_demo_block_dark, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="ak-button ak-button--fab ak-fx--skew-left"${_scopeId}><svg class="ak-button__icon ak-icon" aria-hidden="true"${_scopeId}><use xlink:href="#icon-gear"${_scopeId}></use></svg></button><button class="ak-button ak-button--fab ak-fx--skew-right" style="${ssrRenderStyle({ "float": "right" })}"${_scopeId}><svg class="ak-button__icon ak-icon" aria-hidden="true"${_scopeId}><use xlink:href="#icon-pause"${_scopeId}></use></svg></button>`);
      } else {
        return [
          createVNode("button", { class: "ak-button ak-button--fab ak-fx--skew-left" }, [
            (openBlock(), createBlock("svg", {
              class: "ak-button__icon ak-icon",
              "aria-hidden": "true"
            }, [
              createVNode("use", { "xlink:href": "#icon-gear" })
            ]))
          ]),
          createVNode("button", {
            class: "ak-button ak-button--fab ak-fx--skew-right",
            style: { "float": "right" }
          }, [
            (openBlock(), createBlock("svg", {
              class: "ak-button__icon ak-icon",
              "aria-hidden": "true"
            }, [
              createVNode("use", { "xlink:href": "#icon-pause" })
            ]))
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ak-button ak-button--fab ak-fx--skew-left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ak-button__icon ak-icon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name"><span class="token namespace">xlink:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#icon-gear<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>use</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ak-button ak-button--fab ak-fx--skew-right<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">float</span><span class="token punctuation">:</span>right</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ak-button__icon ak-icon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name"><span class="token namespace">xlink:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#icon-pause<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>use</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/components/ak-fx.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const akFx_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/components/ak-fx.html","title":"ak-fx 效果","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"glow 辉光效果","slug":"glow-辉光效果","link":"#glow-辉光效果","children":[{"level":3,"title":"glow 辉光按钮","slug":"glow-辉光按钮","link":"#glow-辉光按钮","children":[]}]},{"level":2,"title":"outline 轮廓效果","slug":"outline-轮廓效果","link":"#outline-轮廓效果","children":[]},{"level":2,"title":"skew 倾斜效果","slug":"skew-倾斜效果","link":"#skew-倾斜效果","children":[]}],"git":{},"filePathRelative":"components/ak-fx.md"}');
export {
  akFx_html as comp,
  data
};
