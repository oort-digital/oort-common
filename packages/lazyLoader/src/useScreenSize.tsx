import { useState, useEffect } from 'react';
import { debounceFunction } from '@oort-digital/utils';
import { ILogger } from '@oort-digital/logger';

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

function getSreenSize(width: number, brakepoints: IScreenBrakepoints, logger?: ILogger): ScreenSize {
	
	logger?.debug(`window.outerWidth: ${width}`)

	if(!width) {
		logger?.warn(`window.outerWidth is ${width}`)
	}
	const { sm, md, lg, xl, xxl } = brakepoints
	
	if(width < sm) { return ScreenSize.xs }
	if(width < md) { return ScreenSize.sm }
	if(width < lg) { return ScreenSize.md }
	if(width < xl) { return ScreenSize.lg }
	if(width < xxl) { return ScreenSize.xl }

	return ScreenSize.xxl
}

const logWidth = (msg: string, isSSR: boolean, logger?: ILogger) => {
	if(logger && isSSR) {
		logger.debug(`screenSize ${msg}`)
		logger.debug(`screenSize window.outerWidth: ${window.outerWidth}`)
		logger.debug(`screenSize window.innerWidth: ${window.innerWidth}`)
		logger.debug(`screenSize screen.width: 	 ${window.screen.width}`)
		logger.debug(`screenSize screen.availWidth: ${window.screen.availWidth}`)
	}
}

const getWidth = (isSSR: boolean): number => {
	if(isSSR) {
		return -1
	}
	//return window.screen.availWidth
	return window?.innerWidth	
}

export interface IScreenSizeParams {
	brakepoints?: IScreenBrakepoints,
	logger?: ILogger
	isSsr?: boolean
}

export function useScreenSize({ brakepoints, logger, isSsr }: IScreenSizeParams = {}): [number, ScreenSize] {
	
	const _isSSR = isSsr === undefined ? false : isSsr
	logWidth('init', _isSSR, logger)
	const bp = brakepoints || defaultScreenBrakepoints
	const [screenSize, setScreenSize] = useState(() => getSreenSize(getWidth(_isSSR), bp))
	const [screenWidth, setScreenWidth] = useState(() => getWidth(_isSSR))

	const handleResize = () => {
		const w = getWidth(_isSSR)
		const sz = getSreenSize(w, bp)
		logger?.debug(`screenSize: ${sz}`)
		logWidth('handleResize', _isSSR, logger)
		setScreenSize(sz);
		setScreenWidth(w)
	}

	const handleResizeDebounced = debounceFunction(handleResize, 300)

	useEffect(() => {
		if(_isSSR) {
			return
		}
	  	window.addEventListener('resize', handleResizeDebounced);
	  	return () => window.removeEventListener('resize', handleResizeDebounced)
	}, [bp, _isSSR]);

	useEffect(() => {
		const actualWidth = getWidth(_isSSR)
		if(actualWidth !== screenWidth) {
			handleResize()
		}
		
	}, [_isSSR])

  return [screenWidth, screenSize];
}