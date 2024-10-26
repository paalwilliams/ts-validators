import {type Config} from 'jest'

const config: Config = {
	injectGlobals: true,

	transform: {
		"\\.ts?$": "ts-jest", 
	}



}

export default config
