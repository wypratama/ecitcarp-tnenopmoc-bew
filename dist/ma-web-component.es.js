const i = /* @__PURE__ */ Object.assign({ "./libs/atoms/button/index.ts": () => import("./index.73794b56.js"), "./libs/atoms/card/index.ts": () => import("./index.6bf71494.js"), "./libs/atoms/inputs/index.ts": () => import("./index.9ebd0a4d.js"), "./libs/atoms/spinner/index.ts": () => import("./index.b49f3ced.js"), "./libs/components/header/index.ts": () => import("./index.7759fe03.js"), "./libs/components/login-banner/index.ts": () => import("./index.deb5231c.js"), "./libs/views/booking-detail/index.ts": () => import("./index.dec6dda8.js") });
for (const t in i)
  i[t]().then((s) => {
    s.register();
  });
