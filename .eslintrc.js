module.exports = {
	root: true,
	extends: [
		'airbnb-typescript',
		'airbnb/hooks',
		'plugin:prettier/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:jest/recommended',
	],
	plugins: ['prettier', 'react', '@typescript-eslint', 'jest'],
	env: {
		browser: true,
		node: true,
		es6: true,
		jest: true,
	},
	ignorePatterns: ['node_modules'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
		render: true
	},
	settings: {
		jest: {
			version: 26,
		},
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2020,
		sourceType: 'module',
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json'],
	},
	rules: {
		'linebreak-style': 0,
		'import/prefer-default-export': 0,
		'react/react-in-jsx-scope': 0,
		'no-param-reassign': [2, { props: false }],
		'import/no-extraneous-dependencies': 0,
		'react/jsx-props-no-spreading': 0,
		'react/prop-types': 0,
		'@typescript-eslint/no-var-requires': 0,
		'global-require': 0,
		'no-underscore-dangle': 0,
		indent: [
			2,
			'tab',
			{
				VariableDeclarator: 1,
				MemberExpression: 1,
				SwitchCase: 1,
				ignoredNodes: ['TemplateLiteral > *'],
			},
		],
		'prettier/prettier': [
			'error',
			{
				useTabs: true,
				tabWidth: 2,
				semi: false,
				singleQuote: true,
				printWidth: 100,
			},
		],
	},
}
