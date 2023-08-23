type LocationType = {
  origin: string;
  pathname: string;
};

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
