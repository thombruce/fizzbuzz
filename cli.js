#!/usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const fizzbuzz = require('./index')

const terms = argv.terms || {
  3: 'Fizz',
  5: 'Buzz'
}
const from = isNaN(argv.from) ? 1 : argv.from
const to = isNaN(argv.to) ? 100 : argv.to

const arr = fizzbuzz(terms, from, to)

arr.forEach(item => console.log(item))
