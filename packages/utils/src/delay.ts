/** @deprecated use delay */
export const delayAsync = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(() => resolve(), ms));
export const delay = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(() => resolve(), ms));
