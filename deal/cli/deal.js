#!/usr/bin/env node

"use strict"





const neodoc = require('neodoc')
const deal   = require('../app/deal')





const args = neodoc.run(`
Name:
	deal - control the rate that data flows through stdin
Usage:
	deal [-r <num> | --rate <num>] [-j <num> | --jitter <num>]
Version:
	0.1.0
Description:

Arguments:

Options:
	-r <num>, --rate <num>      the number of lines to emit per-second. [default: 1]
	-j <num>, --jitter <num>    the [default: 0]

`, {
	optionsFirst: true,
	smartOptions: true
})





deal(args)
