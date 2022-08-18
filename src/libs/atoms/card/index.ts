import { defineCustomElement } from 'vue';

import Card from './card.ce.vue';

const card = defineCustomElement(Card);

export function register() {
  customElements.define('ma-card', card);
}
