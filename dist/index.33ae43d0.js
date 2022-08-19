import { defineComponent as v, openBlock as n, createElementBlock as i, mergeProps as U, useCssVars as $, unref as h, ref as g, computed as x, withDirectives as A, normalizeClass as y, createCommentVNode as w, createElementVNode as d, createVNode as L, Transition as M, withCtx as O, Fragment as B, renderList as F, createTextVNode as V, toDisplayString as H, renderSlot as k, defineCustomElement as u } from "vue";
import { _ as c } from "./_plugin-vue_export-helper.9d74fd37.js";
const R = /* @__PURE__ */ v({
  __name: "input.ce",
  props: [],
  setup(t) {
    const s = t;
    return (m, p) => (n(), i("input", U(s, {
      class: ["ma-input", s.class]
    }), null, 16));
  }
}), D = `:root{font-size:16px}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0;font-family:Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}input,button,textarea,select{font:inherit}.ma-input{padding:1rem;font-style:normal;font-weight:500;font-size:16px;line-height:24px;width:100%;color:#424242;border:1px solid #e0e0e0;border-radius:.5rem}.ma-input::placeholder{color:#9e9e9e}.ma-input[datagroup]{border:none}
`, P = /* @__PURE__ */ c(R, [["styles", [D]]]), T = ["src", "alt"], G = ["value"], X = ["onClick"], J = ["src", "alt"], W = /* @__PURE__ */ v({
  __name: "dropdown.ce",
  props: [
    "options",
    "code",
    "label",
    "asIcon"
  ],
  setup(t) {
    const { options: s, code: m, label: p, asIcon: S } = t;
    $((e) => ({
      c20c1620: h(z)
    }));
    const f = JSON.parse(s), a = g(!1), l = g(), _ = x({
      get() {
        return l.value ? l.value[m] : "";
      },
      set(e) {
        l.value = e || null;
      }
    }), C = (e) => {
      _.value = e, a.value = !1;
    }, b = g(""), E = x(() => b.value ? f.filter(
      (e) => e[p].toLowerCase().includes(b.value.toLowerCase())
    ) : f), I = {
      mounted(e, r) {
        e.clickOutsideEvent = (o) => {
          o.composedPath().includes(e) || r.value();
        }, document.body.addEventListener("click", e.clickOutsideEvent);
      },
      beforeUnmount(e) {
        document.body.removeEventListener("click", e.clickOutsideEvent);
      }
    }, N = () => {
      a.value = !1;
    }, z = x(() => {
      const e = f.reduce((r, o) => o[p].length > r.length ? o[p] : r, "").length;
      return S ? e + 1.5 + "ch" : e + "ch";
    });
    return (e, r) => A((n(), i("div", {
      class: y(["ma-dropdown", { "ma-dropdown--open": a.value }])
    }, [
      t.asIcon && l.value ? (n(), i("img", {
        key: 0,
        src: l.value ? l.value[t.asIcon] : "",
        alt: l.value[t.label],
        height: "16",
        width: "20"
      }, null, 8, T)) : w("", !0),
      d("input", {
        type: "text",
        class: "ma-dropdown__input",
        value: h(_),
        onClick: r[0] || (r[0] = (o) => a.value = !a.value),
        onInput: r[1] || (r[1] = (o) => {
          b.value = o.target.value;
        })
      }, null, 40, G),
      L(M, null, {
        default: O(() => [
          a.value ? (n(), i("ul", {
            key: 0,
            class: y([
              "ma-dropdown__list-wrapper",
              { "ma-dropdown__list-wrapper--open": a.value }
            ])
          }, [
            (n(!0), i(B, null, F(h(E), (o, j) => (n(), i("li", {
              class: "ma-dropdown__list-item",
              key: j,
              onClick: (ue) => C(o)
            }, [
              t.asIcon ? (n(), i("img", {
                key: 0,
                src: o[t.asIcon],
                alt: o[t.label],
                height: "16",
                width: "20"
              }, null, 8, J)) : w("", !0),
              V(" " + H(o[t.label]), 1)
            ], 8, X))), 128))
          ], 2)) : w("", !0)
        ]),
        _: 1
      })
    ], 2)), [
      [I, N]
    ]);
  }
}), Z = `:root{font-size:16px}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0;font-family:Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}input,button,textarea,select{font:inherit}.v-enter-active,.v-leave-active{transition:max-height .2s ease-in-out;overflow-y:hidden!important}.v-enter-from,.v-leave-to{max-height:0!important}::-webkit-scrollbar{-webkit-appearance:none;width:5px}::-webkit-scrollbar-thumb{border-radius:8px;background-color:#00000080;box-shadow:0 0 1px #ffffff80}.ma-dropdown{min-width:calc(var(--c20c1620) + 3rem + 1ch);font-style:normal;font-weight:500;font-size:1rem;line-height:1.5rem;width:100%;color:#424242;border:1px solid #e0e0e0;border-radius:.5rem;position:relative;padding:1rem;display:flex;flex-direction:row;gap:.5rem;align-items:center}.ma-dropdown:focus-within{outline:1px auto #323c9f!important}.ma-dropdown:after{content:url("data:image/svg+xml,%3Csvg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.2946 0.294459C10.9053 -0.0948134 10.2743 -0.0951574 9.88462 0.293691L6 4.16984L2.11538 0.29369C1.72569 -0.0951576 1.09466 -0.0948134 0.705384 0.294459C0.315811 0.684032 0.315811 1.31565 0.705384 1.70523L5.29289 6.29274C5.68342 6.68326 6.31658 6.68326 6.70711 6.29274L11.2946 1.70523C11.6842 1.31565 11.6842 0.684032 11.2946 0.294459Z' fill='%23424242'/%3E%3C/svg%3E");position:absolute;right:16px;top:14px;cursor:pointer;pointer-events:none;transition:all .2s ease-in-out}.ma-dropdown--open:after{transform:rotate(180deg)}.ma-dropdown__input{border:none;width:100%;border-radius:.5rem}.ma-dropdown__input:read-only{cursor:pointer}.ma-dropdown__input:focus{outline-style:none}.ma-dropdown__input[datagroup]{border:none}.ma-dropdown__list-wrapper{will-change:max-height;position:absolute;top:3.875rem;left:0;width:100%;background:#fff;border:1px solid #e0e0e0;border-radius:.5rem;box-shadow:0 2px 4px #0000001a;z-index:1;max-height:12.5rem;overflow-y:auto}.ma-dropdown__list-item{list-style:none;padding:1rem}.ma-dropdown__list-item+.ma-dropdown__list-item{border-top:1px solid #e0e0e0}.ma-dropdown__list-item:hover{background:#eef5ff;cursor:pointer}.ma-dropdown[datagroup]{border:none}
`, q = /* @__PURE__ */ c(W, [["styles", [Z]]]), K = `:root{font-size:16px}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0;font-family:Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}input,button,textarea,select{font:inherit}.ma-input-group{width:100%;display:flex;flex-wrap:wrap}.ma-input-group ::slotted(label){display:flex;margin-bottom:.5rem!important;font-weight:500;font-size:16px;line-height:24px;color:#424242;width:100%}.ma-input-group ::slotted(:not(label)){display:inline-flex;width:auto;flex-grow:1;order:2}.ma-input-group ::slotted([data-group=primary]){border-top:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0}.ma-input-group ::slotted([data-group=prepend]){display:inline-flex;width:min-content;flex-grow:0;order:1;border:1px solid #e0e0e0;border-radius:8px 0 0 8px}.ma-input-group ::slotted([data-group=append]){display:inline-flex;width:fit-content;flex-grow:0;order:3;border:1px solid #e0e0e0;border-radius:0 8px 8px 0}.ma-input-group ::slotted(*:last-child,:not(.ma-input)){border-right:1px solid #e0e0e0;border-top-right-radius:8px;border-bottom-right-radius:8px}.ma-input-group ::slotted(*:last-child[data-group=primary]){border-right:1px solid #e0e0e0;border-top-right-radius:8px;border-bottom-right-radius:8px}.ma-input-group ::slotted(*:nth-child(2),:not(.ma-input)){border-left:1px solid #e0e0e0;border-top-left-radius:8px;border-bottom-left-radius:8px}.ma-input-group ::slotted(*:nth-child(2)[data-group=primary]){border-left:1px solid #e0e0e0;border-top-left-radius:8px;border-bottom-left-radius:8px}
`, Q = {}, Y = { class: "ma-input-group" };
function ee(t, s) {
  return n(), i("div", Y, [
    k(t.$slots, "default")
  ]);
}
const te = /* @__PURE__ */ c(Q, [["render", ee], ["styles", [K]]]), oe = { class: "ma-switcher" }, re = /* @__PURE__ */ d("label", { class: "switch" }, [
  /* @__PURE__ */ d("input", { type: "checkbox" }),
  /* @__PURE__ */ d("span", { class: "slider" })
], -1), ne = /* @__PURE__ */ v({
  __name: "switcher.ce",
  props: [],
  setup(t) {
    return (s, m) => (n(), i("div", oe, [
      d("span", null, [
        k(s.$slots, "default")
      ]),
      re
    ]));
  }
}), ie = `:root{font-size:16px}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0;font-family:Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}input,button,textarea,select{font:inherit}.ma-switcher{display:flex;align-items:center;justify-content:space-between;width:100%;gap:.625rem;font-style:normal;font-weight:500;font-size:16px;line-height:24px;color:#424242}.switch{position:relative;display:inline-block;width:2.5rem;height:1.25rem}.switch input{opacity:0;width:0;height:0}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:.4s;transition:.4s;border-radius:2rem}.slider:before{position:absolute;content:"";height:16px;width:16px;left:2px;bottom:2px;background-color:#fff;-webkit-transition:.4s;transition:.4s;border-radius:50%}input:checked+.slider{background-color:#323c9f}input:focus+.slider{box-shadow:0 0 1px #323c9f}input:checked+.slider:before{-webkit-transform:translateX(20px);-ms-transform:translateX(20px);transform:translate(20px)}.slider.round{border-radius:34px}.slider.round:before{border-radius:50%}
`, se = /* @__PURE__ */ c(ne, [["styles", [ie]]]), ae = u(P), le = u(se), de = u(q), pe = u(te);
function fe() {
  customElements.define("ma-input", ae), customElements.define("ma-switcher", le), customElements.define("ma-dropdown", de), customElements.define("ma-input-group", pe);
}
export {
  fe as register
};
