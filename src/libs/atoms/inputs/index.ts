import { defineCustomElement } from 'vue';

import Input from './input.ce.vue';
import Dropdown from './dropdown.ce.vue';
import InputGroup from './inputGroup.ce.vue';
import Switcher from './switcher.ce.vue';

const input = defineCustomElement(Input);
const switcher = defineCustomElement(Switcher);
const dropdown = defineCustomElement(Dropdown);
const inputGroup = defineCustomElement(InputGroup);

export function register() {
  customElements.define('ma-input', input);
  customElements.define('ma-switcher', switcher);
  customElements.define('ma-dropdown', dropdown);
  customElements.define('ma-input-group', inputGroup);
}
