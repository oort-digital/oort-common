import { ZERO_ADDR } from "./vars";

export function isNonZeroAddress(str: string): boolean {
  if(!str || str === ZERO_ADDR) { return false }
  return true;
};

export function isZeroAddress(str: string): boolean {
  return str === ZERO_ADDR
};

const CHUNK_LENGTH_DEFAULT = 4;

/** @deprecated use toMassked*/
export function toMasskedAddress(str: string, chunkLength?: number): string {
  return toMassked(str, chunkLength)
}

export function toMassked(str: string, chunkLength?: number): string {
  const cLen = chunkLength || CHUNK_LENGTH_DEFAULT

  if (!str || str.length <= cLen) {
		return str
	}

  const start = str.substring(0, cLen);
  const end = str.substring(str.length - cLen);
  return `${start}...${end}`
}

export function cutLongString(str: string, maxLen: number): string {
  if(str.length <= maxLen) { return str }
  return `${str.substring(0, maxLen - 3)}...`  
}