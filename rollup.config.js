import pkg from './package.json';

export default {
	input: 'src/main.js',
	output: [
		{ file: pkg.main, format: 'es' }
	]
};
