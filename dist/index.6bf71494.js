import { openBlock as t, createElementBlock as r, createElementVNode as n, renderSlot as o, defineCustomElement as s } from "vue";
import { _ as i } from "./_plugin-vue_export-helper.9d74fd37.js";
const a = `:root{font-size:16px}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0;font-family:Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}input,button,textarea,select{font:inherit}.card{border:1px solid #e0e0e0;border-radius:.5rem;padding:1.5rem}.card__header{display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin-bottom:1.5rem;position:relative}.card__header :before{content:"";position:absolute;width:.1875rem;height:1.125rem;background-color:#323c9f;left:-1.5625rem;top:.21875rem}.card__header ::slotted(span){font-style:normal;font-weight:600;font-size:16px;line-height:24px;color:#323c9f}
`, c = {}, d = { class: "card" }, l = { class: "card__header" };
function m(e, _) {
  return t(), r("section", d, [
    n("div", l, [
      o(e.$slots, "header")
    ]),
    o(e.$slots, "default")
  ]);
}
const f = /* @__PURE__ */ i(c, [["render", m], ["styles", [a]]]), p = s(f);
function g() {
  customElements.define("ma-card", p);
}
export {
  g as register
};
