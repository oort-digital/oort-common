export function removeBaseName(baseName: string | null, href: string): string {
  const path = new URL(href).pathname;

  if (!baseName) {
    return path;
  }

  if (baseName === path.substring(0, baseName.length)) {
    return path.substring(baseName.length);
  }
  return path;
}
