import { defineCustomElement } from 'vue';

import Button from './button.ce.vue';

const maButton = defineCustomElement(Button);

export function register() {
  customElements.define('ma-button', maButton);
}
