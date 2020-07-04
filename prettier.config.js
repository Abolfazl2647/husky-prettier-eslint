module.exports = {
	printWidth: 100,
	singleQuote: true,
	quoteProps: 'consistent',
	trailingComma: 'all',
	arrowParens: 'avoid',
	bracketSpacing: true,
	jsxSingleQuote: true,
	jsxBracketSameLine: false,
	tabWidth: 4,
	useTabs: true,
	semi: true,
	overrides: [
		{
			files: '*.js',
			options: {
				parser: 'babel',
			},
		},
	],
};
