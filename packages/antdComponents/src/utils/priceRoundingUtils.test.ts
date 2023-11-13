import {parsePrice} from "./priceRoundingUtils";

test("the price is greater than 1000000", async () => {
    const value = 1000000000;
    const result = parsePrice(value);
    expect(result).toEqual("1000.00M");
});

test("the price is > 1000 and < 1000000", async () => {
    const value = 999999;
    const result = parsePrice(value);
    expect(result).toEqual("1000.00K");
});

test("the price have two digital after point", async () => {
    const value =50.1;
    const result = parsePrice(value);
    expect(result).toEqual("50.1");
});

test("the price have two digital after point", async () => {
    const value =50.19;
    const result = parsePrice(value);
    expect(result).toEqual("50.19");
});

test("the price have two digital 1 after point", async () => {
    const value =50.127;
    const result = parsePrice(value);
    expect(result).toEqual("50.12...7");
});

test("the price have two digital 2 after point ", async () => {
    const value = 50.627211;
    const result = parsePrice(value);
    expect(result).toEqual("50.62...1");
});

test("the price have two digital after point ", async () => {
    const value = 1.627211;
    const result = parsePrice(value);
    expect(result).toEqual("1.62...1");
});

test("the price digital point >= 5", async () => {
    const value = 0.001221100122361;
    const result = parsePrice(value);
    expect(result).toEqual("0.00...1");
});

test("the price digital point < 5", async () => {
    const value = 0.1716;
    const result = parsePrice(value);
    expect(result).toEqual("0.17...6");
});

