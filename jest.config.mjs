/** @type {import('jest').Config} */
export default {
    detectOpenHandles: true,
    // moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    moduleNameMapper: {
        '\\.(scss|sass|css)$': 'identity-obj-proxy',
        '^@root/(.*)$': '<rootDir>/../src/$1',
    },
    preset: 'ts-jest',
    rootDir: 'test',
    setupFilesAfterEnv: ['<rootDir>/setup.ts'],
    testEnvironment: 'jsdom',
    testRegex: ['.*\\.test\\.tsx?$'],
    testTimeout: 45000,
    transform: {
        '\\.(ts|tsx|js|jsx)$': 'ts-jest',
    },
    verbose: true,
};
