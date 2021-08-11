module.exports = {
	roots: ['<rootDir>'],
	testEnvironment: 'jsdom',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
	testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
	transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	transform: {
		'^.+\\.(js|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
	},
	watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
	moduleNameMapper: {
		'\\.(css|scss)$': 'identity-obj-proxy',
		'^@app(.*)$': '<rootDir>/src/$1',
	},
}
