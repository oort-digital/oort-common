const config = {  
    transformIgnorePatterns: [
      'node_modules/(?!(@web3modal)/)'
    ],
    transform: {
      '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
    },
    "resetMocks": false,
    "setupFiles": ["jest-localstorage-mock"]
}

export default config
