import { defineComponent as o, openBlock as t, createElementBlock as i, createElementVNode as e, defineCustomElement as r } from "vue";
import { _ as a } from "./_plugin-vue_export-helper.9d74fd37.js";
const l = { class: "ma-banner-login" }, s = /* @__PURE__ */ e("div", { class: "ma-banner-login__content" }, [
  /* @__PURE__ */ e("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ e("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M7.54872 0C5.19138 0 3.28204 1.79 3.28204 4C3.28204 6.21 5.19138 8 7.54872 8C9.90606 8 11.8154 6.21 11.8154 4C11.8154 1.79 9.90606 0 7.54872 0ZM9.68443 4C9.68443 2.89524 8.72952 2 7.55111 2C6.3727 2 5.41779 2.89524 5.41779 4C5.41779 5.10476 6.3727 6 7.55111 6C8.72952 6 9.68443 5.10476 9.68443 4ZM13.9489 12.9688C13.9489 12.3688 10.9387 11.0001 8.08228 11.0001C5.2259 11.0001 2.21564 12.3688 2.21564 12.9688V14H13.9489V12.9688ZM0.0818481 13C0.0818481 10.34 5.41185 9.00003 8.08185 9.00003C10.7518 9.00003 16.0818 10.34 16.0818 13V16H0.0818481V13Z",
      fill: "#FEF058"
    })
  ]),
  /* @__PURE__ */ e("div", { class: "ma-banner-login__content-description" }, " Mau lebih hemat? Jangan lupa log in, ya. ")
], -1), c = ["href"], g = /* @__PURE__ */ e("button", {
  class: "ma-banner-login__button",
  type: "button"
}, "LOG IN", -1), m = [
  g
], d = /* @__PURE__ */ o({
  __name: "login-banner.ce",
  props: {
    loginUrl: {
      type: String,
      default: "/login"
    }
  },
  setup(n) {
    return (p, u) => (t(), i("div", l, [
      s,
      e("a", { href: n.loginUrl }, m, 8, c)
    ]));
  }
}), _ = `:root{font-size:16px}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0;font-family:Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}input,button,textarea,select{font:inherit}.ma-banner-login{display:flex;justify-content:space-between;align-items:center;padding:1rem 1.5rem;background:#323c9f;border-radius:.5rem;color:#fef058;font-weight:600;font-size:16px;line-height:24px}.ma-banner-login__button{padding:.375rem .5rem;border-radius:.3125rem;font-style:normal;font-weight:600;font-size:14px;line-height:17px;color:#fdd835;background:linear-gradient(180deg,#4771ff 0%,#4b62dd 100%);display:inline-block;white-space:nowrap;border:1px solid;border-image-source:linear-gradient(180deg,#2c3b7a 0%,#5c6bc0 100%);text-align:center;transition:.3s all ease}.ma-banner-login__button:hover{transform:scale(1.05);cursor:pointer}.ma-banner-login__button:active{transform:scale(.9);cursor:pointer}.ma-banner-login__content{display:flex;flex-direction:row;align-items:center}.ma-banner-login__content svg{margin-right:.875rem}.ma-banner-login__content .ma-banner-login__content-description{color:#fef058}.ma-banner-login__content .ma-banner-login__content-description b{font-weight:700}
`, b = /* @__PURE__ */ a(d, [["styles", [_]]]), f = r(b);
function C() {
  customElements.define("ma-login-banner", f);
}
export {
  C as register
};
