#!/usr/bin/env node

"use strict"





const neodoc   = require('neodoc')
const throttle = require('../app/throttle')





const args = neodoc.run(`
Name:
	throttle - control the rate that data flows through stdin
Usage:
	throttle [-r <num> | --rate <num>] [-j <num> | --jitter <num>]
Version:
	0.1.0
Description:
	throttle is a minimal utility for controlling the rate that data is emitted from standard input.

Options:
	-r <num>, --rate <num>      the number of newline-delimited lines to emit to stdout per second. [default: 1]
	-j <num>, --jitter <num>    a uniformly distributed jitter in seconds. For example, a value of one would 
	                            stall up to ±1 second for each line emitted.  [default: 0]
`, {
	optionsFirst: true,
	smartOptions: true
})





throttle(args)
