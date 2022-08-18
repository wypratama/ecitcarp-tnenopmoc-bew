import { defineComponent as p, ref as s, computed as l, openBlock as o, createElementBlock as n, normalizeClass as f, unref as d, renderSlot as c, createCommentVNode as i, defineCustomElement as h } from "vue";
import { _ as g } from "./_plugin-vue_export-helper.9d74fd37.js";
const y = ["type", "disabled"], x = {
  key: 0,
  class: "btn-icon"
}, w = {
  key: 1,
  ref: "slot",
  class: "btn-text"
}, v = ["variant"], k = /* @__PURE__ */ p({
  __name: "button.ce",
  props: {
    outline: {
      type: Boolean,
      default: !1
    },
    rounded: {
      type: Boolean,
      default: !1
    },
    expanded: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    isLoading: {
      type: Boolean,
      default: !1
    },
    type: {
      validator: (e) => ["button", "submit", "reset"].includes(e),
      type: String,
      default: "button"
    }
  },
  emits: ["click"],
  setup(e, { emit: C }) {
    const t = e, u = s(!0), a = s(!1), b = l(() => [
      "btn",
      {
        "btn-outline": t.outline,
        "btn-rounded": t.rounded,
        "btn-fullwidth": t.expanded,
        "btn-icon": a,
        loading: t.isLoading != null && t.isLoading
      }
    ]), m = l(
      () => t.outline ? "primary" : "secondary"
    );
    return (r, E) => (o(), n("button", {
      type: e.type,
      class: f(d(b)),
      disabled: e.disabled || e.isLoading
    }, [
      a.value && !e.isLoading ? (o(), n("span", x, [
        c(r.$slots, "icon")
      ])) : i("", !0),
      u.value && !e.isLoading ? (o(), n("span", w, [
        c(r.$slots, "default")
      ], 512)) : i("", !0),
      e.isLoading ? (o(), n("ma-spinner", {
        key: 2,
        variant: d(m)
      }, null, 8, v)) : i("", !0)
    ], 10, y));
  }
}), B = `:root{font-size:16px}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0;font-family:Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}input,button,textarea,select{font:inherit}.btn{margin:4px;min-width:100px;min-height:48px;max-height:48px;padding:.75rem 1rem;display:inline-block;white-space:nowrap;font-size:1rem;font-weight:700;text-align:center;background:#323c9f;color:var(--color-white-50);border:1px solid var(--color-primary);border-radius:8px;transition:color .2s linear,background-color .2s linear,border .2s linear,box-shadow .2s linear;cursor:pointer;user-select:none}@media screen and (max-width: 480px){.btn{min-height:40px;max-height:40px}}.btn.btn-outline{background-color:var(--color-white-50);color:var(--color-primary)}.btn.btn-outline:active{background-color:var(--color-primary-lightest)}.btn.btn-rounded{border-radius:999px}.btn.btn-fullwidth{width:100%}.btn.btn-icon{min-width:125px}.btn:active{background-color:var(--color-primary-dark)}.btn:hover{box-shadow:var(--shadow-primary-highlight)}.btn[disabled]{cursor:not-allowed;opacity:.5}.btn .btn-icon{margin-right:.5rem}
`, S = /* @__PURE__ */ g(k, [["styles", [B]]]), L = h(S);
function I() {
  customElements.define("ma-button", L);
}
export {
  I as register
};
