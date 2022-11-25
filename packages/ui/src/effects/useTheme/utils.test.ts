import { getCookieDomain } from "./utils";

test("getCookieDomain. oort.digital", async () => {
    const host = 'https://dashboard-test.oort.digital/'
    const expected = 'oort.digital'
    const actual = getCookieDomain(host)
    expect(actual).toEqual(expected);
});

test("getCookieDomain. netlify.app", async () => {
    const host = 'https://63813a30ccf1f500082d462d--dashboard-test-env.netlify.app/'
    const expected = '63813a30ccf1f500082d462d--dashboard-test-env.netlify.app'
    const actual = getCookieDomain(host)
    expect(actual).toEqual(expected);
});