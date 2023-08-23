import {
  INavItemInternal,
  IStubs,
  IsHrefActiveFunc,
  LocationType,
  StringMap,
} from "./typesAndInterfaces";

const removeTrailingSlash = (href: string) => {
  if (href[href.length - 1] === "/") {
    return href.substring(0, href.length - 1);
  }

  return href;
};

export function isHrefActive(curLocation: LocationType, href: string): boolean {
  const location = new URL(removeTrailingSlash(href));

  if (curLocation.origin === location.origin) {
    if (
      curLocation.pathname ===
      "/" /*|| curLocation.pathname === location.pathname*/
    ) {
      return true;
    }

    if (curLocation.pathname.includes(location.pathname)) {
      return true;
    }
  }

  return false;
}

export function getChildCaptions(item: INavItemInternal): StringMap {
  const map: StringMap = {};

  Object.entries(item).forEach((kvp) => {
    const [key, value] = kvp;

    if (key !== "caption" || kvp[0] !== "icon") {
      map[key] = value;
    }
  });

  return map;
}

export function createIsHrefActiveFunc(
  stubs: IStubs | undefined
): IsHrefActiveFunc {
  if (stubs?.isHrefActive) {
    return stubs.isHrefActive;
  }

  if (stubs?.getCurLocation) {
    const location = stubs.getCurLocation();
    return (href: string) => isHrefActive(location, href);
  }

  return (href: string) => isHrefActive(window.location, href);
}
