import MillionLint from '@million/lint';
import million from 'million/compiler';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { browserslistToTargets } from 'lightningcss';
import browserslist from 'browserslist';

// https://vitejs.dev/config/

const dev = {
	plugins: [react()],
};
let config = dev;
if (process.env.NODE_ENV === 'production') {
	const prod = {
		plugins: [
			million.vite({
				auto: true,
			}),
			react(),
		],
		css: {
			transformer: 'lightningcss',
			lightningcss: {
				targets: browserslistToTargets(browserslist('>= 0.25%')),
			},
		},
		build: {
			cssMinify: 'lightningcss',
		},
	};
	config = prod;
}
const plugins = [MillionLint.vite()];
export default defineConfig(config);

// export default defineConfig({
// 	plugins: [react()],

// 	plugins: [million.vite({ auto: true }), react()],
// 	css: {
// 		transformer: 'lightningcss',
// 		lightningcss: {
// 			targets: browserslistToTargets(browserslist('>= 0.25%')),
// 		},
// 	},
// 	build: {
// 		cssMinify: 'lightningcss',
// 	},
// });
