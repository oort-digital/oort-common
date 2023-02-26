import { useState, useEffect } from 'react';

export function useSSRCheck(): boolean {
	const [ isSSR, setSSR ] = useState(true)
	useEffect(() => { setSSR(typeof window === 'undefined') }, [])
	return isSSR
}