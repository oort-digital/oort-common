
const ZERO_ADDR = '0x0000000000000000000000000000000000000000'

declare global {
  interface String {
    isNonZeroAddress(): boolean
    isZeroAddress(): boolean
    toMasskedAddress(): string
    cutLongString(maxLen: number): string
  }


}
// eslint-disable-next-line
String.prototype.isNonZeroAddress = function(): boolean {
  if(!this || this === ZERO_ADDR) { return false }
  return true;
};

// eslint-disable-next-line
String.prototype.isZeroAddress = function(): boolean {
  return this === ZERO_ADDR
};

const CHUNK_LENGTH_DEFAULT = 4;
// eslint-disable-next-line
String.prototype.toMasskedAddress = function(chunkLength?: number): string {
  const cLen = chunkLength || CHUNK_LENGTH_DEFAULT

  if (!this || this.length <= cLen) {
		return this as string
	}

  const start = this.substring(0, cLen);
  const end = this.substring(this.length - cLen);
  return `${start}...${end}`
};

// eslint-disable-next-line
String.prototype.cutLongString = function(maxLen: number): string {
  if(this.length <= maxLen) { return this as string }
  return `${this.substring(0, maxLen - 3)}...`  
}

export { ZERO_ADDR }