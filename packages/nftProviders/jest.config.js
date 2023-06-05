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
      "^@oort-digital/oort-api-client(.*)$": "<rootDir>/node_modules/@oort-digital/oort-api-client/dist",
    },
    "resetMocks": false,
    "setupFiles": ["jest-localstorage-mock"]
}

export default config
