export const getChainName = (chainId: number) => {
    if(chainId === 1) { return 'Ethereum' }
    if(chainId === 4) { return 'Rinkeby' }
    if(chainId === 5) { return 'Goerli' }
    if(chainId === 56) { return 'Bsc' }
    if(chainId === 97) { return 'BscTest' }
    if(chainId === 137) { return 'Matic' }
    if(chainId === 80001) { return 'Mumbai' }
    throw new Error(`Unknown chainId: ${chainId}`)
}