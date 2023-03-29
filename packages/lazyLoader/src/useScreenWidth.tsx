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
	logger?: ILogger
	isSsr?: boolean
}

export function useScreenWidth(isSsr: boolean = false, logger?: ILogger): number {
	
	logWidth('init', isSsr, logger)
	const [screenWidth, setScreenWidth] = useState(() => getWidth(isSsr))

	const handleResize = () => {
		const w = getWidth(isSsr)
		logWidth('handleResize', isSsr, logger)
		setScreenWidth(w)
	}

	const handleResizeDebounced = debounceFunction(handleResize, 300)

	useEffect(() => {
		if(isSsr) {
			return
		}
	  	window.addEventListener('resize', handleResizeDebounced);
	  	return () => window.removeEventListener('resize', handleResizeDebounced)
	}, [isSsr]);

	useEffect(() => {
		const actualWidth = getWidth(isSsr)
		if(actualWidth !== screenWidth) {
			handleResize()
		}
		
	}, [isSsr])

  return screenWidth;
}