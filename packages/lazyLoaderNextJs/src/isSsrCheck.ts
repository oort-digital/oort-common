export function isSsrCheck(): boolean {
	return typeof window === 'undefined';
}
