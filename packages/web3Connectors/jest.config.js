const config = {  
    transformIgnorePatterns: [
      "node_modules/?!(@oort-digital)",
      "node_modules/?!(@web3modal)"
    ],
    transform: {
      '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
    },
    moduleNameMapper: {
      "^@oort-digital/utils(.*)$": "<rootDir>/node_modules/@oort-digital/utils/dist",
    },
    "resetMocks": false,
    "setupFiles": ["jest-localstorage-mock"]
}

export default config
