import { createApp } from 'vue'
import App from './App.vue'
// import FrontendUI from '@misteraladin/frontend-ui';


const app = createApp(App)
// app.use(FrontendUI);
app.mount('#app')

import { defineCustomElement } from 'vue'
// import Example from './App.ce.vue'

// console.log(Example.styles) // ['/* css content */']

// register
// customElements.define('my-example', defineCustomElement(Example))