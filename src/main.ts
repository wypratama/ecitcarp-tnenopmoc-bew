// import { createApp } from 'vue';
// import App from './App.vue';
// import FrontendUI from '@misteraladin/frontend-ui';

// const app = createApp(App);
// const end = FrontendUI(app);
// app.use(end);
// app.mount('#app');

import { defineCustomElement } from 'vue';
import FlightDetails from './atoms/flight-detail/index.ce.vue';
import Example from './App.ce.vue';

// console.log(Example.styles); // ['/* css content */']

// register;
customElements.define('my-example', defineCustomElement(Example));
customElements.define('flight-detail', defineCustomElement(FlightDetails));
