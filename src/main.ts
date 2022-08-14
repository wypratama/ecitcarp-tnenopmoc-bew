import { defineCustomElement, createApp } from 'vue';
import FlightDetails from './atoms/flight-detail/index.ce.vue';
import Example from './App.vue';

// Frontend UI
// import FrontendUi from '@misteraladin/frontend-ui';
import MaButton from '@misteraladin/frontend-ui/src/lib-components/atoms/button/MaButton.vue';
import MaSpinner from '@misteraladin/frontend-ui/src/lib-components/atoms/spinner/MaSpinner.vue';
import '@misteraladin/frontend-ui/dist/styles/index.scss';
// import '@misteraladin/frontend-ui/dist/styles/index.min.css';

const app = createApp(Example);

// Frontend UI
// app.use(FrontendUi);
app.component('MaButton', MaButton);
app.component('MaSpinner', MaSpinner);

app.mount("#app");

// register;
// customElements.define('my-example', defineCustomElement(Example));
customElements.define('flight-detail', defineCustomElement(FlightDetails));
