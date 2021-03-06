module.exports = {
  setupFiles: ['<rootDir>/tests/unit/setup'],
  setupTestFrameworkScriptFile: '<rootDir>/tests/unit/matchers',
  testMatch: ['**/(*.)unit.js'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: require('./aliases.config').jest,
  snapshotSerializers: ['jest-serializer-vue'],
  mapCoverage: true,
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!**/node_modules/**',
    '!src/main.js',
    '!src/app.vue',
    '!src/router/index.js',
    '!src/router/routes.js',
    '!src/state/store.js',
    '!src/state/helpers.js',
    '!src/state/modules/index.js',
    '!src/components/_globals.js',
  ],
}
