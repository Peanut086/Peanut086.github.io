import theme from 'vitepress/theme'

import('./assets/custom.scss')
import('./assets/var.scss')
import PnLayout from "./component/PnLayout.vue";
import PnHome from "./component/PnHome/index.vue";

export default {
	...theme,
	Layout: PnLayout,
	NotFound: () => "404",
	enhanceApp(ctx) {
		theme.enhanceApp(ctx);
		const {app} = ctx;
		// here register global components
		app.component("PnHome", PnHome);
	}
}
