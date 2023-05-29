export const getKey = (account:string) => {
    return `oort_token_${account.toLowerCase()}`;
}