import './global.css';

import App from './App.svelte';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

const app = new App({
	target: document.body,
});

defineCustomElements(window)

export default app;
