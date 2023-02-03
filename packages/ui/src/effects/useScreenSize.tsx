
import { useState, useEffect } from 'react';
import { logger } from '@oort-digital/logger';
import { debounceFunction } from '@oort-digital/utils';

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

	if(!width) {
		logger.warn(`window.outerWidth is ${width}`)
	}
	const { sm, md, lg, xl, xxl } = brakepoints
	
	if(width < sm) { return ScreenSize.xs }
	if(width < md) { return ScreenSize.sm }
	if(width < lg) { return ScreenSize.md }
	if(width < xl) { return ScreenSize.lg }
	if(width < xxl) { return ScreenSize.xl }

	return ScreenSize.xxl
}

const logWidth = (msg: string) => {
	logger.debug(`screenSize ${msg}`)
	logger.debug(`screenSize window.outerWidth: ${window.outerWidth}`)
	logger.debug(`screenSize window.innerWidth: ${window.innerWidth}`)
	logger.debug(`screenSize screen.width: 	 ${window.screen.width}`)
	logger.debug(`screenSize screen.availWidth: ${window.screen.availWidth}`)
}

const getWidth = (): number => {
	//return window.screen.availWidth
	return window.innerWidth
}
  
export function useScreenSize(brakepoints?: IScreenBrakepoints): [number, ScreenSize] {
	logWidth('init')
	const bp = brakepoints || defaultScreenBrakepoints
	const [screenSize, setScreenSize] = useState(getSreenSize(getWidth(), bp));
	const [screenWidth, setScreenWidth] = useState(getWidth())

	const handleResize = () => {
		const w = getWidth()
		const sz = getSreenSize(w, bp)
		logger.debug(`screenSize: ${sz}`)
		logWidth('handleResize')
		setScreenSize(sz);
		setScreenWidth(w)
	}

	const handleResizeDebounced = debounceFunction(handleResize, 300)

	useEffect(() => {
	  	window.addEventListener('resize', handleResizeDebounced);
	  	return () => window.removeEventListener('resize', handleResizeDebounced)
	}, [bp]);

  return [screenWidth, screenSize];
}