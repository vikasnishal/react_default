module.exports = {
  verbose: true,
  roots: ["<rootDir>/src"],
  setupFiles: ["<rootDir>/.jest/register-context.js"],
  setupFilesAfterEnv: ["<rootDir>/.jest/setupTests.js"],
  testPathIgnorePatterns: ["<rootDir>/node_modules"],
  coverageReporters: ["text", "html", "lcov", "json"],
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|jpeg|ttf|woff|woff2|svg)$":
      "identity-obj-proxy"
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\](?!(@amcharts)\\/).+\\.(js|jsx|ts|tsx)$"
  ],
  coverageDirectory: "jest-coverage",
  collectCoverage: true
};
