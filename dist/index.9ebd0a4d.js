import { defineComponent as p, openBlock as i, createElementBlock as s, mergeProps as S, useCssVars as E, unref as b, computed as C, ref as g, withDirectives as h, normalizeClass as x, createElementVNode as l, vModelText as N, createVNode as z, Transition as I, withCtx as U, Fragment as j, renderList as $, toDisplayString as M, createCommentVNode as A, renderSlot as w, defineCustomElement as m } from "vue";
import { _ as u } from "./_plugin-vue_export-helper.9d74fd37.js";
const O = /* @__PURE__ */ p({
  __name: "input.ce",
  props: [],
  setup(a) {
    const t = a;
    return (d, f) => (i(), s("input", S(t, {
      class: ["ma-input", t.class]
    }), null, 16));
  }
}), B = `:root{font-size:16px}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0;font-family:Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}input,button,textarea,select{font:inherit}.ma-input{padding:1rem;font-style:normal;font-weight:500;font-size:16px;line-height:24px;width:100%;color:#424242;border:1px solid #e0e0e0;border-radius:.5rem}.ma-input::placeholder{color:#9e9e9e}.ma-input[datagroup]{border:none}
`, L = /* @__PURE__ */ u(O, [["styles", [B]]]), F = ["onClick"], V = p({
  directives: {}
}), H = /* @__PURE__ */ p({
  ...V,
  __name: "dropdown.ce",
  props: ["options"],
  setup(a) {
    const { options: t } = a;
    E((e) => ({
      "5629ff76": b(y)
    }));
    const d = JSON.parse(t), f = {
      mounted(e, o) {
        e.clickOutsideEvent = (n) => {
          n.composedPath().includes(e) || o.value();
        }, document.body.addEventListener("click", e.clickOutsideEvent);
      },
      beforeUnmount(e) {
        document.body.removeEventListener("click", e.clickOutsideEvent);
      }
    }, _ = () => {
      r.value = !1;
    }, y = C(() => d.reduce((e, o) => o.length > e.length ? o : e).length + "ch"), r = g(!1), c = g(""), v = (e) => {
      c.value = e, r.value = !1;
    };
    return (e, o) => h((i(), s("div", {
      class: x(["ma-dropdown", { "ma-dropdown--open": r.value }])
    }, [
      h(l("input", {
        type: "text",
        class: "ma-dropdown__input",
        "onUpdate:modelValue": o[0] || (o[0] = (n) => c.value = n),
        readonly: "",
        onClick: o[1] || (o[1] = (n) => r.value = !r.value)
      }, null, 512), [
        [N, c.value]
      ]),
      z(I, null, {
        default: U(() => [
          r.value ? (i(), s("ul", {
            key: 0,
            class: x([
              "ma-dropdown__list-wrapper",
              { "ma-dropdown__list-wrapper--open": r.value }
            ])
          }, [
            (i(!0), s(j, null, $(b(d), (n, k) => (i(), s("li", {
              class: "ma-dropdown__list-item",
              key: k,
              onClick: (re) => v(n)
            }, M(n), 9, F))), 128))
          ], 2)) : A("", !0)
        ]),
        _: 1
      })
    ], 2)), [
      [f, _]
    ]);
  }
}), R = `:root{font-size:16px}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0;font-family:Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}input,button,textarea,select{font:inherit}.v-enter-active,.v-leave-active{transition:max-height .2s ease-in-out;overflow-y:hidden!important}.v-enter-from,.v-leave-to{max-height:0!important}::-webkit-scrollbar{-webkit-appearance:none;width:5px}::-webkit-scrollbar-thumb{border-radius:8px;background-color:#00000080;box-shadow:0 0 1px #ffffff80}.ma-dropdown{min-width:calc(var(--5629ff76) + 3rem + 1ch);font-style:normal;font-weight:500;font-size:1rem;line-height:1.5rem;width:100%;color:#424242;border:1px solid #e0e0e0;border-radius:.5rem;position:relative}.ma-dropdown:after{content:url("data:image/svg+xml,%3Csvg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.2946 0.294459C10.9053 -0.0948134 10.2743 -0.0951574 9.88462 0.293691L6 4.16984L2.11538 0.29369C1.72569 -0.0951576 1.09466 -0.0948134 0.705384 0.294459C0.315811 0.684032 0.315811 1.31565 0.705384 1.70523L5.29289 6.29274C5.68342 6.68326 6.31658 6.68326 6.70711 6.29274L11.2946 1.70523C11.6842 1.31565 11.6842 0.684032 11.2946 0.294459Z' fill='%23424242'/%3E%3C/svg%3E");position:absolute;right:16px;top:14px;cursor:pointer;pointer-events:none;transition:all .2s ease-in-out}.ma-dropdown--open:after{transform:rotate(180deg)}.ma-dropdown__input{padding:1rem;border:none;width:100%;border-radius:.5rem}.ma-dropdown__input:read-only{cursor:pointer}.ma-dropdown__input[datagroup]{border:none}.ma-dropdown__list-wrapper{will-change:max-height;position:absolute;top:3.875rem;left:0;width:100%;background:#fff;border:1px solid #e0e0e0;border-radius:.5rem;box-shadow:0 2px 4px #0000001a;z-index:1;max-height:32.5rem;overflow-y:auto}.ma-dropdown__list-item{list-style:none;padding:1rem}.ma-dropdown__list-item+.ma-dropdown__list-item{border-top:1px solid #e0e0e0}.ma-dropdown__list-item:hover{background:#eef5ff;cursor:pointer}.ma-dropdown[datagroup]{border:none}
`, D = /* @__PURE__ */ u(H, [["styles", [R]]]), G = `:root{font-size:16px}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0;font-family:Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}input,button,textarea,select{font:inherit}.ma-input-group{width:100%;display:flex;flex-wrap:wrap}.ma-input-group ::slotted(label){display:flex;margin-bottom:.5rem!important;font-weight:500;font-size:16px;line-height:24px;color:#424242;width:100%}.ma-input-group ::slotted(:not(label)){display:inline-flex;width:auto;flex-grow:1;order:2}.ma-input-group ::slotted([data-group=primary]){border-top:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0}.ma-input-group ::slotted([data-group=prepend]){display:inline-flex;width:min-content;flex-grow:0;order:1;border:1px solid #e0e0e0;border-radius:8px 0 0 8px}.ma-input-group ::slotted([data-group=append]){display:inline-flex;width:fit-content;flex-grow:0;order:3;border:1px solid #e0e0e0;border-radius:0 8px 8px 0}.ma-input-group ::slotted(*:last-child,:not(.ma-input)){border-right:1px solid #e0e0e0;border-top-right-radius:8px;border-bottom-right-radius:8px}.ma-input-group ::slotted(*:last-child[data-group=primary]){border-right:1px solid #e0e0e0;border-top-right-radius:8px;border-bottom-right-radius:8px}.ma-input-group ::slotted(*:nth-child(2),:not(.ma-input)){border-left:1px solid #e0e0e0;border-top-left-radius:8px;border-bottom-left-radius:8px}.ma-input-group ::slotted(*:nth-child(2)[data-group=primary]){border-left:1px solid #e0e0e0;border-top-left-radius:8px;border-bottom-left-radius:8px}
`, P = {}, T = { class: "ma-input-group" };
function X(a, t) {
  return i(), s("div", T, [
    w(a.$slots, "default")
  ]);
}
const J = /* @__PURE__ */ u(P, [["render", X], ["styles", [G]]]), Z = { class: "ma-switcher" }, q = /* @__PURE__ */ l("label", { class: "switch" }, [
  /* @__PURE__ */ l("input", { type: "checkbox" }),
  /* @__PURE__ */ l("span", { class: "slider" })
], -1), K = /* @__PURE__ */ p({
  __name: "switcher.ce",
  props: [],
  setup(a) {
    return (t, d) => (i(), s("div", Z, [
      l("span", null, [
        w(t.$slots, "default")
      ]),
      q
    ]));
  }
}), Q = `:root{font-size:16px}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0;font-family:Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}input,button,textarea,select{font:inherit}.ma-switcher{display:flex;align-items:center;justify-content:space-between;width:100%;gap:.625rem;font-style:normal;font-weight:500;font-size:16px;line-height:24px;color:#424242}.switch{position:relative;display:inline-block;width:2.5rem;height:1.25rem}.switch input{opacity:0;width:0;height:0}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:.4s;transition:.4s;border-radius:2rem}.slider:before{position:absolute;content:"";height:16px;width:16px;left:2px;bottom:2px;background-color:#fff;-webkit-transition:.4s;transition:.4s;border-radius:50%}input:checked+.slider{background-color:#323c9f}input:focus+.slider{box-shadow:0 0 1px #323c9f}input:checked+.slider:before{-webkit-transform:translateX(20px);-ms-transform:translateX(20px);transform:translate(20px)}.slider.round{border-radius:34px}.slider.round:before{border-radius:50%}
`, W = /* @__PURE__ */ u(K, [["styles", [Q]]]), Y = m(L), ee = m(W), oe = m(D), te = m(J);
function se() {
  customElements.define("ma-input", Y), customElements.define("ma-switcher", ee), customElements.define("ma-dropdown", oe), customElements.define("ma-input-group", te);
}
export {
  se as register
};
