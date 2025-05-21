module.exports = {
	testEnvironment: 'jsdom',
	roots: ['<rootDir>'],
	testMatch: ['**/?(*.)+(test).[jt]s?(x)'],
	modulePathIgnorePatterns: [
		'<rootDir>/.vscode/',
		'<rootDir>/.bun/',
		'<rootDir>/node_modules/',
		'<rootDir>/.nvm/',
	],
};
