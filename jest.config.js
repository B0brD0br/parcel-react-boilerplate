/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  'roots': ['<rootDir>/src'],
  'testEnvironment': 'jsdom',
  'transform': {
    '^.+\\.tsx?$': 'ts-jest'
  },
  'testRegex': '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  'moduleFileExtensions': [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  'moduleNameMapper': {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.ts',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  'setupFilesAfterEnv': ['<rootDir>/jest.setup.ts'],
};
