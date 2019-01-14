module.exports = {
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	rules: {
		semi: ['error', 'always'],
		// @TODO: revisit this, we have tons of inconsistencies in the code
		// 'max-len': ['error', {
		// 	code: 120,
		// }],
		'space-before-function-paren': ['error', {
			anonymous: 'never',
			named: 'never',
			asyncArrow: 'always',
		}],
		'space-infix-ops': 'error',
		'keyword-spacing': ['error', {
			before: true,
			after: true,
		}],
		quotes: ['error', 'single', {
			avoidEscape: true,
		}],
		'comma-dangle': ['error', 'always-multiline'],
		'object-curly-spacing': ['error', 'always'],
		'array-bracket-spacing': ['error', 'never'],
		'comma-spacing': ['error', {
			before: false,
			after: true,
		}],
	 'no-console': 'off',
	},
}
