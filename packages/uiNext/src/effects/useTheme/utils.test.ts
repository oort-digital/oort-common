import { getCookieDomain } from "./utils";

const getCookieDomainTest = (host: string, expected: string) => {
    let actual = getCookieDomain(host)
    expect(actual).toEqual(expected);
    actual = getCookieDomain(`${host}/`)
    expect(actual).toEqual(expected);
}

test("getCookieDomain. oort.digital", () => getCookieDomainTest('https://dashboard-test.oort.digital', 'oort.digital'))

test("getCookieDomain. netlify.app", () => {
    getCookieDomainTest(
        '63813a30ccf1f500082d462d--dashboard-test-env.netlify.app',
        '63813a30ccf1f500082d462d--dashboard-test-env.netlify.app')
});