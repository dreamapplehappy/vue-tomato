import {terser} from 'rollup-plugin-terser';
import pkg from './package.json';

export default {
	input: 'src/main.js',
	output: [
		{ file: pkg.main, format: 'es', plugins: [terser()] }
	]
};
