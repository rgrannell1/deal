
"use strict"





const readline = require('readline')






const readStdin = onLine => {

	readline.createInterface({input: process.stdin}).on('line', onLine)

}





const calculateJitter = jitter => {
	return Math.min(
		Math.floor((Math.random( ) * 2 * jitter) - jitter),
		0
	)
}





const nextTimeout = function* (rate, jitter) {

	for ( let timeout = 0; true; timeout += (rate + calculateJitter(jitter)) ) {

		yield fn => {
			setTimeout(( ) => fn( ), timeout)
		}

	}

}






const throttle = rawArgs => {

	const args  = throttle.preprocess(rawArgs)
	var offset  = 0

	const timeouts = nextTimeout(args.rate, args.jitter)

	readStdin(line => {

		const timeout = timeouts.next( ).value

		timeout(( ) => console.log(line))
		timeout(( ) => { })

	})


}

throttle.preprocess = rawArgs => {

	return {
		rate:   1000 * (1 / rawArgs['--rate']),
		jitter: 1000 * rawArgs['--jitter']
	}

}





module.exports = throttle
