import { openBlock as n, createElementBlock as e, createElementVNode as a, defineCustomElement as t } from "vue";
import { _ as l } from "./_plugin-vue_export-helper.9d74fd37.js";
const o = {}, i = { style: { display: "grid", "grid-template-columns": "8fr 4fr", "max-width": "1200px", margin: "0 auto" } }, r = /* @__PURE__ */ a("div", { style: { display: "flex", "flex-direction": "column", gap: "24px" } }, [
  /* @__PURE__ */ a("ma-login-banner", { "login-url": "https://misteraladin.com" }),
  /* @__PURE__ */ a("ma-card", null, [
    /* @__PURE__ */ a("span", { slot: "header" }, "Detail Pemesan"),
    /* @__PURE__ */ a("div", { style: { display: "flex", "flex-direction": "column", gap: "24px" } }, [
      /* @__PURE__ */ a("div", { style: { display: "grid", "grid-template-columns": "min-content repeat(3, 1fr)", gap: "24px" } }, [
        /* @__PURE__ */ a("ma-input-group", null, [
          /* @__PURE__ */ a("label", { for: "first-name" }, "Title"),
          /* @__PURE__ */ a("ma-dropdown", { options: '["Tuan", "Nyonya", "Nona"]' })
        ]),
        /* @__PURE__ */ a("ma-input-group", null, [
          /* @__PURE__ */ a("label", { for: "first-name" }, "Nama Depan"),
          /* @__PURE__ */ a("ma-input", {
            type: "text",
            class: "hello-there hello-all",
            name: "first-name"
          })
        ]),
        /* @__PURE__ */ a("ma-input-group", null, [
          /* @__PURE__ */ a("label", { for: "first-name" }, "Nama Tengah"),
          /* @__PURE__ */ a("ma-input", {
            type: "text",
            class: "hello-there hello-all",
            name: "first-name"
          })
        ]),
        /* @__PURE__ */ a("ma-input-group", null, [
          /* @__PURE__ */ a("label", { for: "first-name" }, "Nama Belakang"),
          /* @__PURE__ */ a("ma-input", {
            type: "text",
            class: "hello-there hello-all",
            name: "first-name"
          })
        ])
      ]),
      /* @__PURE__ */ a("ul", { style: { display: "flex", "flex-direction": "column", gap: "8px" } }, [
        /* @__PURE__ */ a("li", { style: { "font-family": "'Montserrat'", "font-style": "normal", "font-weight": "500", "font-size": "12px", "line-height": "16px", color: "#757575", "margin-left": "16px" } }, " Untuk WNI, nama dan NIK harus sama dengan yang terdaftar. Untuk WNA, gunakan nama dan nomor yang tercantum di paspor. Untuk WNA , gunakan nama dan nomor vang tercantum di paspor. "),
        /* @__PURE__ */ a("li", { style: { "font-family": "'Montserrat'", "font-style": "normal", "font-weight": "500", "font-size": "12px", "line-height": "16px", color: "#757575", "margin-left": "16px" } }, ' Jika kamu tidak memiliki "nama tengah" (contoh: Ari Wibowo), kosongkan bagian nama tengah dan hanya isi nama depan (contoh: Ari) dan nama akhir (contoh: Wibowo) '),
        /* @__PURE__ */ a("li", { style: { "font-family": "'Montserrat'", "font-style": "normal", "font-weight": "500", "font-size": "12px", "line-height": "16px", color: "#757575", "margin-left": "16px" } }, " Jika kamu hanya memiliki satu nama (contoh: Kartini), harap mengosongkan nama tengah dan mengisi nama belakang dengan nama depan (contoh: Kartini Kartini). ")
      ]),
      /* @__PURE__ */ a("ma-input-group", null, [
        /* @__PURE__ */ a("label", { for: "first-name" }, "Nomor Telepon"),
        /* @__PURE__ */ a("ma-dropdown", {
          options: '["61", "62", "63"]',
          "data-group": "prepend"
        }),
        /* @__PURE__ */ a("ma-input", {
          type: "text",
          class: "hello-there hello-all",
          name: "first-name",
          placeholder: "81234567890",
          "data-group": "primary"
        })
      ]),
      /* @__PURE__ */ a("ma-input-group", null, [
        /* @__PURE__ */ a("label", { for: "first-name" }, "Email"),
        /* @__PURE__ */ a("ma-input", {
          type: "text",
          class: "hello-there hello-all",
          name: "first-name",
          placeholder: "email@domain.com"
        })
      ])
    ])
  ]),
  /* @__PURE__ */ a("ma-card", null, [
    /* @__PURE__ */ a("span", { slot: "header" }, "Detail Penumpang"),
    /* @__PURE__ */ a("div", { slot: "header" }, [
      /* @__PURE__ */ a("ma-switcher", null, "sama seperti pemesan")
    ])
  ])
], -1), m = [
  r
];
function s(d, u) {
  return n(), e("div", i, m);
}
const p = /* @__PURE__ */ l(o, [["render", s]]), f = t(p);
function h() {
  customElements.define("ma-booking-confirmation", f);
}
export {
  h as register
};
