import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.CUmwmF0R.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _imports_0 = "/img/character/chen.jpg";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_demo_block = resolveComponent("demo-block");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ak-media-媒体" tabindex="-1"><a class="header-anchor" href="#ak-media-媒体"><span>ak-media 媒体</span></a></h1><h2 id="album-相册" tabindex="-1"><a class="header-anchor" href="#album-相册"><span>album 相册</span></a></h2>`);
  _push(ssrRenderComponent(_component_demo_block, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="ak-media--album"${_scopeId}><img${ssrRenderAttr("src", _imports_0)}${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "ak-media--album" }, [
            createVNode("img", { src: _imports_0 })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ak-media--album<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/img/character/chen.jpg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/components/ak-media.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const akMedia_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/components/ak-media.html","title":"ak-media 媒体","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"album 相册","slug":"album-相册","link":"#album-相册","children":[]}],"git":{},"filePathRelative":"components/ak-media.md"}');
export {
  akMedia_html as comp,
  data
};
