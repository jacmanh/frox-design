module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/tests/__mocks__/svg.tsx',
    '^@tests/(.*)$': '<rootDir>/tests/$1',
    '^@theme/(.*)$': '<rootDir>/components/theme/$1',
    '^@atoms/(.*)$': '<rootDir>/components/atoms/$1',
    '^@molecules/(.*)$': '<rootDir>/components/molecules/$1',
    '^@organisms/(.*)$': '<rootDir>/components/organisms/$1'
  }
}
