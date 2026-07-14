import { resolveComponent, withCtx, createVNode, openBlock, createBlock, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.CUmwmF0R.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_demo_block_dark = resolveComponent("demo-block-dark");
  const _component_RouteLink = resolveComponent("RouteLink");
  const _component_demo_block_dust = resolveComponent("demo-block-dust");
  const _component_demo_button_card = resolveComponent("demo-button-card");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ak-button-按钮" tabindex="-1"><a class="header-anchor" href="#ak-button-按钮"><span>ak-button 按钮</span></a></h1><p>明日方舟按钮样式</p><h2 id="base-普通按钮" tabindex="-1"><a class="header-anchor" href="#base-普通按钮"><span>base 普通按钮</span></a></h2>`);
  _push(ssrRenderComponent(_component_demo_block_dark, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="ak-button ak-font-serif"${_scopeId}>开始唤醒</button><button class="ak-button ak-button--outline"${_scopeId}>开始唤醒</button><button class="ak-button ak-button--action"${_scopeId}>开始行动</button>`);
      } else {
        return [
          createVNode("button", { class: "ak-button ak-font-serif" }, "开始唤醒"),
          createVNode("button", { class: "ak-button ak-button--outline" }, "开始唤醒"),
          createVNode("button", { class: "ak-button ak-button--action" }, "开始行动")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ak-button<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>开始唤醒<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ak-button ak-button--outline<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>开始唤醒<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ak-button ak-button--action<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>开始行动<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="block-块状按钮" tabindex="-1"><a class="header-anchor" href="#block-块状按钮"><span>block 块状按钮</span></a></h2>`);
  _push(ssrRenderComponent(_component_demo_block_dark, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="ak-button ak-button--block"${_scopeId}>放弃行动</button>`);
      } else {
        return [
          createVNode("button", { class: "ak-button ak-button--block" }, "放弃行动")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ak-button ak-button--block<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>放弃行动<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div><h2 id="icon-带图标的按钮" tabindex="-1"><a class="header-anchor" href="#icon-带图标的按钮"><span>icon 带图标的按钮</span></a></h2>`);
  _push(ssrRenderComponent(_component_demo_block_dark, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="ak-button"${_scopeId}><svg class="ak-button__icon" aria-hidden="true"${_scopeId}><use xlink:href="#icon-finger-click"${_scopeId}></use></svg><span class="ak-button__label"${_scopeId}>接管作战</span></button>`);
      } else {
        return [
          createVNode("button", { class: "ak-button" }, [
            (openBlock(), createBlock("svg", {
              class: "ak-button__icon",
              "aria-hidden": "true"
            }, [
              createVNode("use", { "xlink:href": "#icon-finger-click" })
            ])),
            createVNode("span", { class: "ak-button__label" }, "接管作战")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ak-button<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ak-button__icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/img/icon/finger-click.svg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ak-button__label<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>接管作战<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fab-浮动动作按钮" tabindex="-1"><a class="header-anchor" href="#fab-浮动动作按钮"><span>fab 浮动动作按钮</span></a></h2>`);
  _push(ssrRenderComponent(_component_demo_block_dark, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="ak-button ak-button--fab"${_scopeId}><svg class="ak-button__icon ak-icon" aria-hidden="true"${_scopeId}><use xlink:href="#icon-pause"${_scopeId}></use></svg></button>`);
      } else {
        return [
          createVNode("button", { class: "ak-button ak-button--fab" }, [
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
  _push(`<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ak-button ak-button--fab<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ak-button__icon ak-icon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name"><span class="token namespace">xlink:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#icon-pause<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>use</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>如果你想实现明日方舟中按钮的斜切效果，你可以为其加上 <code>ak-fx--skew-left</code> or <code>ak-fx--skew-right</code>。<br> 可参考 `);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/components/ak-fx.html#skew-%E5%80%BE%E6%96%9C%E6%95%88%E6%9E%9C" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`ak-fx 斜切效果`);
      } else {
        return [
          createTextVNode("ak-fx 斜切效果")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></blockquote><h2 id="start-开始按钮" tabindex="-1"><a class="header-anchor" href="#start-开始按钮"><span>start 开始按钮</span></a></h2>`);
  _push(ssrRenderComponent(_component_demo_block_dark, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="ak-button--start"${_scopeId}><div class="icon triangle-right"${_scopeId}></div><div class="label"${_scopeId}>START</div></div>`);
      } else {
        return [
          createVNode("div", { class: "ak-button--start" }, [
            createVNode("div", { class: "icon triangle-right" }),
            createVNode("div", { class: "label" }, "START")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ak-button--start<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon triangle-right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>label<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>START<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>如想要添加更多效果参见 <a href="/components/ak-fx">ak-fx</a>。</p></blockquote><h2 id="card-卡片按钮" tabindex="-1"><a class="header-anchor" href="#card-卡片按钮"><span>card 卡片按钮</span></a></h2>`);
  _push(ssrRenderComponent(_component_demo_block_dust, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo_button_card, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_demo_button_card)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p>&lt;&lt;&lt; @/.vuepress/components/demo/button-card.vue</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/components/ak-button.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const akButton_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/components/ak-button.html","title":"ak-button 按钮","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"base 普通按钮","slug":"base-普通按钮","link":"#base-普通按钮","children":[]},{"level":2,"title":"block 块状按钮","slug":"block-块状按钮","link":"#block-块状按钮","children":[]},{"level":2,"title":"icon 带图标的按钮","slug":"icon-带图标的按钮","link":"#icon-带图标的按钮","children":[]},{"level":2,"title":"fab 浮动动作按钮","slug":"fab-浮动动作按钮","link":"#fab-浮动动作按钮","children":[]},{"level":2,"title":"start 开始按钮","slug":"start-开始按钮","link":"#start-开始按钮","children":[]},{"level":2,"title":"card 卡片按钮","slug":"card-卡片按钮","link":"#card-卡片按钮","children":[]}],"git":{},"filePathRelative":"components/ak-button.md"}');
export {
  akButton_html as comp,
  data
};
