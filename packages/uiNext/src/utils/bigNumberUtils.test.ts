import { parseUnits } from "./bigNumberUtils";

test("parseUnits - happy case", async () => {
    const value = 0.123456;
    const actual = parseUnits(value, 6, true)
    expect(actual.toString()).toEqual('123456')
});

test("parseUnits - happy case - round decimals", async () => {
    const value = 0.1234567;
    const actual = parseUnits(value, 6, true)
    expect(actual.toString()).toEqual('123457')
});

test("parseUnits - fractional component exceeds decimals", async () => {
    const value = 0.1234567;
    const regex = /^fractional component exceeds decimals/gm;
    expect(() => parseUnits(value, 6)).toThrow(regex)
});
