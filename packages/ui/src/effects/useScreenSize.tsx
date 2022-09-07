
import { useState, useEffect } from 'react';
import { logger } from '@oort/logger';

export interface IScreenBrakepoints {
	xs: number
	sm: number
	md: number
	lg: number
	xl: number
	xxl: number
}

export const defaultScreenBrakepoints: IScreenBrakepoints = {
	xs: 480,
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
	xxl: 1600,
}

export enum ScreenSize {
	xs = 'xs',
	sm = 'sm',
	md = 'md',
	lg = 'lg',
	xl = 'xl',
	xxl = 'xxl',
}

function getSreenSize(width: number, brakepoints: IScreenBrakepoints): ScreenSize {
	
	logger.debug(`window.outerWidth: ${width}`)
	const { sm, md, lg, xl, xxl } = brakepoints
	
	if(width < sm) { return ScreenSize.xs }
	if(width < md) { return ScreenSize.sm }
	if(width < lg) { return ScreenSize.md }
	if(width < xl) { return ScreenSize.lg }
	if(width < xxl) { return ScreenSize.xl }

	return ScreenSize.xxl
}
  

export function useScreenSize(brakepoints?: IScreenBrakepoints): [number, ScreenSize] {
	const bp = brakepoints || defaultScreenBrakepoints
	const [screenSize, setScreenSize] = useState(getSreenSize(window.outerWidth, bp));
	const [screenWidth, setScreenWidth] = useState(window.outerWidth)

	useEffect(() => {
		
		function handleResize() {
			const w = window.outerWidth
			const sz = getSreenSize(w, bp)
			logger.debug(`screenSize: ${sz}`)
			setScreenSize(sz);
			setScreenWidth(w)
		}
  
	  	window.addEventListener('resize', handleResize);
	  	return () => window.removeEventListener('resize', handleResize);
	}, [bp]);

  return [screenWidth, screenSize];
}