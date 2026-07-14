import { resolveComponent, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.CUmwmF0R.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_demo_block_dark = resolveComponent("demo-block-dark");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ak-object-物体" tabindex="-1"><a class="header-anchor" href="#ak-object-物体"><span>ak-object 物体</span></a></h1><p>明日方舟地图通常为 10 * 6</p><h2 id="cube-立方体" tabindex="-1"><a class="header-anchor" href="#cube-立方体"><span>Cube 立方体</span></a></h2>`);
  _push(ssrRenderComponent(_component_demo_block_dark, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="perspective"${_scopeId}><!--[-->`);
        ssrRenderList(30, (num) => {
          _push2(`<div class="ak-cube" style="${ssrRenderStyle({ "--cube-size": "65px", "--cube-border-widtth": "10px" })}"${_scopeId}><div class="ak-face front"${_scopeId}><svg class="ak-icon" aria-hidden="true"${_scopeId}><use xlink:href="#icon-warning"${_scopeId}></use></svg><div class="ak-face__lines"${_scopeId}><div class="ak-face__line--tl"${_scopeId}></div><div class="ak-face__line--tr"${_scopeId}></div><div class="ak-face__line--bl"${_scopeId}></div><div class="ak-face__line--br"${_scopeId}></div></div></div><div class="ak-face back"${_scopeId}></div><div class="ak-face right"${_scopeId}></div><div class="ak-face left"${_scopeId}></div><div class="ak-face top"${_scopeId}></div><div class="ak-face bottom"${_scopeId}></div></div>`);
        });
        _push2(`<!--]--><!--[-->`);
        ssrRenderList(30, (num) => {
          _push2(`<div class="ak-cube" style="${ssrRenderStyle({ "--cube-color": "rgba(255,0,0,0.4)", "--cube-size": "65px", "--cube-border-widtth": "10px" })}"${_scopeId}><div class="ak-face front"${_scopeId}><svg class="ak-icon" aria-hidden="true"${_scopeId}><use xlink:href="#icon-warning"${_scopeId}></use></svg><div class="ak-face__lines"${_scopeId}><div class="ak-face__line--tl"${_scopeId}></div><div class="ak-face__line--tr"${_scopeId}></div><div class="ak-face__line--bl"${_scopeId}></div><div class="ak-face__line--br"${_scopeId}></div></div></div><div class="ak-face back"${_scopeId}></div><div class="ak-face right"${_scopeId}></div><div class="ak-face left"${_scopeId}></div><div class="ak-face top"${_scopeId}></div><div class="ak-face bottom"${_scopeId}></div></div>`);
        });
        _push2(`<!--]--></div>`);
      } else {
        return [
          createVNode("div", { class: "perspective" }, [
            (openBlock(), createBlock(Fragment, null, renderList(30, (num) => {
              return createVNode("div", {
                class: "ak-cube",
                style: { "--cube-size": "65px", "--cube-border-widtth": "10px" }
              }, [
                createVNode("div", { class: "ak-face front" }, [
                  (openBlock(), createBlock("svg", {
                    class: "ak-icon",
                    "aria-hidden": "true"
                  }, [
                    createVNode("use", { "xlink:href": "#icon-warning" })
                  ])),
                  createVNode("div", { class: "ak-face__lines" }, [
                    createVNode("div", { class: "ak-face__line--tl" }),
                    createVNode("div", { class: "ak-face__line--tr" }),
                    createVNode("div", { class: "ak-face__line--bl" }),
                    createVNode("div", { class: "ak-face__line--br" })
                  ])
                ]),
                createVNode("div", { class: "ak-face back" }),
                createVNode("div", { class: "ak-face right" }),
                createVNode("div", { class: "ak-face left" }),
                createVNode("div", { class: "ak-face top" }),
                createVNode("div", { class: "ak-face bottom" })
              ]);
            }), 64)),
            (openBlock(), createBlock(Fragment, null, renderList(30, (num) => {
              return createVNode("div", {
                class: "ak-cube",
                style: { "--cube-color": "rgba(255,0,0,0.4)", "--cube-size": "65px", "--cube-border-widtth": "10px" }
              }, [
                createVNode("div", { class: "ak-face front" }, [
                  (openBlock(), createBlock("svg", {
                    class: "ak-icon",
                    "aria-hidden": "true"
                  }, [
                    createVNode("use", { "xlink:href": "#icon-warning" })
                  ])),
                  createVNode("div", { class: "ak-face__lines" }, [
                    createVNode("div", { class: "ak-face__line--tl" }),
                    createVNode("div", { class: "ak-face__line--tr" }),
                    createVNode("div", { class: "ak-face__line--bl" }),
                    createVNode("div", { class: "ak-face__line--br" })
                  ])
                ]),
                createVNode("div", { class: "ak-face back" }),
                createVNode("div", { class: "ak-face right" }),
                createVNode("div", { class: "ak-face left" }),
                createVNode("div", { class: "ak-face top" }),
                createVNode("div", { class: "ak-face bottom" })
              ]);
            }), 64))
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h3 id="todo" tabindex="-1"><a class="header-anchor" href="#todo"><span>Todo</span></a></h3><ul><li>四条线</li></ul><table><thead><tr><th>Var</th><th>Description</th></tr></thead><tbody><tr><td>--cube-color</td><td>立方体颜色</td></tr><tr><td>--cube-size</td><td>立方体尺寸大小（宽高始终一致）</td></tr><tr><td>--cube-border-width</td><td>立方体边宽度</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/components/ak-object.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const akObject_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/components/ak-object.html","title":"ak-object 物体","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Cube 立方体","slug":"cube-立方体","link":"#cube-立方体","children":[{"level":3,"title":"Todo","slug":"todo","link":"#todo","children":[]}]}],"git":{},"filePathRelative":"components/ak-object.md"}');
export {
  akObject_html as comp,
  data
};
