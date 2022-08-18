import { defineCustomElement } from 'vue';

import LoginBanner from './login-banner.ce.vue';

const loginBanner = defineCustomElement(LoginBanner);

export function register() {
  customElements.define('ma-login-banner', loginBanner);
}