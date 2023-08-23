import { removeBaseName } from "./utils";

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
