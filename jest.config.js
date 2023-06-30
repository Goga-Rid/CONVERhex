/** @type {import('jest').Config} */
const config = {
  verbose: true,
  bail: 1,
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'], 
};

module.exports = config;
