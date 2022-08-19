import { defineComponent as o, openBlock as l, createElementBlock as i, createElementVNode as a, unref as r, createStaticVNode as s, defineCustomElement as m } from "vue";
import { _ as p } from "./_plugin-vue_export-helper.9d74fd37.js";
const d = { style: { display: "grid", "grid-template-columns": "8fr 4fr", "max-width": "1200px", margin: "0 auto" } }, c = { style: { display: "flex", "flex-direction": "column", gap: "24px" } }, u = /* @__PURE__ */ a("ma-login-banner", { "login-url": "https://misteraladin.com" }, null, -1), g = /* @__PURE__ */ a("span", { slot: "header" }, "Detail Pemesan", -1), f = { style: { display: "flex", "flex-direction": "column", gap: "24px" } }, h = /* @__PURE__ */ s('<div style="display:grid;grid-template-columns:min-content repeat(3, 1fr);gap:24px;"><ma-input-group><label for="first-name">Nama Depan</label><ma-input type="text" class="hello-there hello-all" name="first-name"></ma-input></ma-input-group><ma-input-group><label for="first-name">Nama Tengah</label><ma-input type="text" class="hello-there hello-all" name="first-name"></ma-input></ma-input-group><ma-input-group><label for="first-name">Nama Belakang</label><ma-input type="text" class="hello-there hello-all" name="first-name"></ma-input></ma-input-group></div><ul style="display:flex;flex-direction:column;gap:8px;"><li style="font-family:&#39;Montserrat&#39;;font-style:normal;font-weight:500;font-size:12px;line-height:16px;color:#757575;margin-left:16px;"> Untuk WNI, nama dan NIK harus sama dengan yang terdaftar. Untuk WNA, gunakan nama dan nomor yang tercantum di paspor. Untuk WNA , gunakan nama dan nomor vang tercantum di paspor. </li><li style="font-family:&#39;Montserrat&#39;;font-style:normal;font-weight:500;font-size:12px;line-height:16px;color:#757575;margin-left:16px;"> Jika kamu tidak memiliki &quot;nama tengah&quot; (contoh: Ari Wibowo), kosongkan bagian nama tengah dan hanya isi nama depan (contoh: Ari) dan nama akhir (contoh: Wibowo) </li><li style="font-family:&#39;Montserrat&#39;;font-style:normal;font-weight:500;font-size:12px;line-height:16px;color:#757575;margin-left:16px;"> Jika kamu hanya memiliki satu nama (contoh: Kartini), harap mengosongkan nama tengah dan mengisi nama belakang dengan nama depan (contoh: Kartini Kartini). </li></ul>', 2), y = /* @__PURE__ */ a("label", { for: "first-name" }, "Nomor Telepon", -1), x = ["options"], _ = /* @__PURE__ */ a("ma-input", {
  type: "text",
  class: "hello-there hello-all",
  name: "first-name",
  placeholder: "81234567890",
  "data-group": "primary"
}, null, -1), k = /* @__PURE__ */ a("ma-input-group", null, [
  /* @__PURE__ */ a("label", { for: "first-name" }, "Email"),
  /* @__PURE__ */ a("ma-input", {
    type: "text",
    class: "hello-there hello-all",
    name: "first-name",
    placeholder: "email@domain.com"
  })
], -1), b = /* @__PURE__ */ a("ma-card", null, [
  /* @__PURE__ */ a("span", { slot: "header" }, "Detail Penumpang"),
  /* @__PURE__ */ a("div", { slot: "header" }, [
    /* @__PURE__ */ a("ma-switcher", null, "sama seperti pemesan")
  ])
], -1), N = /* @__PURE__ */ o({
  __name: "index.ce",
  props: ["data"],
  setup(t) {
    const e = t;
    console.log(JSON.parse(e.data));
    const n = JSON.parse(e.data);
    return (E, A) => (l(), i("div", d, [
      a("div", c, [
        u,
        a("ma-card", null, [
          g,
          a("div", f, [
            h,
            a("ma-input-group", null, [
              y,
              a("ma-dropdown", {
                options: JSON.stringify(r(n).country.Data),
                code: "CodeTelp",
                label: "CodeTelp",
                "as-icon": "Image",
                "data-group": "prepend"
              }, null, 8, x),
              _
            ]),
            k
          ])
        ]),
        b
      ])
    ]));
  }
}), S = `:root{font-size:16px}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0;font-family:Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}input,button,textarea,select{font:inherit}
`, v = /* @__PURE__ */ p(N, [["styles", [S]]]), w = m(v);
function I() {
  customElements.define("ma-booking-detail", w);
}
export {
  I as register
};
