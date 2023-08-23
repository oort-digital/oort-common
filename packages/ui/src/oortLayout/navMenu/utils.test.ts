import { isHrefActive, removeBaseName } from "./utils";

function toBeActive(current: string, href: string) {
  const actual = isHrefActive(new URL(current), href);
  expect(actual).toBeTruthy();
}

function toBeNotActive(current: string, href: string) {
  const actual = isHrefActive(new URL(current), href);
  expect(actual).toBeFalsy();
}

test("to be active", async () => {
  toBeActive("http://oort/leasing/", "http://oort/leasing/");
  toBeActive("http://oort/leasing", "http://oort/leasing");
  toBeActive("http://oort/leasing/", "http://oort/leasing");
  toBeActive("http://oort/leasing", "http://oort/leasing/");
  toBeActive("http://oort/leasing/borrow", "http://oort/leasing/");
});

test("to be not active", async () => {
  toBeNotActive("http://oort.digital", "http://oort2.digital");
  toBeNotActive("http://oort/leasing/", "http://oort/leasing/borrow");
});

test("must remove base name", async () => {
  const actual = removeBaseName("/rent", "http://localhost:3000/rent/lend");
  expect(actual).toEqual("/lend");
});

test("must not remove base name", async () => {
  const href = "http://localhost:3000/rent/lend";
  const expected = "/rent/lend";
  let actual = removeBaseName("", href);
  expect(actual).toEqual(expected);

  actual = removeBaseName("mint", href);
  expect(actual).toEqual(expected);

  actual = removeBaseName(null, href);
  expect(actual).toEqual(expected);
});
