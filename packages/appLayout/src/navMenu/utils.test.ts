import { isHrefActive } from "./utils";

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
  toBeNotActive(
    "https://app-test.oort.digital",
    "https://app-test.oort.digital/rent/avtivities"
  );
  toBeNotActive(
    "https://app-test.oort.digital/rent/avtivities",
    "https://app-test.oort.digital"
  );
  toBeNotActive("http://oort.digital", "http://oort2.digital");
  toBeNotActive("http://oort/leasing/", "http://oort/leasing/borrow");
});
